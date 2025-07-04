import React from "react";

const TrajetTable: React.FC = () => {
  const trajets = [
    { id: 1, depart: "Bonamoussadi", arrivee: "Akwa", heure: "07:30" },
    { id: 2, depart: "Bastos", arrivee: "Nlongkak", heure: "06:45" },
  ];

  return (
    <div className="bg-white p-4 rounded shadow overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Liste des trajets</h2>
      <table className="min-w-full text-left border">
        <thead>
          <tr className="bg-bleuFonce text-gray-200">
            <th className="py-2 px-4 border">#</th>
            <th className="py-2 px-4 border">Départ</th>
            <th className="py-2 px-4 border">Arrivée</th>
            <th className="py-2 px-4 border">Heure</th>
          </tr>
        </thead>
        <tbody>
          {trajets.map((t, index) => (
            <tr key={t.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border">{index + 1}</td>
              <td className="py-2 px-4 border">{t.depart}</td>
              <td className="py-2 px-4 border">{t.arrivee}</td>
              <td className="py-2 px-4 border">{t.heure}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrajetTable;
