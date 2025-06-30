
import Footer from "../../components/websitecomponent/Footer";
import Header from "../../components/websitecomponent/Header";


const DemoNavigator = () => {
  const demoLinks = [
    { label: "Dashboard (Accueil)", url: "http://localhost:4000/" },
    { label: "Liste des élèves", url: "http://localhost:4000/liste-des-eleves" },
    { label: "Classe - Liste élèves", url: "http://localhost:4000/liste-eleves" },
    { label: "Formulaire comportement", url: "http://localhost:4000/formulaire-comportement" },
    { label: "Assignation des matières", url: "http://localhost:4000/assignation" },
    { label: "Ajouter une matière", url: "http://localhost:4000/ajouter_matiere" },
    { label: "Liste des utilisateurs", url: "http://localhost:4000/liste-utilisateur" },
    { label: "Espace Chef de classe", url: "http://localhost:4000/chef-classe" },
    { label: "Espace Parent", url: "http://localhost:4000/page-parent" },
    { label: "Espace Surveillant", url: "http://localhost:4000/page-surveillant" },
    { label: "Espace Professeur", url: "http://localhost:4000/page-professeur" },
    { label: "Espace Chauffeur", url: "http://localhost:4000/chauffeur" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <main className="flex-1 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-[#0b1444] mb-10">
            Accès libre aux interfaces démo
          </h1>
          <div className="grid gap-4 sm:grid-cols-2">
            {demoLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-white shadow rounded-lg p-4 hover:bg-blue-50 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DemoNavigator;
