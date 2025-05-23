
import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { TimeSlot, AppointmentRequest } from "@/types/appointment";
import { fetchAvailableTimeSlots, submitAppointmentRequest } from "@/services/appointmentService";
import TimeSlotSelector from "./TimeSlotSelector";
import AppointmentForm from "./AppointmentForm";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const AppointmentSection = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
  const [step, setStep] = useState<"select-time" | "fill-form">("select-time");

  // Fetch available time slots
  const { 
    data: timeSlots = [], 
    isLoading: isLoadingSlots,
    isError: isSlotsError,
    refetch: refetchTimeSlots 
  } = useQuery({
    queryKey: ["availableTimeSlots"],
    queryFn: fetchAvailableTimeSlots
  });

  // Appointment submission mutation
  const { mutate, isPending: isSubmitting } = useMutation({
    mutationFn: submitAppointmentRequest,
    onSuccess: () => {
      toast.success("Appointment requested successfully! We'll be in touch soon.");
      setSelectedTimeSlot(null);
      setStep("select-time");
      refetchTimeSlots();
    },
    onError: (error) => {
      console.error("Error booking appointment:", error);
      toast.error("Failed to book appointment. Please try again.");
    }
  });

  // Go to form step when a time slot is selected
  useEffect(() => {
    if (selectedTimeSlot) {
      setStep("fill-form");
    }
  }, [selectedTimeSlot]);

  const handleSelectTimeSlot = (timeSlot: TimeSlot) => {
    setSelectedTimeSlot(timeSlot);
    setStep("fill-form");
  };

  const handleFormSubmit = (formData: Omit<AppointmentRequest, "date" | "time">) => {
    if (!selectedTimeSlot) {
      toast.error("Please select a time slot first");
      setStep("select-time");
      return;
    }

    const appointmentData: AppointmentRequest = {
      ...formData,
      date: selectedTimeSlot.date,
      time: selectedTimeSlot.time
    };

    mutate(appointmentData);
  };

  const handleBackToTimeSlots = () => {
    setStep("select-time");
  };

  return (
    <section id="appointment" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-valoraBlue mb-4">Schedule an Appointment</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Select a convenient time for a consultation with our financial advisors.
          </p>
        </div>

        {isSlotsError ? (
          <div className="text-center p-8 bg-white rounded-lg shadow">
            <p className="text-red-500">
              There was an error loading available time slots. Please refresh the page to try again.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Step indicators */}
            <div className="flex mb-8">
              <div 
                className={cn(
                  "flex-1 pb-2 border-b-2 text-center font-medium",
                  step === "select-time" ? "border-primary text-primary" : "border-gray-200 text-gray-400"
                )}
              >
                1. Select Time
              </div>
              <div 
                className={cn(
                  "flex-1 pb-2 border-b-2 text-center font-medium",
                  step === "fill-form" ? "border-primary text-primary" : "border-gray-200 text-gray-400"
                )}
              >
                2. Your Details
              </div>
            </div>

            {isLoadingSlots ? (
              <div className="flex justify-center items-center p-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-2">Loading available time slots...</span>
              </div>
            ) : (
              <>
                <div className={cn("transition-opacity duration-300", step === "select-time" ? "block opacity-100" : "hidden opacity-0")}>
                  <TimeSlotSelector 
                    timeSlots={timeSlots} 
                    selectedTimeSlot={selectedTimeSlot} 
                    onSelectTimeSlot={handleSelectTimeSlot} 
                  />
                </div>
                
                <div className={cn("transition-opacity duration-300", step === "fill-form" ? "block opacity-100" : "hidden opacity-0")}>
                  {selectedTimeSlot && (
                    <>
                      <button 
                        onClick={handleBackToTimeSlots}
                        className="mb-4 text-sm flex items-center text-gray-500 hover:text-primary transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Back to time selection
                      </button>
                      <AppointmentForm 
                        onSubmit={handleFormSubmit} 
                        isLoading={isSubmitting} 
                      />
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default AppointmentSection;
