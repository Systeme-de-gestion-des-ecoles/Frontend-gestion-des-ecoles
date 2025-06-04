import LayoutSurveillant from "../../components/layout/LayoutSurveillant/LayoutSurveillant";
import PageSurveillant from "./SurveillantPage";

export default function PageLayout() {
  const handleLogout = () => {
    console.log("Déconnexion");
  };

  const userName = "DALVIRA Temfack";
  const personaliseNamPage= "La page du surveillant";

  return (
    <LayoutSurveillant userName={userName} personaliseNamPage={personaliseNamPage} onLogout={handleLogout}>
      <PageSurveillant />
    </LayoutSurveillant>
  );
}
