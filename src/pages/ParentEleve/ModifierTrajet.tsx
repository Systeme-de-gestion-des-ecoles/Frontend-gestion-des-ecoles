import React, { useState } from "react";
import { useParams } from "react-router-dom";

const trajetsDisponibles = [
  { id: 1, label: "Bonamoussadi → Akwa" },
  { id: 2, label: "Bastos → Nlongkak" },
  { id: 3, label: "Makepe → Bonapriso" },
];

const ModifierTrajet: React.FC = () => {
  const { id } = useParams(); // id de l'enfant
  const [trajetId, setTrajetId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trajetChoisi = trajetsDisponibles.find(t => t.id.toString() === trajetId);
    console.log(`Enfant #${id} → nouveau trajet :`, trajetChoisi);

    alert(`Trajet de l’enfant modifié avec succès : ${trajetChoisi?.label}`);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-6 rounded shadow space-y-4"
      >
        <h2 className="text-xl font-bold text-center text-blue-700 mb-4">
          Modifier le trajet de l’enfant #{id}
        </h2>

        <div>
          <label className="block mb-1 font-medium">Nouveau trajet</label>
          <select
            value={trajetId}
            onChange={(e) => setTrajetId(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          >
            <option value="">-- Choisir un trajet --</option>
            {trajetsDisponibles.map((trajet) => (
              <option key={trajet.id} value={trajet.id}>
                {trajet.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
        >
          Enregistrer
        </button>
      </form>
    </div>
  );
};

export default ModifierTrajet;
