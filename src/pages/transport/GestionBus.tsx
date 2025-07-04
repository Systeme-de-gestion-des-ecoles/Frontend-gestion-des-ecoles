import React, { useState } from "react";
import BusForm from "./BusForm";
import BusTable from "./BusTable";


const GestionBus: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">🚌 Gestion des Bus</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-bleuFonce text-white px-4 py-2 rounded hover:bg-blue-950"
        >
          {showForm ? "Fermer le formulaire" : "➕ Ajouter un bus"}
        </button>
      </div>

      {showForm && <BusForm />}

      <div className="mt-6">
        <BusTable />
      </div>
    </div>
  );
};

export default GestionBus;
