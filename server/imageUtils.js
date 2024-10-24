import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export async function fetchImageUrl(activityName) {
  const apiKey = process.env.SERP_API_KEY;
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
      return data.images_results[0].original;
    }
  } catch (error) {
    console.error("Error fetching image:", error);
  }
  return null;
}
