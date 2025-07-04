import React, { useState } from "react";
import TrajetForm from "./TrajetForm";
import TrajetTable from "./TrajetTable";



const GestionTrajets: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">🗺️ Gestion des Trajets</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-bleuFonce text-white px-4 py-2 rounded hover:bg-blue-950"
        >
          {showForm ? "Fermer le formulaire" : "➕ Ajouter un trajet"}
        </button>
      </div>

      {showForm && <TrajetForm />}

      <div className="mt-6">
        <TrajetTable />
      </div>
    </div>
  );
};

export default GestionTrajets;
