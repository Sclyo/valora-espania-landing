
import { supabase } from "@/lib/supabase";
import { AppointmentRequest, TimeSlot } from "@/types/appointment";
import { format } from "date-fns";

export const fetchAvailableTimeSlots = async (): Promise<TimeSlot[]> => {
  const { data, error } = await supabase
    .from("available_time_slots")
    .select("*")
    .eq("is_booked", false)
    .order("start_time");

  if (error) {
    console.error("Error fetching available time slots:", error);
    throw error;
  }

  return data as TimeSlot[];
};

export const submitAppointmentRequest = async (appointment: AppointmentRequest) => {
  // First insert the appointment request
  const { data, error } = await supabase
    .from("appointment_requests")
    .insert({
      time_slot_id: appointment.time_slot_id,
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

  // Then update the time slot to mark it as booked
  const { error: updateError } = await supabase
    .from("available_time_slots")
    .update({ is_booked: true })
    .eq("id", appointment.time_slot_id);

  if (updateError) {
    console.error("Error updating time slot:", updateError);
    throw updateError;
  }

  return data;
};

export const formatTimeSlot = (timeSlot: TimeSlot): string => {
  const start = new Date(timeSlot.start_time);
  const end = new Date(timeSlot.end_time);
  
  const dateStr = format(start, 'EEEE, MMMM d, yyyy');
  const startStr = format(start, 'h:mm a');
  const endStr = format(end, 'h:mm a');
  
  return `${dateStr} · ${startStr} - ${endStr}`;
};
