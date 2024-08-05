import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

export async function generateItinerary(location, time, activities, numberOfActivities) {
  const model = genAI.getGenerativeModel({ 
    model: 'gemini-1.5-pro',
    generationConfig: { responseMimeType: "application/json" }
  });

  const prompt = 
  `Can you generate an itinerary for a day in ${location} from ${time} with ${numberOfActivities} activities?
   Some specific activities the user may like include: ${activities}. 
    Please provide your response as a valid JSON object with the following structure:
    {
        "Activities": [
        {
            "Activity": "name of the activity",
            "Location": "name of the location",
            "Address": "address of the location",
            "Time Frame": "start time - end time",
            "Time Spent": "duration in minutes",
            "Brief Description": "a brief description of the activity",
            "Long Description": "a long description of the activity",
            "Website": "a link to the activity's company website"
        }
        ]
    }`;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text)
  return text
}