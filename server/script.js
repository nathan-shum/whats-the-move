import { config } from "dotenv";
config();

import OpenAI from "openai";

const openai = new OpenAI();

export async function generateItinerary(location, time, activities, numberOfActivities) {
  const completion = await openai.chat.completions.create({
    messages: [{ 
        role: "user", 
        content: `Can you generate an itinerary for a day in ${location} from ${time} with ${numberOfActivities} activities: ${activities}
        in your response please provide me a numbered list in a JSON format where each proposed activity includes the following information:
        Activity: name of the activity, 
        Location: name of the location,
        Time Frame: The start and end time of this activity
        Time Spent: A proposed amount of time in minutes to spend doing the activity,
        Brief Description: a brief description of the activity, 
        Long Description: a long description of the activity, 
        Activity Address: the address of the location, 
        Google Maps: a google maps link to the address of the location, 
        Website: a link to the activity's company website,
        Photo: A link to a photo of the activity or location
        `}],
    model: "gpt-4-turbo",
  });
  const messageContent = completion.choices[0].message.content;
  
  // Log the type of message content
  console.log('Type of message content:', typeof messageContent);
  
  // Log the actual message content
  console.log('Message content:', messageContent);
  
  return completion.choices[0].message.content;
}

(async () => {
    const itinerary = await generateItinerary('San Francisco', '10:00 AM', '5:00 PM', ['sightseeing', 'lunch', 'museum'], '1 hour');
    console.log(itinerary);
})();
  