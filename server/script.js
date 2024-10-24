// script.js
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { fetchImageUrl } from './imageUtils.js';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function generateItinerary(location, time, activities, numberOfActivities) {
  const model = genAI.getGenerativeModel({ 
    model: 'gemini-1.5-pro',
    generationConfig: { responseMimeType: "application/json" }
  });

  const prompt = 
  `Can you generate an itinerary for a day in ${location} from ${time} with ${numberOfActivities} activities?
   Some specific activities the user may like include: ${activities}. 
   For each activity, please provide 5 alternative options.
   Please provide your response as a valid JSON object with the following structure, and only output the JSON object, with no additional text:
    {
        "Activities": [
        {
            "MainActivity": {
                "Activity": "name of the activity",
                "Location": "name of the location",
                "Address": "address of the location",
                "Time Frame": "start time - end time",
                "Time Spent": "duration in minutes",
                "Brief Description": "a brief description of the activity",
                "Long Description": "a long description of the activity",
                "Website": "a link to the activity's company website"
            },
            "Alternatives": [
                {
                    "Activity": "name of alternative activity 1",
                    "Location": "name of the location",
                    "Address": "address of the location",
                    "Brief Description": "a brief description of the activity"
                },
                // ... 4 more alternative activities
            ]
        }
        // ... more activities
        ]
    }`;

  let retries = 3;
  while (retries > 0) {
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();

      let itinerary = JSON.parse(text);

      for (const activitySet of itinerary.Activities) {
        activitySet.MainActivity.imageUrl = await fetchImageUrl(activitySet.MainActivity.Activity);
        for (const alt of activitySet.Alternatives) {
          alt.imageUrl = await fetchImageUrl(alt.Activity);
        }
      }

      return itinerary;
    } catch (error) {
      console.error('Error generating itinerary:', error);
      retries--;
      if (retries === 0) throw error;
      await delay(8000);
    }
  }
}
