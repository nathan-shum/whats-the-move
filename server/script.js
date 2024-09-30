// script.js
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from 'axios'; // Make sure axios is installed

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function generateItinerary(location, time, activities, numberOfActivities) {
  const model = genAI.getGenerativeModel({ 
    model: 'gemini-1.5-pro',
    generationConfig: { responseMimeType: "application/json" }
  });

  const prompt = 
  `Can you generate an itinerary for a day in ${location} from ${time} with ${numberOfActivities} activities?
   Some specific activities the user may like include: ${activities}. 
    Please provide your response as a valid JSON object with the following structure, and only output the JSON object, with no additional text:
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
  const text = await response.text();
  // console.log(text);

  // Parse the text into JSON
  let itinerary;
  try {
    itinerary = JSON.parse(text);
  } catch (error) {
    console.error('Error parsing JSON:', error);
    throw new Error('Invalid JSON response from LLM');
  }

  // For each activity, fetch an image URL from SerpAPI
  for (const activity of itinerary.Activities) {
    const imageUrl = await fetchImageUrl(activity.Activity);
    activity.imageUrl = imageUrl;
  }

  return itinerary;
}

// Function to fetch images using SerpAPI
async function fetchImageUrl(activityName) {
  const apiKey = process.env.SERP_API_KEY; // Get the API key from your .env file
  const params = {
    engine: 'google_images',
    q: activityName,
    gl: 'us',
    hl: 'en',
    ijn: '0',
    api_key: apiKey,
  };
  const queryString = new URLSearchParams(params).toString();
  const url = `https://serpapi.com/search?${queryString}`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    if (data.images_results && data.images_results.length > 0) {
      // Use the 'original' image URL
      return data.images_results[0].original;
    }
  } catch (error) {
    console.error("Error fetching image:", error);
  }
  return null; // Return null if no image found
}
