
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AppointmentRequest } from "@/types/appointment";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Definir el esquema del formulario con campos requeridos que coincidan con AppointmentRequest
const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Dirección de correo electrónico inválida"),
  phone: z.string().optional(),
  message: z.string().optional(),
});

// Definir el tipo de valores del formulario a partir del esquema
type FormValues = z.infer<typeof formSchema>;

// Definir props excluyendo los campos que se proporcionarán en otro lugar
type AppointmentFormProps = {
  onSubmit: (data: Omit<AppointmentRequest, "date" | "time">) => void;
  isLoading: boolean;
};

const AppointmentForm: React.FC<AppointmentFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const handleSubmit = (values: FormValues) => {
    // Pasar los valores del formulario al controlador onSubmit
    onSubmit({
      name: values.name,
      email: values.email,
      phone: values.phone,
      message: values.message,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Tu nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="tu.email@ejemplo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono (opcional)</FormLabel>
              <FormControl>
                <Input placeholder="Tu número de teléfono" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensaje (opcional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Cualquier información adicional que quieras hacernos saber"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Enviando..." : "Reservar cita"}
        </Button>
      </form>
    </Form>
  );
};

export default AppointmentForm;
