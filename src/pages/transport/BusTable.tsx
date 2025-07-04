import React from "react";

const BusTable: React.FC = () => {
  const busList = [
    { id: 1, plate: "LT1234AB", driver: "Jean Mbiya", route: "Bastos - Nlongkak" },
    { id: 2, plate: "LT5678CD", driver: "Sarah Nguimgo", route: "Bonamoussadi - Akwa" },
  ];

  return (
    <div className="bg-white p-4 rounded shadow overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4">Liste des bus</h2>
      <table className="min-w-full text-left border">
        <thead>
          <tr className="bg-bleuFonce text-gray-200">
            <th className="py-2 px-4 border">#</th>
            <th className="py-2 px-4 border">Plaque</th>
            <th className="py-2 px-4 border">Chauffeur</th>
            <th className="py-2 px-4 border">Trajet</th>
          </tr>
        </thead>
        <tbody>
          {busList.map((bus, index) => (
            <tr key={bus.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border">{index + 1}</td>
              <td className="py-2 px-4 border">{bus.plate}</td>
              <td className="py-2 px-4 border">{bus.driver}</td>
              <td className="py-2 px-4 border">{bus.route}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusTable;
