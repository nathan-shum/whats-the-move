"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { SimpleCarousel } from "../../components/card-hover-carousel";
import { DirectionAwareHover } from "../../components/hover-card";

const Itinerary = () => {
  const [itinerary, setItinerary] = useState<any[]>([]);

  // Fetch itinerary from the server
  const fetchItinerary = async () => {
    const location = localStorage.getItem("location");
    const startTime = localStorage.getItem("startTime");
    const endTime = localStorage.getItem("endTime");
    const activities = localStorage.getItem("activities");
    const numberOfActivities = localStorage.getItem("numberOfActivities");

    console.log(location, startTime, endTime, activities, numberOfActivities);
    if (location && startTime && endTime && activities && numberOfActivities) {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/itinerary",
          {
            location,
            time: `${startTime} to ${endTime}`,
            activities: activities
              .split(",")
              .map((activity) => activity.trim()),
            numberOfActivities: parseInt(numberOfActivities, 10),
          }
        );

        console.log("Response from backend:", response.data);

        if (response.data && Array.isArray(response.data.Activities)) {
          return response.data.Activities;
        } else {
          console.error("Unexpected itinerary format:", response.data);
          return [];
        }
      } catch (error) {
        console.error("Error fetching itinerary:", error);
        throw error;
      }
    }
    return [];
  };

  // Fetch itinerary data when the component mounts
  useEffect(() => {
    let isMounted = true;
    fetchItinerary()
      .then((data) => {
        console.log("Fetched itinerary data:", data);
        if (isMounted && Array.isArray(data)) {
          setItinerary(data);
        } else {
          console.error("Fetched data is not an array:", data);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch itinerary:", error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <p className="font-bold text-black text-[40px] tracking-[0] leading-[normal] px-20 py-10">
        Discover Your Perfect Day: Handpick Your Adventures!
      </p>
      {itinerary.length > 0 ? (
        <div className="max-w-8xl">
          <SimpleCarousel>
            {itinerary.map((activity, index) => (
              <DirectionAwareHover
                key={index}
                imageUrl={activity.imageUrl || "/placeholder.jpg"} // Use placeholder if imageUrl is null
                className="h-80 w-56 md:h-[40rem] md:w-96"
              >
                <p className="font-bold text-xl text-white">
                  {activity.Activity}
                </p>
                <p className="font-normal text-sm mt-2 text-white">
                  {activity["Brief Description"]}
                </p>
                <p className="font-normal text-sm mt-2 text-white">
                  Time: {activity["Time Frame"]}
                </p>
                <p className="font-normal text-sm mt-2 text-white">
                  Location: {activity.Location}
                </p>
                <p className="font-normal text-sm mt-2 text-white">
                  Address: {activity.Address}
                </p>
              </DirectionAwareHover>
            ))}
          </SimpleCarousel>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Itinerary;
