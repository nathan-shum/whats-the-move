'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react'

const Itinerary = () => {
  const [itinerary, setItinerary] = useState<string>('');

  useEffect(() => {
    const fetchItinerary = async () => {
      const location = localStorage.getItem('location');
      const startTime = localStorage.getItem('startTime');
      const endTime = localStorage.getItem('endTime');
      const activities = localStorage.getItem('activities');
      const numberOfActivities = localStorage.getItem('numberOfActivities');

      if (location && startTime && endTime && activities && numberOfActivities) {
        const response = await axios.post('http://localhost:8080/api/itinerary', {
          location,
          time: `${startTime} to ${endTime}`,
          activities: activities.split(',').map(activity => activity.trim()),
          numberOfActivities: parseInt(numberOfActivities, 10),
        });

        setItinerary(response.data.itinerary);
      }
    };

    fetchItinerary();
  }, []);

  return (
    <div>
      <h1>Generated Itinerary</h1>
      {itinerary ? <p>{itinerary}</p> : <p>Loading...</p>}
    </div>
  );
}

export default Itinerary