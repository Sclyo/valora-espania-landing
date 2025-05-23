
import { supabase } from "@/lib/supabase";
import { AppointmentRequest, TimeSlot } from "@/types/appointment";
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

export const submitAppointmentRequest = async (appointment: AppointmentRequest) => {
  // Insertar la solicitud de cita
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
    console.error("Error al enviar la solicitud de cita:", error);
    throw error;
  }

  // Actualizar el horario para marcarlo como no disponible
  const { error: updateError } = await supabase
    .from("available_time_slots")
    .update({ is_available: false })
    .eq("date", appointment.date)
    .eq("time", appointment.time);

  if (updateError) {
    console.error("Error al actualizar la disponibilidad del horario:", updateError);
    throw updateError;
  }

  return data;
};

export const formatTimeSlot = (timeSlot: TimeSlot): string => {
  // Formatear la fecha usando locale español
  const dateParts = timeSlot.date.split('-');
  const dateObj = new Date(
    parseInt(dateParts[0]), 
    parseInt(dateParts[1]) - 1, 
    parseInt(dateParts[2])
  );
  
  const dateStr = format(dateObj, 'EEEE, d \'de\' MMMM \'de\' yyyy', { locale: es });
  
  return `${dateStr} · ${timeSlot.time}`;
};
