import React, { useState } from 'react';
import GetAppIcon from '@mui/icons-material/GetApp';

const Eleve: React.FC = () => {
  const [formData, setFormData] = useState({
    cycle: '',
    classe: '',
    matricule: '',
    dateNaissance: '',
    nomParent: '',
    photo: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const inputClass = "w-full px-3 py-2 rounded bg-white text-sm";

  return (
    <div className="flex items-center justify-center lg:p-4 py-20">
      <div className="bg-[#002F6C] rounded-t-lg text-black shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit} className="p-8">
          <h2 className="text-white text-center text-lg font-bold mb-6">Elève</h2>

          <div className="space-y-5">
            <select
              name="cycle"
              data-testid="cycle"
              value={formData.cycle}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Cycle</option>
              <option value="1er Cycle">1er Cycle</option>
              <option value="2nd Cycle">2nd Cycle</option>
            </select>

            <select
              name="classe"
              data-testid="classe"
              value={formData.classe}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Classe</option>
              <option value="6e">6e</option>
              <option value="5e">5e</option>
              <option value="4e">4e</option>
              <option value="3e">3e</option>
              <option value="2nd">2nd</option>
              <option value="1e">1e</option>
              <option value="Tle">Tle</option>
            </select>

            <input
              type="text"
              name="matricule"
              placeholder="Matricule"
              value={formData.matricule}
              onChange={handleChange}
              className={inputClass}
            />

            <input
              type="date"
              name="dateNaissance"
              data-testid="dateNaissance"
              value={formData.dateNaissance}
              onChange={handleChange}
              className={inputClass}
            />

            <input
              type="text"
              name="nomParent"
              placeholder="Nom du Parent"
              value={formData.nomParent}
              onChange={handleChange}
              className={inputClass}
            />

            <label className="relative block">
              <input
                type="file"
                accept="image/*"
                name="photo"
                onChange={handleChange}
                className="opacity-0 absolute inset-0 z-10 cursor-pointer"
              />
              <div className="flex items-center justify-between px-3 py-2 rounded bg-white text-sm border border-gray-300">
                <span className="text-gray-500">
                  {formData.photo ? formData.photo.name : 'Télécharger une photo'}
                </span>
                <GetAppIcon />
              </div>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-orange text-black font-bold py-2 rounded hover:bg-orange-600 mt-6"
          >
            Soumettre
          </button>
        </form>

        <div className="h-2 bg-orange rounded-t-lg"></div>
      </div>
    </div>
  );
};

export default Eleve;