"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Map from "@/components/earth";

const Itinerary = () => {
  const [itinerary, setItinerary] = useState<any[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<any>(null);
  const [showMap, setShowMap] = useState(false);
  const [isEarthView, setIsEarthView] = useState(false);
  const [isStreetView, setIsStreetView] = useState(false);

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
          setSelectedActivity(data[0]); // Set the first activity as selected
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
    <div className="flex flex-col h-screen bg-[#faf3e0]">
      {/* Header */}
      <header className="bg-[#5c3d2e] text-white p-4">
        <h1 className="text-2xl font-bold">WTM</h1>
        <div className="flex items-center space-x-4 mt-2">
          <span>{localStorage.getItem("location")}</span>
          <span>{itinerary.length} activities</span>
          <select className="bg-[#8b5e3c] text-white p-1 rounded">
            <option>category</option>
          </select>
        </div>
      </header>

      {/* Activity Timeline */}
      <div className="flex items-center justify-between p-4 bg-[#fedd91]">
        <span className="font-bold">{localStorage.getItem("startTime")}</span>
        <div className="flex-1 flex justify-center space-x-4 overflow-x-auto">
          {itinerary.map((activity, index) => (
            <Card
              key={index}
              className="relative w-48 h-24 cursor-pointer overflow-hidden flex-shrink-0"
              onClick={() => setSelectedActivity(activity)}
            >
              <Image
                src={activity.imageUrl || "/placeholder.jpg"}
                alt={activity.Activity}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="text-white font-bold text-center">
                  {activity.Activity}
                </span>
              </div>
            </Card>
          ))}
        </div>
        <span className="font-bold">{localStorage.getItem("endTime")}</span>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Google Maps/Street View */}
        <div className="flex-1 relative">
          <Map
            addresses={itinerary.map((activity) => activity.Address).filter(Boolean)}
            selectedActivity={selectedActivity}
            isStreetView={isStreetView}
          />
          <Button
            className="absolute top-4 right-4 bg-white text-black z-10"
            onClick={() => setIsStreetView(!isStreetView)}
          >
            Switch to {isStreetView ? "Map" : "Street"} View
          </Button>
        </div>

        {/* Activity Carousel */}
        {selectedActivity && (
          <div className="w-96 bg-white p-4 overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">{selectedActivity.Activity}</h2>
            <Image
              src={selectedActivity.imageUrl || "/placeholder.jpg"}
              alt={selectedActivity.Activity}
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
            <p className="mb-4">{selectedActivity["Brief Description"]}</p>
            <p className="mb-2">Time: {selectedActivity["Time Frame"]}</p>
            <p className="mb-2">Location: {selectedActivity.Location}</p>
            <p className="mb-4">Address: {selectedActivity.Address}</p>
            <div className="flex justify-between">
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  const currentIndex = itinerary.indexOf(selectedActivity);
                  if (currentIndex > 0) {
                    setSelectedActivity(itinerary[currentIndex - 1]);
                  }
                }}
              >
                <ChevronLeft />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  const currentIndex = itinerary.indexOf(selectedActivity);
                  if (currentIndex < itinerary.length - 1) {
                    setSelectedActivity(itinerary[currentIndex + 1]);
                  }
                }}
              >
                <ChevronRight />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Itinerary;
