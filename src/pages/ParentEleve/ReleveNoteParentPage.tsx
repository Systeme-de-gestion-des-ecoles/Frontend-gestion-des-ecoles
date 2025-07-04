import LayoutParent from "../../components/layout/LayoutParent/LayoutParent";
import ReleveNoteParent from "./ReleveNoteParent";

export default function ReleveNoteParentPage() {
  const handleLogout = () => {
    console.log("Déconnexion");
  };

  const userName = "Raina Ange";
  const personaliseNamPage = "Parent d'élèves";

  return (
    <LayoutParent userName={userName} personaliseNamPage={personaliseNamPage} onLogout={handleLogout}>
      <ReleveNoteParent />
    </LayoutParent>
  );
}
