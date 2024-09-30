import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { generateItinerary } from './script.js';

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Itinerary Planner API');
});

app.post('/api/itinerary', async (req, res) => {
    const { location, time, activities, numberOfActivities } = req.body;
    console.log("A request has been made!");
    try {
      const itinerary = await generateItinerary(location, time, activities, numberOfActivities);
      res.json(itinerary); // Now includes image URLs
      console.log(itinerary);
    } catch (error) {
      console.error('Error generating itinerary:', error);
      res.status(500).send('An error occurred while generating the itinerary');
    }
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});