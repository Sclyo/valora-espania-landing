
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchAvailableTimeSlots, submitAppointmentRequest } from "@/services/appointmentService";
import { AppointmentRequest, TimeSlot } from "@/types/appointment";
import TimeSlotSelector from "@/components/TimeSlotSelector";
import AppointmentForm from "@/components/AppointmentForm";
import { useToast } from "@/hooks/use-toast";

const AppointmentSection = () => {
  const { toast } = useToast();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Obtener slots de tiempo disponibles de la API
  const { data: timeSlots = [], isLoading, error } = useQuery({
    queryKey: ["availableTimeSlots"],
    queryFn: fetchAvailableTimeSlots,
  });

  // Manejar el envío del formulario de cita
  const handleSubmit = async (formData: Omit<AppointmentRequest, "date" | "time">) => {
    if (!selectedTimeSlot) {
      toast({
        title: "Error",
        description: "Por favor, selecciona un horario disponible antes de enviar.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const appointmentData: AppointmentRequest = {
        ...formData,
        date: selectedTimeSlot.date,
        time: selectedTimeSlot.time,
      };

      await submitAppointmentRequest(appointmentData);

      toast({
        title: "¡Cita solicitada!",
        description: "Hemos recibido tu solicitud y nos pondremos en contacto contigo pronto.",
      });

      // Resetear el formulario
      setSelectedTimeSlot(null);
    } catch (error) {
      console.error("Error al enviar la solicitud de cita:", error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu solicitud. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="appointment" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-valoraBlue mb-4">Agenda una cita</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Selecciona un horario disponible y completa el formulario para programar una consulta con nuestros asesores financieros.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Selector de horarios */}
          <Card>
            <CardHeader>
              <CardTitle>Selecciona un horario</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <p className="text-center text-gray-500">Cargando horarios disponibles...</p>
              ) : error ? (
                <p className="text-center text-red-500">
                  Error al cargar los horarios. Por favor, intenta refrescar la página.
                </p>
              ) : (
                <TimeSlotSelector
                  timeSlots={timeSlots}
                  selectedTimeSlot={selectedTimeSlot}
                  onSelectTimeSlot={setSelectedTimeSlot}
                />
              )}
            </CardContent>
          </Card>

          {/* Formulario de información personal */}
          <Card>
            <CardHeader>
              <CardTitle>Información de contacto</CardTitle>
            </CardHeader>
            <CardContent>
              <AppointmentForm
                onSubmit={handleSubmit}
                isLoading={isSubmitting}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
