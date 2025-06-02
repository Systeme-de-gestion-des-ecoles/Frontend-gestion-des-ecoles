import React, { useState } from 'react';

const Remplissage_note: React.FC = () => {
  const [formData, setFormData] = useState({
    classe: '',
    matiere: '',
    code: '',
    sequence: '',
    coefficient: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const inputClass = "w-full px-3 py-2 rounded bg-gray-200 text-sm";
  const groupClass = "form-group mb-4";
  const placeholderClass = (val: string) =>
    `${inputClass} ${!val ? 'text-gray-500' : 'text-black'}`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <form onSubmit={handleSubmit} className="bg-[#032B5F] p-8 mx-3 rounded-lg w-[400px]">
        <h2 className="text-white text-center text-2xl font-bold mb-6">REMPLISSAGE DE NOTES</h2>

        <div className={groupClass}>
          <select
            name="classe"
            value={formData.classe}
            onChange={handleChange}
            className={placeholderClass(formData.classe)}
          >
            <option value="" disabled hidden>Classe</option>
            <option value="6e">6e</option>
            <option value="5e">5e</option>
            <option value="4e">4e</option>
            <option value="3e">3e</option>
          </select>
        </div>

        <div className={groupClass}>
          <select
            name="matiere"
            value={formData.matiere}
            onChange={handleChange}
            className={placeholderClass(formData.matiere)}
          >
            <option value="" disabled hidden>Matière</option>
            <option value="Math">Math</option>
            <option value="Français">Français</option>
            <option value="SVT">SVT</option>
            <option value="Physique">Physique</option>
          </select>
        </div>

        <div className={groupClass}>
          <select
            name="code"
            value={formData.code}
            onChange={handleChange}
            className={placeholderClass(formData.code)}
          >
            <option value="" disabled hidden>Code</option>
            <option value="MAT101">MAT101</option>
            <option value="FRA102">FRA102</option>
            <option value="SVT103">SVT103</option>
            <option value="PHY104">PHY104</option>
          </select>
        </div>

        <div className={groupClass}>
          <select
            name="sequence"
            value={formData.sequence}
            onChange={handleChange}
            className={placeholderClass(formData.sequence)}
          >
            <option value="" disabled hidden>Séquence</option>
            <option value="1">Séquence 1</option>
            <option value="2">Séquence 2</option>
            <option value="3">Séquence 3</option>
          </select>
        </div>

        <div className={groupClass}>
          <select
            name="coefficient"
            value={formData.coefficient}
            onChange={handleChange}
            className={placeholderClass(formData.coefficient)}
          >
            <option value="" disabled hidden>Coefficient</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-orange text-white font-bold py-2 rounded hover:bg-orange-600"
        >
          SOUMETTRE
        </button>
      </form>
    </div>
  );
};

export default Remplissage_note;
