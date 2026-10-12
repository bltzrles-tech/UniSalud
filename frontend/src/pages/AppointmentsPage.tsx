import { useState, useEffect } from 'react';
import { Appointment, getAppointments, createAppointment } from '../services/appointmentService';
import { AppointmentCard } from '../components/AppointmentCard';
import { AppointmentModal } from '../components/AppointmentModal';

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getAppointments().then(setAppointments);
  }, []);

  const handleCreateAppointment = async (newAppointment: Appointment) => {
    try {
      const saved = await createAppointment(newAppointment);
      setAppointments((prev) => [...prev, saved]);
    } catch {
      // En caso de que el backend aún no esté conectado, agregamos la cita localmente para probar la UI
      setAppointments((prev) => [...prev, { ...newAppointment, id: Date.now().toString(), status: 'pending' }]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Portal de Citas - Centro Médico UNI</h1>
          <p className="text-sm text-gray-500">Gestiona y reserva tus citas médicas universitarias</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg text-sm"
        >
          + Nueva Cita
        </button>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-gray-700">Mis Citas Programadas</h2>
        {appointments.length === 0 ? (
          <p className="text-sm text-gray-400 bg-white p-6 rounded-xl text-center border">
            No tienes citas registradas actualmente.
          </p>
        ) : (
          appointments.map((apt, index) => <AppointmentCard key={apt.id || index} appointment={apt} />)
        )}
      </div>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateAppointment}
      />
    </div>
  );
}