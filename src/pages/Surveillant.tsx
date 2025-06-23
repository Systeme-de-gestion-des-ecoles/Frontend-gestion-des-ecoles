import React, { useState } from 'react';
import GetAppIcon from '@mui/icons-material/GetApp';

const Surveillant: React.FC = () => {
  const [formData, setFormData] = useState({
    cni: '',
    zoneService: '',
  });

  const [photo, setPhoto] = useState<File | null>(null);
  const [cv, setCv] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, photo, cv });
  };

  const inputClass = "w-full px-3 py-2 rounded bg-gray-200 text-sm";
  const groupClass = "mb-5"; // espacement uniforme entre tous les champs

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <form onSubmit={handleSubmit} className="bg-[#032B5F] mx-3 p-8 rounded-lg w-[400px]">
        <h2 className="text-white text-center text-2xl font-bold mb-6">SURVEILLANT GÉNÉRAL</h2>

        {/* Numéro de CNI */}
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

        {/* Photo */}
        <div className={`${groupClass} relative`}>
          <label className="block relative cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files?.[0] || null)}
              className="hidden"
            />
            <div className="peer block w-full appearance-none rounded bg-gray-200 px-3 py-2 text-sm text-gray-500">
              {photo ? photo.name : 'Photo'}
            </div>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <GetAppIcon />
            </div>
          </label>
        </div>

        {/* CV */}
        <div className={`${groupClass} relative`}>
          <label className="block relative cursor-pointer">
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setCv(e.target.files?.[0] || null)}
              className="hidden"
            />
            <div className="peer block w-full appearance-none rounded bg-gray-200 px-3 py-2 text-sm text-gray-500">
              {cv ? cv.name : 'CV (PDF)'}
            </div>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <GetAppIcon />
            </div>
          </label>
        </div>

        {/* Zone de service */}
        <div className={groupClass}>
          <select
            name="zoneService"
            value={formData.zoneService}
            onChange={handleChange}
            className={`${inputClass} ${!formData.zoneService ? 'text-gray-500' : 'text-black'}`}
          >
            <option value="" disabled hidden>Zone de service</option>
            <option value="Zone A">Zone A</option>
            <option value="Zone B">Zone B</option>
            <option value="Zone C">Zone C</option>
            <option value="Autre">Autre</option>
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

export default Surveillant;
