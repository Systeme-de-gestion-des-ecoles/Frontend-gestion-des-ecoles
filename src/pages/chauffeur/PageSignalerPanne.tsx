import LayoutChauffeur from "../../components/layout/layoutChauffeur/LayoutChauffeur";
import SignalerPanne from "./SignalerPanne";

export default function PageSignalerPanne() {
  const userName = "Paul (Bus 3)";
  const personaliseNamPage = "Signaler une panne";

  const handleLogout = () => {
    console.log("Déconnexion chauffeur");
  };

  return (
    <LayoutChauffeur
      userName={userName}
      personaliseNamPage={personaliseNamPage}
      onLogout={handleLogout}
    >
      <SignalerPanne />
    </LayoutChauffeur>
  );
}
