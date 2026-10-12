import React from 'react';
import type { Appointment } from '../services/appointmentService';

interface Props {
  appointment: Appointment;
}

export const AppointmentCard: React.FC<Props> = ({ appointment }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
      <div>
        <h3 className="font-semibold text-lg text-gray-800">{appointment.specialty}</h3>
        <p className="text-sm text-gray-600">Atención: {appointment.doctorName}</p>
        <p className="text-xs text-gray-400 mt-1">
          📅 {appointment.date} — ⏰ {appointment.time}
        </p>
      </div>
      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
        {appointment.status || 'Pendiente'}
      </span>
    </div>
  );
};