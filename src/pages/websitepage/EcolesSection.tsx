import React, { useState } from "react";
import ContactModal from "./ContactModale";

// ✅ Card
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return <div className={`bg-white border rounded-lg ${className || ""}`}>{children}</div>;
};

// ✅ CardContent
const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

// ✅ Button
const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "secondary" }
> = ({ variant = "default", className, children, ...props }) => {
  const base = "px-4 py-2 rounded font-semibold ";
  const styles =
    variant === "secondary"
      ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
      : "bg-[#0b1444] text-white hover:bg-blue-700";

  return (
    <button className={`${base} ${styles} ${className || ""}`} {...props}>
      {children}
    </button>
  );
};

// ✅ Image
const Image: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({
  src,
  alt,
  width,
  height,
  className,
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-cover ${className || ""}`}
      {...props}
    />
  );
};

// mets le bon chemin si besoin
// ✅ Composant principal
const EcolesSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isVisiteur = true;

  const ecoles = [
    {
      id: 1,
      nom: "École Horizon",
      logo: "public/images/lyceeBilingeuBafou.jpeg",
      description:
        "Une école innovante tournée vers le numérique et les compétences du futur.",
    },
    {
      id: 2,
      nom: "Académie Lumière",
      logo: "public/images/lyceeClassiqDschang.jpeg",
      description:
        "Nous offrons un cadre propice à l'apprentissage et à l'épanouissement des élèves.",
    },
    {
      id: 3,
      nom: "Académie Lumière",
      logo: "public/images/lyceeTechique.jpeg",
      description:
        "Nous offrons un cadre propice à l'apprentissage et à l'épanouissement des élèves.",
    },
    {
      id: 4,
      nom: "Institut Nova",
      logo: "public/images/lyceeClassiqueBafou.jpeg",
      description:
        "L'Institut Nova forme des citoyens responsables à travers une pédagogie moderne.",
    },
  ];

  return (
    <section className="px-6 py-20 bg-gray-50 relative">
      <h2 className="text-3xl font-bold text-center text-[#0b1444] mb-12">
        Nos Écoles Partenaires
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {ecoles.map((ecole) => (
          <Card
            key={ecole.id}
            className="rounded-2xl shadow-md p-4 flex flex-col items-center text-center"
          >
            <Image
              src={ecole.logo}
              alt={`Logo de ${ecole.nom}`}
              width={300}
              height={200}
              className="mb-4 object-contain"
            />
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">{ecole.nom}</h3>
              <p className="text-gray-600 mb-4">{ecole.description}</p>
              <Button variant="default" onClick={() => setIsModalOpen(true)}>
                {isVisiteur ? "Contacter l'école" : "Se connecter"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ✅ Appel du composant ContactModal (déjà défini ailleurs) */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default EcolesSection;
