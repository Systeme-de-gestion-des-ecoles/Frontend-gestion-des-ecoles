import LayoutChauffeur from "../../components/layout/layoutChauffeur/LayoutChauffeur";
import AppelEleves from "./AppelEleves";

export default function PageAppelEleves() {
  const userName = "Paul (Bus 3)";
  const personaliseNamPage = "Faire l'appel des élèves";

  const handleLogout = () => {
    console.log("Déconnexion chauffeur");
  };

  return (
    <LayoutChauffeur
      userName={userName}
      personaliseNamPage={personaliseNamPage}
      onLogout={handleLogout}
    >
      <AppelEleves />
    </LayoutChauffeur>
  );
}
