import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Eleve {
  id: number;
  nom: string;
  present: boolean;
  pointArret: string;  // Ajouté ici
}

const initialEleves: Eleve[] = [
  { id: 1, nom: "Jean Dupont", present: true, pointArret: "Arrêt Centre Ville" },
  { id: 2, nom: "Marie Curie", present: true, pointArret: "Arrêt Gare" },
  { id: 3, nom: "Paul Martin", present: true, pointArret: "Arrêt Parc" },
  { id: 4, nom: "Sophie Durand", present: true, pointArret: "Arrêt Mairie" },
  { id: 5, nom: "Alice Bernard", present: true, pointArret: "Arrêt Lycée" },
  { id: 6, nom: "Luc Moreau", present: true, pointArret: "Arrêt Stade" },
];

const AppelEleves: React.FC = () => {
  const [eleves, setEleves] = useState<Eleve[]>(initialEleves);
  const navigate = useNavigate();

  const togglePresence = (id: number) => {
    setEleves((prev) =>
      prev.map((e) =>
        e.id === id ? { ...e, present: !e.present } : e
      )
    );
  };

  const totalPresents = eleves.filter(e => e.present).length;
  const totalAbsents = eleves.length - totalPresents;

  const handleSubmit = () => {
    alert(`Appel enregistré !\nPrésents: ${totalPresents}\nAbsents: ${totalAbsents}`);
    navigate("/");
  };

  return (
    <div className="min-h-screen p-10 text-black">
      <div className="max-w-[1200px] mx-auto bg-white rounded-md shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Faire l'appel des élèves</h1>

        <ul className="divide-y divide-blue-600 mb-8 max-h-[400px] overflow-auto">
          {eleves.map((eleve) => (
            <li key={eleve.id} className="flex items-center justify-between py-3">
              <label className="flex items-center justify-between cursor-pointer w-full">
                <span className="flex flex-col">
                  <span className="text-lg font-medium select-none">{eleve.nom}</span>
                  <span className="text-sm text-gray-500">{eleve.pointArret}</span>
                </span>
                <input
                  type="checkbox"
                  checked={eleve.present}
                  onChange={() => togglePresence(eleve.id)}
                  className="w-5 h-5 text-blue-500 bg-blue-200 rounded focus:ring-blue-400"
                />
              </label>
            </li>
          ))}
        </ul>

        <div className="flex justify-between text-lg font-semibold mb-6 px-4">
          <span>Présents : <span className="text-green-400">{totalPresents}</span></span>
          <span>Absents : <span className="text-red-400">{totalAbsents}</span></span>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-bleuFonce hover:bg-blue-700 text-white font-bold py-4 rounded-3xl shadow-md transition"
        >
          Enregistrer l'appel
        </button>
      </div>
    </div>
  );
};

export default AppelEleves;
