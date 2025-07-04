import React, { useState } from "react";

const TrajetForm: React.FC = () => {
  const [depart, setDepart] = useState("");
  const [arrivee, setArrivee] = useState("");
  const [heure, setHeure] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ depart, arrivee, heure });
    setDepart(""); setArrivee(""); setHeure("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-xl p-6 rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Créer un trajet</h2>

        <div>
          <label className="block mb-1 font-medium">Lieu de départ</label>
          <input
            type="text"
            value={depart}
            onChange={(e) => setDepart(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Ex: Bonamoussadi"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Lieu d’arrivée</label>
          <input
            type="text"
            value={arrivee}
            onChange={(e) => setArrivee(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Ex: Akwa"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Heure de départ</label>
          <input
            type="time"
            value={heure}
            onChange={(e) => setHeure(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-bleuFonce text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Créer
        </button>
      </form>
    </div>
  );
};

export default TrajetForm;
