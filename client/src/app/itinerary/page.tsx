'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import ActivityCard from '../../components/activity-card';
import ActivityInfo from '@/components/activity-info';


const Itinerary = () => {
  const [itinerary, setItinerary] = useState<any[]>([]);

  const fetchItinerary = async () => {
    const location = localStorage.getItem('location');
    const startTime = localStorage.getItem('startTime');
    const endTime = localStorage.getItem('endTime');
    const activities = localStorage.getItem('activities');
    const numberOfActivities = localStorage.getItem('numberOfActivities');
    
    console.log(location, startTime, endTime, activities, numberOfActivities);
    if (location && startTime && endTime && activities && numberOfActivities) {
      try {
        const response = await axios.post('http://localhost:8080/api/itinerary', {
          location,
          time: `${startTime} to ${endTime}`,
          activities: activities.split(',').map((activity) => activity.trim()),
          numberOfActivities: parseInt(numberOfActivities, 10),
        });
        
        console.log('Response from backend:', response.data);
        
        if (response.data && Array.isArray(response.data.Activities)) {
          return response.data.Activities;
        } else {
          console.error('Unexpected itinerary format:', response.data);
          return [];
        }
      } catch (error) {
        console.error('Error fetching itinerary:', error);
        throw error;
      }
    }
    return null;
  
  };
  
  useEffect(() => {
    let isMounted = true;
    fetchItinerary().then((data) => {
      console.log('Fetched itinerary data:', data);
      if (isMounted && Array.isArray(data)) {
        setItinerary(data);
      } else {
        console.error('Fetched data is not an array:', data);
      }
    }).catch((error) => {
      console.error('Failed to fetch itinerary:', error);
    });
  
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    console.log('Current itinerary state:', itinerary);
  }, [itinerary]);

  console.log('Rendering Itinerary:', itinerary); // Log itinerary before rendering
  console.log('Itinerary Length:', itinerary.length); // Log itinerary length before rendering

  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleActivityClick = (activity: React.SetStateAction<null>) => {
    console.log("Activity clicked:", activity); // Verify the click handler
    setSelectedActivity(activity);
  };

  console.log("Selected Activity:", selectedActivity); // Log the selected activity state

  return (
    <div>
      <p className="[font-family:'Poppins-Bold',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-[normal] px-20 py-10">
        Discover Your Perfect Day: Handpick Your Adventures!
      </p>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', justifyContent: 'center', alignItems: 'flex-start', width: '100%' }}>
        <div className='px-20 w-[1000px] py-10'>
          {itinerary.length > 0 ? (
            itinerary.map((activity, index) => (
              <ActivityCard
                key={index}
                activity={activity}
                onClick={handleActivityClick}
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
    </div>
  );
};

export default Itinerary;
