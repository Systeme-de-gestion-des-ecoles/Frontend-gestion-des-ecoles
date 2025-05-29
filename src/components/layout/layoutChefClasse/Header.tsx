import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  userName: string;
  personaliseNamPage: string;
  onLogout: () => void;
};

export default function HeaderChef({ userName,personaliseNamPage, onLogout }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-bleuFonce text-white px-6 py-3 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo + Image rond */}
        <div className="flex items-center gap-3">
          <img
            src="/images/me.jpg"
            alt="profil"
            className="w-10 h-10 rounded-full object-cover border-2 border-white"
          />
          <h1 className="text-lg font-bold hidden sm:block">{personaliseNamPage}</h1>
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="text-sm">Bienvenue, {userName}</span>
          <button
            onClick={onLogout}
            className="bg-orange px-3 py-1 rounded hover:bg-yellow-600 text-sm"
          >
            Déconnexion
          </button>
        </div>

        {/* Hamburger pour mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="mt-4 md:hidden flex flex-col space-y-2 text-sm">
          <span>Bienvenue, {userName}</span>
          <button
            onClick={onLogout}
            className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 w-fit"
          >
            Déconnexion
          </button>
        </div>
      )}
    </header>
  );
}
