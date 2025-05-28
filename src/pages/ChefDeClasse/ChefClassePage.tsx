import LayoutChef from "../../components/layout/layoutChefClasse/LayoutChef";
import ListEleves from "./ListEleves";

export default function ChefClassePage() {
  const handleLogout = () => {
    console.log("Déconnexion"); // à remplacer par un vrai logout
  };

  const userName = "Jean-Paul Chef";

  return (
    <LayoutChef userName={userName} onLogout={handleLogout}>
      <ListEleves />
    </LayoutChef>
  );
}
