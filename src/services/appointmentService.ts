
import { supabase } from "@/lib/supabase";
import { TimeSlot } from "@/types/appointment";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export const fetchAvailableTimeSlots = async (): Promise<TimeSlot[]> => {
  const { data, error } = await supabase
    .from("available_time_slots")
    .select("*")
    .eq("is_available", true)
    .order("date")
    .order("time");

  if (error) {
    console.error("Error al obtener horarios disponibles:", error);
    throw error;
  }

  return data as TimeSlot[];
};

export const formatTimeSlot = (timeSlot: TimeSlot): string => {
  // Format the date using Spanish locale
  const dateParts = timeSlot.date.split('-');
  const dateObj = new Date(
    parseInt(dateParts[0]), 
    parseInt(dateParts[1]) - 1, 
    parseInt(dateParts[2])
  );
  
  return format(dateObj, 'EEEE, d \'de\' MMMM', { locale: es });
};
