
import { supabase } from "@/lib/supabase";
import { AppointmentRequest, TimeSlot } from "@/types/appointment";
import { format } from "date-fns";

export const fetchAvailableTimeSlots = async (): Promise<TimeSlot[]> => {
  const { data, error } = await supabase
    .from("available_time_slots")
    .select("*")
    .eq("is_available", true)
    .order("date")
    .order("time");

  if (error) {
    console.error("Error fetching available time slots:", error);
    throw error;
  }

  return data as TimeSlot[];
};

export const submitAppointmentRequest = async (appointment: AppointmentRequest) => {
  // Insert the appointment request
  const { data, error } = await supabase
    .from("appointment_requests")
    .insert({
      date: appointment.date,
      time: appointment.time,
      name: appointment.name,
      email: appointment.email,
      phone: appointment.phone || null,
      message: appointment.message || null
    })
    .select();

  if (error) {
    console.error("Error submitting appointment request:", error);
    throw error;
  }

  // Update the time slot to mark it as not available
  const { error: updateError } = await supabase
    .from("available_time_slots")
    .update({ is_available: false })
    .eq("date", appointment.date)
    .eq("time", appointment.time);

  if (updateError) {
    console.error("Error updating time slot availability:", updateError);
    throw updateError;
  }

  return data;
};

export const formatTimeSlot = (timeSlot: TimeSlot): string => {
  // Format the date 
  const dateParts = timeSlot.date.split('-');
  const dateObj = new Date(
    parseInt(dateParts[0]), 
    parseInt(dateParts[1]) - 1, 
    parseInt(dateParts[2])
  );
  
  const dateStr = format(dateObj, 'EEEE, MMMM d, yyyy');
  
  return `${dateStr} · ${timeSlot.time}`;
};
