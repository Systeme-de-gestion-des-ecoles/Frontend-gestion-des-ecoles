import React, { useState } from "react";
import SchoolIcon from '@mui/icons-material/School';

function AddClass({ onClose, onAddClass }: { 
  onClose: () => void, 
  onAddClass: (newClass: { name: string; chief: string }) => void 
}) {
  const [formData, setFormData] = useState({
    name: '',
    level: '',
    maxStudents: '',
    classLeader: '',
    schoolYear: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newClass = {
      name: formData.level,
      chief: formData.classLeader
    };
    onAddClass(newClass);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-bleuFonce text-white p-6 rounded-md w-full max-w-md mx-auto shadow-md">
        <h2 className="text-center text-lg font-bold mb-6 uppercase">Ajouter une classe</h2>

        <select
          name="level"
          value={formData.level}
          onChange={handleChange}
          className="w-full px-4 bg-grisClaire py-2 mb-4 rounded text-black"
          required
        >
          <option value="">Niveau Scolaire</option>
          <option value="6eme">6ème</option>
          <option value="5eme">5ème</option>
          <option value="4eme">4ème</option>
          <option value="3eme">3ème</option>
          <option value="2nd">2nd</option>
        </select>

        <input
          name="maxStudents"
          type="number"
          placeholder="Nombre Maxime d'élèves"
          value={formData.maxStudents}
          onChange={handleChange}
          className="w-full bg-grisClaire px-4 py-2 mb-4 rounded text-black"
          required
        />

        <div className="relative mb-4">
          <input
            name="classLeader"
            type="text"
            placeholder="Nom du chef de classe"
            value={formData.classLeader}
            onChange={handleChange}
            className="w-full bg-grisClaire px-4 py-2 rounded text-black"
            required
          />
          <SchoolIcon className="absolute top-3 right-3 text-black" />
        </div>

        <select
          name="schoolYear"
          value={formData.schoolYear}
          onChange={handleChange}
          className="w-full px-4 bg-grisClaire py-2 mb-6 rounded text-black"
          required
        >
          <option value="">Annee Scolaire</option>
          <option value="2024-2025">2024-2025</option>
          <option value="2025-2026">2025-2026</option>
        </select>

        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-[#e09127] hover:bg-[#cc7e17] text-white py-2 rounded font-bold"
          >
            VALIDER
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded font-bold"
          >
            ANNULER
          </button>
        </div>
      </div>
      <div className="h-2 w-full max-w-md mx-auto bg-[#e09127] rounded-b-md" />
    </form>
  );
}

export default AddClass;