
import React from "react";
import { TimeSlot } from "@/types/appointment";
import { formatTimeSlot } from "@/services/appointmentService";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface TimeSlotSelectorProps {
  timeSlots: TimeSlot[];
  selectedTimeSlotId: string | null;
  onSelectTimeSlot: (timeSlotId: string) => void;
}

const TimeSlotSelector: React.FC<TimeSlotSelectorProps> = ({
  timeSlots,
  selectedTimeSlotId,
  onSelectTimeSlot,
}) => {
  if (!timeSlots.length) {
    return (
      <Card className="bg-gray-50">
        <CardContent className="pt-6">
          <p className="text-center text-gray-500">
            No available time slots at the moment. Please check back later.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white">
      <CardContent className="pt-6">
        <RadioGroup
          value={selectedTimeSlotId || ""}
          onValueChange={onSelectTimeSlot}
        >
          <div className="space-y-4">
            {timeSlots.map((slot) => (
              <div
                key={slot.id}
                className={`flex items-center space-x-3 p-3 rounded-md border ${
                  selectedTimeSlotId === slot.id
                    ? "border-primary bg-primary/10"
                    : "border-gray-200"
                } cursor-pointer transition-all hover:border-primary/50`}
                onClick={() => onSelectTimeSlot(slot.id)}
              >
                <RadioGroupItem value={slot.id} id={slot.id} />
                <Label
                  htmlFor={slot.id}
                  className="flex-1 cursor-pointer font-medium"
                >
                  {formatTimeSlot(slot)}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default TimeSlotSelector;
