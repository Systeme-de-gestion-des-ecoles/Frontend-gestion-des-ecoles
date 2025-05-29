import LayoutParent from "../../components/layout/LayoutParent/LayoutParent";
import EspaceParent from "./EspaceParent";

export default function PageParent() {
  const handleLogout = () => {
    console.log("Déconnexion"); // à remplacer par un vrai logout
  };

  const userName = "Raina Ange";
  const personaliseNamPage= "Parent d'eleves";

  return (
    <LayoutParent userName={userName} personaliseNamPage={personaliseNamPage} onLogout={handleLogout}>
      <EspaceParent />
    </LayoutParent>
  );
}
