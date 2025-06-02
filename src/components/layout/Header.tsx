import { Bell, Menu, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import type { Dispatch, SetStateAction } from 'react';

type HeaderProps = {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  isCollapsed?: boolean;
  setIsCollapsed?: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ 
  setSidebarOpen, 
  isCollapsed,
  setIsCollapsed
}: HeaderProps) => {
  return (
    <div className="flex justify-between mx-6 items-center mt-6 mb-6">
      <div className="flex items-center space-x-4">
        {/* Bouton menu mobile (toujours visible sur mobile) */}
        <button 
          className="md:hidden text-gray-500 hover:text-orange transition-colors"
          onClick={() => setSidebarOpen(prev => !prev)}
          aria-label="Ouvrir le menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Bouton réduction sidebar (visible seulement sur desktop) */}
        {setIsCollapsed && (
          <button 
            className="hidden md:flex items-center justify-center text-gray-500 hover:text-orange transition-colors"
            onClick={() => setIsCollapsed(prev => !prev)}
            aria-label={isCollapsed ? 'Agrandir le menu' : 'Réduire le menu'}
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <ChevronLeft className="w-5 h-5" />
            )}
          </button>
        )}

        {/* Champ de recherche */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-bleuFonce focus:border-bleuFonce 500 sm:text-sm"
            placeholder="Rechercher..."
          />
        </div>
      </div>

      {/* Partie droite avec actions utilisateur */}
      <div className="flex items-center gap-4">
        <button className="bg-white border rounded-lg px-4 py-1.5 text-sm font-medium hover:bg-gray-50 transition-colors">
          Export
        </button>
        <button className="relative text-gray-500 hover:text-orange transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full text-xs text-white flex items-center justify-center">
            3
          </span>
        </button>
        <div className="flex items-center space-x-2">
          <img 
            src="images/me.jpg" 
            alt="avatar" 
            className="rounded-full w-8 h-8 border-2 border-orange-200" 
          />
          <span className="hidden md:inline text-sm font-medium">Esperance</span>
        </div>
      </div>
    </div>
  );
};

export default Header;