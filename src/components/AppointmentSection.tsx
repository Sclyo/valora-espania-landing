
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchAvailableTimeSlots } from "@/services/appointmentService";
import { TimeSlot } from "@/types/appointment";
import TimeSlotSelector from "@/components/TimeSlotSelector";
import { useToast } from "@/hooks/use-toast";

const AppointmentSection = () => {
  const { toast } = useToast();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);

  // Obtener slots de tiempo disponibles de la API
  const { data: timeSlots = [], isLoading, error } = useQuery({
    queryKey: ["availableTimeSlots"],
    queryFn: fetchAvailableTimeSlots,
  });

  const handleTimeSlotSelect = (timeSlot: TimeSlot) => {
    setSelectedTimeSlot(timeSlot);
    toast({
      title: "Día seleccionado",
      description: "Has seleccionado el día correctamente.",
    });
  };

  return (
    <section id="appointment" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-valoraBlue mb-4">Selecciona un día</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Selecciona un día disponible para tu preferencia.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {/* Selector de horarios */}
          <Card>
            <CardHeader>
              <CardTitle>Selecciona un día</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <p className="text-center text-gray-500">Cargando días disponibles...</p>
              ) : error ? (
                <p className="text-center text-red-500">
                  Error al cargar los días. Por favor, intenta refrescar la página.
                </p>
              ) : (
                <TimeSlotSelector
                  timeSlots={timeSlots}
                  selectedTimeSlot={selectedTimeSlot}
                  onSelectTimeSlot={handleTimeSlotSelect}
                />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
