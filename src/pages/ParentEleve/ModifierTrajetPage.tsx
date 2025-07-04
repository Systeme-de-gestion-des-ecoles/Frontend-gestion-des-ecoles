// ModifierTrajetPage.tsx
import LayoutParent from "../../components/layout/LayoutParent/LayoutParent";
import ModifierTrajet from "./ModifierTrajet";

export default function ModifierTrajetPage() {
  const handleLogout = () => {
    console.log("Déconnexion");
  };

  const userName = "Raina Ange";
  const personaliseNamPage = "Parent d'élèves";

  return (
    <LayoutParent userName={userName} personaliseNamPage={personaliseNamPage} onLogout={handleLogout}>
      <ModifierTrajet />
    </LayoutParent>
  );
}
