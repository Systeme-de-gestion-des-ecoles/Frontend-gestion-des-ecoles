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
    <div className="flex items-center justify-center lg:p-4 py-20">
      <div className="bg-[#002F6C] rounded-t-lg text-white shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit} className="p-8">
          <h2 className="text-white text-center text-2xl font-bold mb-4">Assignation de matière</h2>

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

          {/* Bouton de soumission */}
          <button
            type="submit"
            className="w-full bg-orange text-black font-bold py-2 rounded hover:bg-orange-600"
          >
            Soumettre
          </button>
        </form>

        <div className="h-2 bg-orange rounded-t-lg"></div>
      </div>
    </div>
  );
};

export default Assignation;
