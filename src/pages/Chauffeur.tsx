import React, { useState } from 'react';
import GetAppIcon from '@mui/icons-material/GetApp';

const Chauffeur: React.FC = () => {
  const [cni, setCni] = useState('');
  const [cv, setCv] = useState<File | null>(null);
  const [photo, setPhoto] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ cni, cv, photo });
  };

  const inputClass = "peer block w-full appearance-none rounded bg-gray-200 px-3 py-2 text-sm text-gray-700 file:hidden";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <form
        onSubmit={handleSubmit}
        className="bg-[#032B5F] p-6 py-18 mx-3 rounded-lg w-[400px]"
      >
        <h2 className="text-white text-center text-2xl font-bold mb-6">
          CHAUFFEUR
        </h2>

        <div className="w-full mb-4 relative">
          <input
            type="text"
            placeholder="Numéro de CNI"
            value={cni}
            onChange={(e) => setCni(e.target.value)}
            className="w-full px-3 py-2 rounded bg-gray-200 text-sm"
          />
        </div>

        <div className="relative w-full mb-4">
          <input
            type="file"
            accept="application/pdf"
            placeholder="Cv"
            onChange={(e) => setCv(e.target.files?.[0] || null)}
            className={inputClass}
          />
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <GetAppIcon />
          </div>
        </div>

        <div className="relative w-full mb-6">
          <input
            type="file"
            accept="image/*"
            placeholder="Photo"
            onChange={(e) => setPhoto(e.target.files?.[0] || null)}
            className={inputClass}
          />
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <GetAppIcon />
          </div>
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

export default Chauffeur;
