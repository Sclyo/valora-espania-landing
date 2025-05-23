
import React from "react";
import { TimeSlot } from "@/types/appointment";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { formatTimeSlot } from "@/services/appointmentService";

interface TimeSlotSelectorProps {
  timeSlots: TimeSlot[];
  selectedTimeSlot: TimeSlot | null;
  onSelectTimeSlot: (timeSlot: TimeSlot) => void;
}

const TimeSlotSelector: React.FC<TimeSlotSelectorProps> = ({
  timeSlots,
  selectedTimeSlot,
  onSelectTimeSlot,
}) => {
  // Group time slots by date to only show each date once
  const uniqueDates = Array.from(new Set(timeSlots.map(slot => slot.date)))
    .map(date => {
      const firstSlot = timeSlots.find(slot => slot.date === date);
      return firstSlot;
    })
    .filter(slot => slot !== undefined) as TimeSlot[];

  if (!uniqueDates.length) {
    return (
      <Card className="bg-gray-50">
        <CardContent className="pt-6">
          <p className="text-center text-gray-500">
            No hay días disponibles en este momento. Por favor, revisa más tarde.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white">
      <CardContent className="pt-6">
        <RadioGroup
          value={selectedTimeSlot?.date || ""}
          onValueChange={(value) => {
            const slot = uniqueDates.find(slot => slot.date === value);
            if (slot) {
              onSelectTimeSlot(slot);
            }
          }}
        >
          <div className="space-y-4">
            {uniqueDates.map((slot) => (
              <div
                key={slot.id}
                className={`flex items-center space-x-3 p-3 rounded-md border ${
                  selectedTimeSlot?.date === slot.date
                    ? "border-primary bg-primary/10"
                    : "border-gray-200"
                } cursor-pointer transition-all hover:border-primary/50`}
                onClick={() => onSelectTimeSlot(slot)}
              >
                <RadioGroupItem value={slot.date} id={slot.id} />
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
