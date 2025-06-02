import LayoutProf from "../../components/layout/LayoutProf/LayoutProf";
import PageProf from "./PageProf";

export default function Layout() {
  const handleLogout = () => {
    console.log("Déconnexion"); // à remplacer par un vrai logout
  };

  const userName = "Spinoza Hope";
  const personaliseNamPage= "Page Professeur";

  return (
    <LayoutProf userName={userName} personaliseNamPage={personaliseNamPage} onLogout={handleLogout}>
      <PageProf />
    </LayoutProf>
  );
}
