import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ContactModal from "../../pages/websitepage/ContactModale";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="bg-[#0b1444] text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo personnalisé */}
          <div className="flex items-center bg-gray-200 rounded-md px-2 gap-2">
            <img
              src="/images/logoImg.png"
              alt="KidsRoute Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="font-bold text-xl hidden md:inline">
              <span className="text-[#0b1444]">SCO</span>
              <span className="text-yellow-500">LINK</span>
            </span>
          </div>

          {/* Menu de navigation - Desktop */}
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#presentation" className="hover:text-yellow-400">Qui sommes-nous ?</a>
            <a href="#ecoles" className="hover:text-yellow-400">Nos écoles</a>
            <a href="#avantages" className="hover:text-yellow-400">Pourquoi nous choisir ?</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </nav>

          {/* Actions - Desktop */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="border border-white text-white px-4 py-2 rounded-full hover:bg-gray-200 hover:text-[#0b1444] transition-all duration-200"
            >
              Contactez-nous
            </button>
          </div>

          {/* Menu Hamburger - Mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu déroulant mobile */}
        {isOpen && (
          <div className="md:hidden bg-[#0b1444] px-6 pb-4 space-y-3 text-sm">
            <a href="#presentation" className="block hover:text-yellow-400">Qui sommes-nous ?</a>
            <a href="#ecoles" className="block hover:text-yellow-400">Nos écoles</a>
            <a href="#avantages" className="block hover:text-yellow-400">Pourquoi nous choisir ?</a>
            <a href="#contact" className="block hover:text-yellow-400">Contact</a>

            <button
              onClick={() => {
                setIsModalOpen(true);
                setIsOpen(false);
              }}
              className="block mt-3 bg-white text-[#0b1444] text-center py-2 rounded-full font-semibold hover:brightness-95 w-full"
            >
              Contactez-nous
            </button>
          </div>
        )}
      </header>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
