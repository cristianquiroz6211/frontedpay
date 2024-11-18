import { useState } from 'react';

export default function RegisterLocation() {
  const [formData, setFormData] = useState({
    ubicacionNombre: '',
    sedeId: '',
    tipoUbicacionId: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Register Location</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
        <div>
          <label htmlFor="ubicacionNombre" className="block text-sm font-medium text-gray-700">
            Location Name
          </label>
          <input
            id="ubicacionNombre"
            type="text"
            value={formData.ubicacionNombre}
            onChange={(e) => setFormData({ ...formData, ubicacionNombre: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="e.g., Central Library"
          />
        </div>

        <div>
          <label htmlFor="sedeId" className="block text-sm font-medium text-gray-700">
            Campus ID
          </label>
          <input
            id="sedeId"
            type="text"
            value={formData.sedeId}
            onChange={(e) => setFormData({ ...formData, sedeId: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="Campus UUID"
          />
        </div>

        <div>
          <label htmlFor="tipoUbicacionId" className="block text-sm font-medium text-gray-700">
            Location Type ID
          </label>
          <input
            id="tipoUbicacionId"
            type="text"
            value={formData.tipoUbicacionId}
            onChange={(e) => setFormData({ ...formData, tipoUbicacionId: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            placeholder="Location Type UUID"
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-green-700 hover:bg-green-800 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}