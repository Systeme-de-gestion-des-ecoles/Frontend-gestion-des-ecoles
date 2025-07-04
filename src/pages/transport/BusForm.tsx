import React, { useState } from "react";

const BusForm: React.FC = () => {
  const [plate, setPlate] = useState("");
  const [driver, setDriver] = useState("");
  const [route, setRoute] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ plate, driver, route });
    setPlate(""); setDriver(""); setRoute("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-xl p-6 rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Ajouter un bus</h2>

        <div>
          <label className="block mb-1 font-medium">Numéro de plaque</label>
          <input
            type="text"
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Ex: LT1234AB"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Chauffeur</label>
          <select
            value={driver}
            onChange={(e) => setDriver(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">-- Sélectionner --</option>
            <option value="1">Jean Mbiya</option>
            <option value="2">Sarah Nguimgo</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Trajet</label>
          <select
            value={route}
            onChange={(e) => setRoute(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">-- Sélectionner --</option>
            <option value="1">Yaoundé - Bastos</option>
            <option value="2">Douala - Bonamoussadi</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-bleuFonce text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default BusForm;
