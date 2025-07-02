import React from "react";
import { useNavigate } from "react-router-dom";

const ChauffeurAccueil: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-10 text-[#1E40AF]">
      <div className="max-w-[1000px] mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Bonjour M. Paul (Chauffeur Bus 3)
        </h1>

        <div
          className="rounded-3xl shadow-md p-15 grid grid-cols-2 gap-4 mb-4 bg-bleuFonce"
        >
          <button
            className="bg-white text-[#1E40AF] font-bold py-6 px-6 rounded-3xl hover:bg-gray-200 shadow-sm cursor-pointer text-base"
            onClick={() => navigate("/depart-matin")}
          >
            🟢 Départ Matin
          </button>

          <button
            className="bg-white text-[#1E40AF] font-bold py-6 px-6 rounded-3xl hover:bg-gray-200 shadow-sm cursor-pointer text-base"
            onClick={() => navigate("/depart-soir")}
          >
            🟠 Départ Soir
          </button>

          <button
            className="bg-white text-[#1E40AF] font-bold py-6 px-6 rounded-3xl hover:bg-gray-200 shadow-sm cursor-pointer text-base"
            onClick={() => navigate("/arrivee-ecole")}
          >
            🎓 Arrivée École
          </button>

          <button
            className="bg-white text-[#1E40AF] font-bold py-6 px-6 rounded-3xl hover:bg-gray-200 shadow-sm cursor-pointer text-base"
            onClick={() => navigate("/arrivee-maison")}
          >
            🏠 Arrivée Maison
          </button>

          <button
            className="bg-white text-[#1E40AF] font-bold py-6 px-6 rounded-3xl hover:bg-gray-200 shadow-sm cursor-pointer text-base col-span-2"
            onClick={() => navigate("/appel-eleves")}
          >
            👥 Faire l'appel
          </button>

          <button
            className="bg-white text-[#1E40AF] font-bold py-6 px-6 rounded-3xl hover:bg-gray-200 shadow-sm cursor-pointer text-base col-span-2"
            onClick={() => navigate("/signaler-panne")}
          >
            ⚠️ Signaler une panne
          </button>
        </div>

        <hr className="border-[#1E40AF] my-4" />

        <p className="text-center text-xs">Plateforme Scolink</p>
      </div>
    </div>
  );
};

export default ChauffeurAccueil;
