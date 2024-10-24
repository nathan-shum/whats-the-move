import { GoogleGenerativeAI } from "@google/generative-ai";
import { fetchImageUrl } from './imageUtils.js';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function replaceActivity(location, time, excludedActivity) {
  const model = genAI.getGenerativeModel({ 
    model: 'gemini-1.5-pro',
    generationConfig: { responseMimeType: "application/json" }
  });

  const prompt = 
  `Can you suggest 5 new activities in ${location} for the time frame ${time}? 
   Please do not suggest ${excludedActivity}.
   Please provide your response as a valid JSON object with the following structure, and only output the JSON object, with no additional text:
    {
      "Alternatives": [
        {
          "Activity": "name of the activity",
          "Location": "name of the location",
          "Address": "address of the location",
          "Time Frame": "${time}",
          "Time Spent": "duration in minutes",
          "Brief Description": "a brief description of the activity",
          "Long Description": "a long description of the activity",
          "Website": "a link to the activity's company website"
        },
        // ... 4 more activities
      ]
    }`;

  let retries = 3;
  while (retries > 0) {
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();

      let newActivities = JSON.parse(text);
      for (const activity of newActivities.Alternatives) {
        activity.imageUrl = await fetchImageUrl(activity.Activity);
      }

      return newActivities;
    } catch (error) {
      console.error('Error generating activities:', error);
      retries--;
      if (retries === 0) throw error;
      await delay(8000);
    }
  }
}
