import React from 'react';
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Check, Undo } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActivityCarouselProps {
  selectedActivity: any;
  onPrevious: () => void;
  onNext: () => void;
  onRemove: () => void;
  onAccept: () => void;
  onUndo: () => void;
}

const ActivityCarousel: React.FC<ActivityCarouselProps> = ({
  selectedActivity,
  onPrevious,
  onNext,
  onRemove,
  onAccept,
  onUndo
}) => {
  if (!selectedActivity) return null;

  return (
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
        <Button variant="outline" size="icon" onClick={onPrevious}>
          <ChevronLeft />
        </Button>
        <Button variant="outline" size="icon" onClick={onRemove}>
          <X color="red" />
        </Button>
        <Button variant="outline" size="icon" onClick={onUndo}>
          <Undo color="gray" />
        </Button>
        <Button variant="outline" size="icon" onClick={onAccept}>
          <Check color="green" />
        </Button>
        <Button variant="outline" size="icon" onClick={onNext}>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default ActivityCarousel;