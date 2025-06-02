import LayoutChef from "../../components/layout/layoutChefClasse/LayoutChef";
import ListEleves from "./ListEleves";

export default function ChefClassePage() {
  const handleLogout = () => {
    console.log("Déconnexion"); // à remplacer par un vrai logout
  };

  const userName = "Jean-Paul Chef";
  const personaliseNamPage = "Chef de classe";

  return (
    <LayoutChef userName={userName} personaliseNamPage={personaliseNamPage} onLogout={handleLogout}>
      <ListEleves />
    </LayoutChef>
  );
}
