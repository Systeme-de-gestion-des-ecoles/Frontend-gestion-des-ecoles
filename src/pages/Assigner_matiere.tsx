import React, { useState } from 'react';

const Assignation: React.FC = () => {
  const [formData, setFormData] = useState({
    enseignant: '',
    matiere: '',
    classe: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const inputClass = "w-full px-3 py-2 rounded bg-gray-200 text-sm";
  const groupClass = "mb-5";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <form onSubmit={handleSubmit} className="bg-[#032B5F] p-8 mx-3 rounded-lg w-[400px]">
        <h2 className="text-white text-center text-2xl font-bold mb-6">ASSIGNATION MATIÈRE</h2>

        {/* Nom de l'enseignant */}
        <div className={groupClass}>
          <input
            type="text"
            name="enseignant"
            placeholder="Nom de l'enseignant"
            value={formData.enseignant}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Matière */}
        <div className={groupClass}>
          <select
            name="matiere"
            value={formData.matiere}
            onChange={handleChange}
            className={`${inputClass} ${!formData.matiere ? 'text-gray-500' : 'text-black'}`}
          >
            <option value="" disabled hidden>Choisir la matière</option>
            <option value="Mathématiques">Mathématiques</option>
            <option value="Physique">Physique</option>
            <option value="SVT">SVT</option>
            <option value="Français">Français</option>
            <option value="Histoire">Histoire</option>
          </select>
        </div>

        {/* Classe */}
        <div className={groupClass}>
          <select
            name="classe"
            value={formData.classe}
            onChange={handleChange}
            className={`${inputClass} ${!formData.classe ? 'text-gray-500' : 'text-black'}`}
          >
            <option value="" disabled hidden>Choisir la classe</option>
            <option value="6e">6e</option>
            <option value="5e">5e</option>
            <option value="4e">4e</option>
            <option value="3e">3e</option>
            <option value="Seconde">Seconde</option>
            <option value="Première">Première</option>
            <option value="Terminale">Terminale</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-bold py-2 rounded hover:bg-orange-600"
        >
          SOUMETTRE
        </button>
      </form>
    </div>
  );
};

export default Assignation;
