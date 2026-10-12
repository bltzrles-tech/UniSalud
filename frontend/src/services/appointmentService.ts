export interface Appointment {
  id?: string;
  specialty: string;
  doctorName: string;
  date: string;
  time: string;
  reason: string;
  status?: 'pending' | 'confirmed' | 'cancelled';
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export async function getAppointments(): Promise<Appointment[]> {
  try {
    const response = await fetch(`${API_URL}/appointments`);
    if (!response.ok) throw new Error('Error al obtener las citas');
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function createAppointment(appointment: Appointment): Promise<Appointment> {
  const response = await fetch(`${API_URL}/appointments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(appointment),
  });
  if (!response.ok) throw new Error('Error al agendar la cita');
  return await response.json();
}