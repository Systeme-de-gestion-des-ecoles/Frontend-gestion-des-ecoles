import React from "react";

const historiqueData = [
  { date: "2025-06-25", type: "Appel manqué", detail: "Parent de Aminata" },
  { date: "2025-06-26", type: "Panne", detail: "Bus LT5678CD" },
  { date: "2025-06-27", type: "Retard", detail: "Michel Tchoumi arrivé à 8h30" },
];

const Historique: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">📝 Historique</h1>

      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full table-auto text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 border">Date</th>
              <th className="py-3 px-4 border">Type</th>
              <th className="py-3 px-4 border">Détails</th>
            </tr>
          </thead>
          <tbody>
            {historiqueData.map((entry, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="py-2 px-4 border">{entry.date}</td>
                <td className="py-2 px-4 border">{entry.type}</td>
                <td className="py-2 px-4 border">{entry.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Historique;
