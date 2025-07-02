import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignalerPanne: React.FC = () => {
  const navigate = useNavigate();
  const [busNumero, setBusNumero] = useState("");
  const [description, setDescription] = useState("");
  const [urgence, setUrgence] = useState("non");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici tu peux envoyer les données à une API ou les logguer
    alert("Panne signalée avec succès !");
    navigate("/"); // Redirection après soumission
  };

  return (
    <div className="min-h-screen bg-blue-100 p-10 text-black">
      <div className="max-w-[500px] mx-auto bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Signaler une panne</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Numéro du bus</label>
            <input
              type="text"
              value={busNumero}
              onChange={(e) => setBusNumero(e.target.value)}
              required
              placeholder="Ex : Bus 3"
              className="w-full px-4 py-3 rounded-xl border border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Description de la panne</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="Décrire brièvement la panne..."
              className="w-full px-4 py-3 rounded-xl border border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Niveau d'urgence</label>
            <select
              value={urgence}
              onChange={(e) => setUrgence(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="non">Non urgente</option>
              <option value="moyenne">Moyennement urgente</option>
              <option value="urgente">Urgente</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1E40AF] hover:bg-blue-700 text-white font-bold py-3 rounded-3xl shadow-md transition"
          >
            Envoyer le signalement
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignalerPanne;
