import React from "react";

type Bus = {
  id: string;
  position: string;
  status: "En cours" | "Terminé" | "En panne";
};

const busList: Bus[] = [
  { id: "LT1234AB", position: "Akwa", status: "En cours" },
  { id: "LT5678CD", position: "Bonamoussadi", status: "En panne" },
];

const statusColors = {
  "En cours": "bg-green-500",
  "Terminé": "bg-gray-500",
  "En panne": "bg-red-500",
};

const SuiviTempsReel: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">📍 Suivi Temps Réel</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {busList.map((bus) => (
          <div
            key={bus.id}
            className="bg-white p-4 rounded shadow flex flex-col space-y-2"
          >
            <div className="text-lg font-semibold">Bus : {bus.id}</div>
            <div>📍 Position actuelle : <strong>{bus.position}</strong></div>
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${statusColors[bus.status]}`}></span>
              <span className="font-medium">{bus.status}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">🗺️ Carte (à intégrer avec Leaflet ou Google Maps)</h2>
        <div className="h-64 bg-gray-200 rounded flex items-center justify-center text-gray-500 italic">
          Carte interactive ici
        </div>
      </div>
    </div>
  );
};

export default SuiviTempsReel;
