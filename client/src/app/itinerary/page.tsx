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
      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white w-full h-[1024px] relative">
          <p className="absolute top-9 left-[85px] [font-family:'Poppins-Bold',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-[normal]">
            Discover Your Perfect Day: Handpick Your Adventures!
          </p>
          {itinerary ? <p className="absolute top-[200px] left-[85px] w-[900px]">{itinerary}</p> : <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
}

export default Itinerary