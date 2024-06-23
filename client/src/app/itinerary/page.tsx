'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import ActivityCard from '../../components/activity-card';
import ActivityInfo from '@/components/activity-info';


const Itinerary = () => {
  const [itinerary, setItinerary] = useState<any[]>([]);

  useEffect(() => {
    const fetchItinerary = async () => {
      const location = localStorage.getItem('location');
      const startTime = localStorage.getItem('startTime');
      const endTime = localStorage.getItem('endTime');
      const activities = localStorage.getItem('activities');
      const numberOfActivities = localStorage.getItem('numberOfActivities');

      if (location && startTime && endTime && activities && numberOfActivities) {
        try {
          const response = await axios.post('http://localhost:8080/api/itinerary', {
            location,
            time: `${startTime} to ${endTime}`,
            activities: activities.split(',').map((activity) => activity.trim()),
            numberOfActivities: parseInt(numberOfActivities, 10),
          });
          console.log('Response from backend:', response.data);
          const responseData = response.data.itinerary;

          // Extract JSON using regex
          const jsonMatch = responseData.match(/```json\s*([\s\S]*?)\s*```/);
          if (jsonMatch && jsonMatch[1]) {
            console.log('JSON Match:', jsonMatch[1]);
            const parsedItinerary = JSON.parse(jsonMatch[1]);
            console.log('Parsed Itinerary:', parsedItinerary);
            setItinerary(parsedItinerary.Itinerary || []); // Ensure it sets as an array
          } else {
            console.error('Failed to extract JSON from response');
          }
        } catch (error) {
          console.error('Error fetching itinerary:', error);
        }
      }
    };

    fetchItinerary();
  }, []);

  useEffect(() => {
    console.log('Current itinerary state:', itinerary);
  }, [itinerary]);

  console.log('Rendering Itinerary:', itinerary); // Log itinerary before rendering
  console.log('Itinerary Length:', itinerary.length); // Log itinerary length before rendering

  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleActivityClick = ({activity} : {activity: any}) => {
    console.log("Activity clicked:", activity); // Add this log to verify the click handler
    setSelectedActivity(activity);
  };

  return (
    <div>
      <p className="[font-family:'Poppins-Bold',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-[normal] px-20 py-10">
        Discover Your Perfect Day: Handpick Your Adventures!
      </p>
      <div className='px-20 w-[1000px] py-10'>
        {itinerary.length > 0 ? (
            itinerary.map((activity, index) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                onClick={() => handleActivityClick(activity)}
              />
            ))
          ) : (
            <p>Loading...</p>
        )}
      </div>
      <div className='px-20 w-[1000px] py-10'>
        {selectedActivity && (
          <ActivityInfo activity={selectedActivity}/>
        )}
      </div>
    </div>
  );
};

export default Itinerary;
