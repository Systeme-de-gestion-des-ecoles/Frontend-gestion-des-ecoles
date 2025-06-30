import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1444] text-white py-12 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Colonne 1 - Logo personnalisé */}
        <div>
          <div className="flex items-center bg-gray-200 rounded-md px-2 gap-2 mb-4 w-fit">
            <img 
              src="/images/logoImg.png" 
              alt="KidsRoute Logo" 
              className="h-10 w-auto object-contain" 
            />
            <span className="font-bold text-lg hidden md:inline">
              <span className="text-[#0b1444]">SCO</span>
              <span className="text-yellow-500">LINK</span>
            </span>
          </div>
          <p className="text-gray-300">
            Plateforme de gestion scolaire complète : discipline, cantine, transport, parents...
          </p>
        </div>

        {/* Colonne 2 - Navigation */}
        <div>
          <h3 className="font-semibold text-yellow-300 mb-3">Navigation</h3>
          <ul className="space-y-2">
            <li><a href="#presentation" className="hover:text-yellow-400">Qui sommes-nous ?</a></li>
            <li><a href="#ecoles" className="hover:text-yellow-400">Nos écoles partenaires</a></li>
            <li><a href="#avantages" className="hover:text-yellow-400">Pourquoi nous choisir ?</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Nous contacter</a></li>
            <li><a href="/login" className="hover:text-yellow-400">Connexion</a></li>
          </ul>
        </div>

        {/* Colonne 3 - Contact */}
        <div>
          <h3 className="font-semibold text-yellow-300 mb-3">Contact</h3>
          <p>Email : contact@scolink.com</p>
          <p>Tél : +237 6 86 36 23 76</p>
          <p>Adresse : Yaoundé, Cameroun</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 border-t border-gray-700 pt-4 mt-10">
        © {new Date().getFullYear()} SCOLINK. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
