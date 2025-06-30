// src/components/WhyChooseUs.tsx
import { School, PhoneCall, Utensils, Users, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: <PhoneCall className="h-8 w-8 text-yellow-400" />,
    title: "Gestion des appels",
    description: "Suivez les présences et absences des élèves en temps réel.",
  },
  {
    icon: <Users className="h-8 w-8 text-yellow-400" />,
    title: "Communication parent-école",
    description: "Notifications, messages et infos envoyés directement aux parents.",
  },
  {
    icon: <Utensils className="h-8 w-8 text-yellow-400" />,
    title: "Suivi cantine & transport",
    description: "Organisation efficace des repas et du transport scolaire.",
  },
  {
    icon: <School className="h-8 w-8 text-yellow-400" />,
    title: "Plusieurs écoles, une seule plateforme",
    description: "Chaque école a son espace, tout en restant connectée à l’écosystème.",
  },
  {
    icon: <LayoutDashboard className="h-8 w-8 text-yellow-400" />,
    title: "Interface simple",
    description: "Pensée pour tous les utilisateurs : parents, enseignants, direction, chauffeur ,eleves et bien d'autres.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="avantages" className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#0b1444] mb-12">
          Pourquoi choisir notre plateforme ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-[#0b1444]">{feature.title}</h3>
              <p className="text-sm text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
