import { useNavigate } from "react-router-dom";
import LayoutChauffeur from "../../components/layout/layoutChauffeur/LayoutChauffeur";

export default function PageLayoutChauffeur() {
  const handleLogout = () => {
    console.log("Déconnexion chauffeur");
  };

  const userName = "Paul (Bus 3)";
  const personaliseNamPage = "Espace Chauffeur";

  const navigate = useNavigate();

  return (
    <LayoutChauffeur
      userName={userName}
      personaliseNamPage={personaliseNamPage}
      onLogout={handleLogout}
    >
      <div className="min-h-screen px-4 sm:px-6 md:px-10 py-6 text-[#1E40AF]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">
            Bonjour M. Paul (Chauffeur Bus 3)
          </h1>

          <div className="rounded-3xl shadow-md p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 bg-bleuFonce">
            <button
              className="bg-white text-[#1E40AF] font-bold py-4 px-4 sm:py-6 sm:px-6 rounded-3xl hover:bg-gray-200 shadow-sm cursor-pointer text-base"
              onClick={() => navigate("/depart-matin")}
            >
              🟢 Départ Matin
            </button>

            <button
              className="bg-white text-[#1E40AF] font-bold py-4 px-4 sm:py-6 sm:px-6 rounded-3xl hover:bg-gray-200 shadow-sm cursor-pointer text-base"
              onClick={() => navigate("/depart-soir")}
            >
              🟠 Départ Soir
            </button>

            <button
              className="bg-white text-[#1E40AF] font-bold py-4 px-4 sm:py-6 sm:px-6 rounded-3xl hover:bg-gray-200 shadow-sm cursor-pointer text-base"
              onClick={() => navigate("/arrivee-ecole")}
            >
              🎓 Arrivée École
            </button>

            <button
              className="bg-white text-[#1E40AF] font-bold py-4 px-4 sm:py-6 sm:px-6 rounded-3xl hover:bg-gray-200 shadow-sm cursor-pointer text-base"
              onClick={() => navigate("/arrivee-maison")}
            >
              🏠 Arrivée Maison
            </button>

            <button
              className="bg-white text-[#1E40AF] font-bold py-4 px-4 sm:py-6 sm:px-6 rounded-3xl hover:bg-gray-200 shadow-sm cursor-pointer text-base col-span-1 sm:col-span-2"
              onClick={() => navigate("/appel-eleves")}
            >
              👥 Faire l'appel
            </button>

            <button
              className="bg-white text-[#1E40AF] font-bold py-4 px-4 sm:py-6 sm:px-6 rounded-3xl hover:bg-gray-200 shadow-sm cursor-pointer text-base col-span-1 sm:col-span-2"
              onClick={() => navigate("/signaler-panne")}
            >
              ⚠️ Signaler une panne
            </button>
          </div>

          <hr className="border-[#1E40AF] my-4" />

          <p className="text-center text-xs">Plateforme Scolink</p>
        </div>
      </div>
    </LayoutChauffeur>
  );
}
