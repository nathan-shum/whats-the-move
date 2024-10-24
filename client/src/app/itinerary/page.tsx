"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Map from "@/components/earth";
import ActivityCarousel from "@/components/activity-card";

const Itinerary = () => {
  const [itinerary, setItinerary] = useState<any[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<any>(null);
  const [alternatives, setAlternatives] = useState<any[]>([]);
  const [showMap, setShowMap] = useState(false);
  const [isEarthView, setIsEarthView] = useState(false);
  const [isStreetView, setIsStreetView] = useState(false);
  const [history, setHistory] = useState<any[]>([]);

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
          return response.data;
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
        if (isMounted && Array.isArray(data.Activities)) {
          setItinerary(data.Activities.map(activitySet => activitySet.MainActivity));
          setSelectedActivity(data.Activities[0].MainActivity);
          setAlternatives(data.Activities.map(activitySet => activitySet.Alternatives));
        } else {
          console.error("Fetched data is not in the expected format:", data);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch itinerary:", error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleRemoveActivity = async () => {
    const currentIndex = itinerary.indexOf(selectedActivity);
    if (alternatives[currentIndex].length > 0) {
      // Use an alternative if available
      const newActivity = alternatives[currentIndex].shift();
      const newItinerary = [...itinerary];
      newItinerary[currentIndex] = newActivity;
      setItinerary(newItinerary);
      setSelectedActivity(newActivity);
      setHistory([...history, itinerary]);
    } else {
      // If no alternatives, fetch new ones
      try {
        const response = await axios.post("http://localhost:8080/api/replace-activity", {
          location: localStorage.getItem("location"),
          time: selectedActivity["Time Frame"],
          excludedActivity: selectedActivity.Activity
        });

        const newActivities = response.data.Alternatives;
        const newActivity = newActivities.shift();
        const newItinerary = [...itinerary];
        newItinerary[currentIndex] = newActivity;
        setItinerary(newItinerary);
        setSelectedActivity(newActivity);
        setAlternatives(prevAlternatives => {
          const newAlternatives = [...prevAlternatives];
          newAlternatives[currentIndex] = newActivities;
          return newAlternatives;
        });
        setHistory([...history, itinerary]);
      } catch (error) {
        console.error("Error replacing activity:", error);
      }
    }
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const previousItinerary = history[history.length - 1];
      setItinerary(previousItinerary);
      setSelectedActivity(previousItinerary[itinerary.indexOf(selectedActivity)]);
      setHistory(history.slice(0, -1));
    }
  };

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
        <ActivityCarousel
          selectedActivity={selectedActivity}
          onPrevious={() => {
            const currentIndex = itinerary.indexOf(selectedActivity);
            if (currentIndex > 0) {
              setSelectedActivity(itinerary[currentIndex - 1]);
            }
          }}
          onNext={() => {
            const currentIndex = itinerary.indexOf(selectedActivity);
            if (currentIndex < itinerary.length - 1) {
              setSelectedActivity(itinerary[currentIndex + 1]);
            }
          }}
          onRemove={handleRemoveActivity}
          onAccept={() => {/* Implement accept logic if needed */}}
          onUndo={handleUndo}
        />
      </div>
    </div>
  );
};

export default Itinerary;
