import { config } from "dotenv";
config();

import OpenAI from "openai";

const openai = new OpenAI();

export async function generateItinerary(location, startTime, endTime, activities, numberOfActivities) {
  const completion = await openai.chat.completions.create({
    messages: [{ 
        role: "user", 
        content: `Generate an for ${location} from ${startTime} to ${endTime} with ${numberOfActivities} activities: ${activities.join(', ')}`}],
    model: "gpt-3.5-turbo-16k",
  });
  console.log(completion.choices[0].message.content)
  return completion.choices[0].message.content;
}

(async () => {
    const itinerary = await generateItinerary('San Francisco', '10:00 AM', '5:00 PM', ['sightseeing', 'lunch', 'museum'], '1 hour');
    console.log(itinerary);
})();
  