import React, { useState } from 'react';
import type { Appointment } from '../services/appointmentService';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (appointment: Appointment) => void;
}

export const AppointmentModal: React.FC<Props> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<Appointment>({
    specialty: 'Medicina General',
    doctorName: 'Dr. López',
    date: '',
    time: '',
    reason: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6 space-y-4">
        <h2 className="text-xl font-bold text-gray-900">Reservar Cita Médica</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">Especialidad</label>
            <select
              className="w-full border rounded-lg p-2 text-sm mt-1"
              value={formData.specialty}
              onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
            >
              <option value="Medicina General">Medicina General</option>
              <option value="Odontología">Odontología</option>
              <option value="Psicología">Psicología</option>
              <option value="Tópico">Tópico</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Fecha</label>
            <input
              type="date"
              required
              className="w-full border rounded-lg p-2 text-sm mt-1"
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Hora</label>
            <input
              type="time"
              required
              className="w-full border rounded-lg p-2 text-sm mt-1"
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Motivo de consulta</label>
            <textarea
              rows={2}
              className="w-full border rounded-lg p-2 text-sm mt-1"
              placeholder="Describe tus síntomas brevemente..."
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
            ></textarea>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Confirmar Cita
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};