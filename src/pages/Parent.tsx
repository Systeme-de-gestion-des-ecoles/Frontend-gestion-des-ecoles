import React, { useState } from 'react';
import GetAppIcon from '@mui/icons-material/GetApp';

const Parent: React.FC = () => {
  const [formData, setFormData] = useState({
    cni: '',
    dateNaissance: '',
    domicile: '',
    nombreEnfant: '',
    nomEnfant: '',
  });

  const [photo, setPhoto] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, photo });
  };

  const inputClass = "w-full px-3 py-2 rounded bg-gray-200 text-sm";
  const groupClass = "form-group mb-4"; // <-- tu modifies ici pour tous les champs

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <form onSubmit={handleSubmit} className="bg-[#032B5F] p-8 mx-3 rounded-lg w-[400px]">
        <h2 className="text-white text-center text-2xl font-bold mb-6">PARENT</h2>

        <div className={groupClass}>
          <select
            name="nombreEnfant"
            value={formData.nombreEnfant}
            onChange={handleChange}
            className={`${inputClass} ${!formData.nombreEnfant ? 'text-gray-500' : 'text-black'}`}
          >
            <option value="" disabled hidden>Nombre d'enfants</option>
            <option value="1">1 enfant</option>
            <option value="2">2 enfants</option>
            <option value="3">3 enfants</option>
            <option value="4">4 enfants</option>
            <option value="5">5 ou plus</option>
          </select>
        </div>

        <div className={groupClass}>
          <select
            name="nomEnfant"
            value={formData.nomEnfant}
            onChange={handleChange}
            className={`${inputClass} ${!formData.nomEnfant ? 'text-gray-500' : 'text-black'}`}
          >
            <option value="" disabled hidden>Nom des enfants</option>
            <option value="Ali">Ali</option>
            <option value="Fatou">Fatou</option>
            <option value="Mohamed">Mohamed</option>
            <option value="Autre">Autre</option>
          </select>
        </div>

        <div className={groupClass}>
          <input
            type="text"
            name="cni"
            placeholder="Numéro de CNI"
            value={formData.cni}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div className={`${groupClass} relative`}>
          <input
            type="date"
            name="dateNaissance"
            value={formData.dateNaissance}
            onChange={handleChange}
            className={`${inputClass} peer text-gray-500`}
          />
          {!formData.dateNaissance && (
            <span className="absolute left-3 top-2 text-gray-500 text-sm pointer-events-none peer-focus:hidden">
              Date de naissance
            </span>
          )}
        </div>

        <div className={groupClass}>
          <input
            type="text"
            name="domicile"
            placeholder="Domicile"
            value={formData.domicile}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div className={`${groupClass} relative`}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files?.[0] || null)}
            className="peer block w-full appearance-none rounded bg-gray-200 px-3 py-2 text-sm text-gray-700 file:hidden"
            placeholder="Photo"
          />
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <GetAppIcon />
          </div>
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

export default Parent;
