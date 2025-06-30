import React from "react";
import Header from "../../components/websitecomponent/Header";
import Footer from "../../components/websitecomponent/Footer";
import WhyChooseUs from "./WhyChoseUs";
import CallToAction from "./CollToAction";
import EcolesSection from "./EcolesSection";
 // Import de la section des écoles

const VisitorHome: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col text-black">
      <Header />

      <main className="flex-grow">
        <section className="px-6 bg-white">
          <section className="px-6 py-20 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8">
              {/* Texte de présentation */}
              <div className="text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b1444] mb-4 sm:mb-6">
                  Bienvenue sur <span className="block sm:inline">SCOLINK</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed space-y-2">
                  <span className="block">SCOLINK est une plateforme moderne conçue pour digitaliser la gestion scolaire.</span>
                  <span className="block">Nous accompagnons les écoles dans leur organisation quotidienne, de la communication aux appels, en passant par le suivi cantine et transport.</span>
                  <span className="block">Chaque acteur (parent, enseignant, élève, directeur) dispose d’un espace dédié et sécurisé.</span>
                  <span className="block">Plusieurs écoles peuvent coexister dans une même plateforme, pour une gestion centralisée et simplifiée.</span>
                </p>
              </div>

              {/* Illustration */}
              <div className="flex justify-center mt-8 md:mt-0">
                <img
                  src="/images/hero.png"
                  alt="Illustration gestion scolaire"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                />
              </div>
            </div>
          </section>
        </section>

        {/* Section 4 : Pourquoi choisir notre plateforme ? */}
        <WhyChooseUs />

        {/* Nos écoles */}
        <EcolesSection />

        {/* Appel à l’action */}
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default VisitorHome;
