import React, { useState } from 'react';

const AjouterMatiere: React.FC = () => {
  const [formData, setFormData] = useState({
    nomMatiere: '',
    code: '',
    heures: '',
    classe: '',
    description: '',
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
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-[#032B5F] p-8 mx-3 rounded-lg w-[400px]">
        <h2 className="text-white text-center text-2xl font-bold mb-6">AJOUTER UNE MATIÈRE</h2>

        <div className={groupClass}>
          <input
            type="text"
            name="nomMatiere"
            placeholder="Nom de la matière"
            value={formData.nomMatiere}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div className={groupClass}>
          <input
            type="text"
            name="code"
            placeholder="Code"
            value={formData.code}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div className={groupClass}>
          <select
            name="heures"
            value={formData.heures}
            onChange={handleChange}
            className={`${inputClass} ${!formData.heures ? 'text-gray-500' : 'text-black'}`}
          >
            <option value="" disabled hidden>Nombre d’heures</option>
            <option value="1h">1h</option>
            <option value="2h">2h</option>
            <option value="3h">3h</option>
            <option value="4h">4h</option>
            <option value="5h">5h</option>
          </select>
        </div>

        <div className={groupClass}>
          <select
            name="classe"
            value={formData.classe}
            onChange={handleChange}
            className={`${inputClass} ${!formData.classe ? 'text-gray-500' : 'text-black'}`}
          >
            <option value="" disabled hidden>Classe concernée</option>
            <option value="6e">6e</option>
            <option value="5e">5e</option>
            <option value="4e">4e</option>
            <option value="3e">3e</option>
            <option value="Seconde">Seconde</option>
            <option value="Première">Première</option>
            <option value="Terminale">Terminale</option>
          </select>
        </div>

        <div className={groupClass}>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className={inputClass}
          />
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

export default AjouterMatiere;
