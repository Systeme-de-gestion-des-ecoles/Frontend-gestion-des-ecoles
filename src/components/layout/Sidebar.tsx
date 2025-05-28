import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import ClassIcon from '@mui/icons-material/Class';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EditNoteIcon from '@mui/icons-material/EditNote';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
};

const Sidebar = ({ sidebarOpen, setSidebarOpen, isCollapsed, setIsCollapsed }: SidebarProps) => {
  const [openCourses, setOpenCourses] = useState(false);
  const [openTeachers, setOpenTeachers] = useState(false);
  const [OpenClasses, setOpenClasses] = useState(false);
  const [OpenDiscipline, setOpenDiscipline] = useState(false);

  // Fonction pour fermer les sous-menus quand on réduit la sidebar
  const handleCollapse = () => {
    if (!isCollapsed) {
      setOpenCourses(false);
      setOpenTeachers(false);
      setOpenClasses(false);
    }
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:relative z-30 ${
          isCollapsed ? 'w-20' : 'w-70'
        } bg-bleuFonce border-r transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-all duration-200 ease-in-out h-screen flex flex-col`}
      >
        {/* Header du sidebar avec bouton de collapse */}
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          {!isCollapsed && (
            <div className="font-bold text-xl text-orange">KidsRoute</div>
          )}
          <button
            onClick={handleCollapse}
            className="text-white hover:text-orange focus:outline-none"
            aria-label={isCollapsed ? 'Agrandir le menu' : 'Réduire le menu'}
          >
            {isCollapsed ? <MenuIcon /> : <CloseIcon />}
          </button>
        </div>

        {/* Contenu du sidebar */}
        <nav className="flex-1 flex flex-col gap-2 px-2 py-4 text-grisClaire overflow-y-auto">
          {/* Dashboard */}
          <NavLink
            to="/overview"
            className={({ isActive }) =>
              `py-3 px-3 rounded no-underline text-grisClaire font-bold hover:bg-sky-800 flex items-center ${
                isActive ? 'bg-gray-100 text-blue-600 font-semibold' : ''
              }`
            }
            title="Dashboard"
          >
            <DashboardIcon />
            {!isCollapsed && <span className="ml-2">Dashboard</span>}
          </NavLink>

          {/* Dropdown: Gestion des cours */}
          <div>
            <button
              onClick={() => setOpenCourses(!openCourses)}
              className={`w-full py-3 px-3 rounded text-grisClaire hover:bg-sky-800 font-bold flex items-center justify-between ${
                openCourses && !isCollapsed ? 'bg-sky-900' : ''
              }`}
              title="Gestion Notes"
            >
              <div className="flex items-center">
                <EditNoteIcon />
                {!isCollapsed && <span className="ml-2">Gestion Notes</span>}
              </div>
              {!isCollapsed && (
                <span>
                  {openCourses ? <ExpandMoreIcon /> : <KeyboardArrowRightIcon />}
                </span>
              )}
            </button>
            {openCourses && !isCollapsed && (
              <div className="pl-4 flex flex-col gap-1 mt-1">
                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    `py-2 px-3 rounded no-underline text-grisClaire text-sm font-bold hover:bg-sky-800 ${
                      isActive ? 'bg-gray-100 text-blue-600 font-semibold' : ''
                    }`
                  }
                >
                  Voir les notes
                </NavLink>
                <NavLink
                  to="/courses/new"
                  className={({ isActive }) =>
                    `py-2 px-3 rounded no-underline text-grisClaire text-sm font-bold hover:bg-sky-800 ${
                      isActive ? 'bg-gray-100 text-blue-600 font-semibold' : ''
                    }`
                  }
                >
                  Remplire les notes
                </NavLink>
              </div>
            )}
          </div>

          {/* Dropdown: Gestion des enseignants */}
          <div>
            <button
              onClick={() => setOpenTeachers(!openTeachers)}
              className={`w-full py-3 px-3 rounded text-grisClaire hover:bg-sky-800 font-bold flex items-center justify-between ${
                openTeachers && !isCollapsed ? 'bg-sky-900' : ''
              }`}
              title="Gestion utilisateur"
            >
              <div className="flex items-center">
                <AccountBoxIcon />
                {!isCollapsed && <span className="ml-2">Gestion utilisateur</span>}
              </div>
              {!isCollapsed && (
                <span>
                  {openTeachers ? <ExpandMoreIcon /> : <KeyboardArrowRightIcon />}
                </span>
              )}
            </button>
            {openTeachers && !isCollapsed && (
              <div className="pl-4 flex flex-col gap-1 mt-1">
                <NavLink
                  to="/teachers"
                  className={({ isActive }) =>
                    `py-2 px-3 rounded no-underline text-grisClaire text-sm font-bold hover:bg-sky-800 ${
                      isActive ? 'bg-gray-100 text-blue-600 font-semibold' : ''
                    }`
                  }
                >
                  Creer un utilisateur
                </NavLink>
                <NavLink
                  to="/teachers/new"
                  className={({ isActive }) =>
                    `py-2 px-3 rounded no-underline text-grisClaire text-sm font-bold hover:bg-sky-800 ${
                      isActive ? 'bg-gray-100 text-blue-600 font-semibold' : ''
                    }`
                  }
                >
                  Voir les utilisateurs
                </NavLink>
              </div>
            )}
          </div>

          {/* Dropdown: Gestion des classes */}
          <div>
            <button
              onClick={() => setOpenClasses(!OpenClasses)}
              className={`w-full py-3 px-3 rounded text-grisClaire hover:bg-sky-800 font-bold flex items-center justify-between ${
                OpenClasses && !isCollapsed ? 'bg-sky-900' : ''
              }`}
              title="Gestion Classes"
            >
              <div className="flex items-center">
                <ClassIcon />
                {!isCollapsed && <span className="ml-2">Gestion Classes</span>}
              </div>
              {!isCollapsed && (
                <span>
                  {OpenClasses ? <ExpandMoreIcon /> : <KeyboardArrowRightIcon />}
                </span>
              )}
            </button>
            {OpenClasses && !isCollapsed && (
              <div className="pl-4 flex flex-col gap-1 mt-1">
                <NavLink
                  to="/liste-eleves"
                  className={({ isActive }) =>
                    `py-2 px-3 rounded no-underline text-grisClaire text-sm font-bold hover:bg-sky-800 ${
                      isActive ? 'bg-sky-800 text-grisClaire font-semibold' : ''
                    }`
                  }
                >
                  Voir liste classes
                </NavLink>
                <NavLink
                  to="/ajouter-classe"
                  className={({ isActive }) =>
                    `py-2 px-3 rounded no-underline text-grisClaire text-sm font-bold hover:bg-sky-800 ${
                      isActive ? 'bg-sky-800 text-grisClaire font-semibold' : ''
                    }`
                  }
                >
                  Ajouter une classe
                </NavLink>
              </div>
            )}
          </div>

          {/* Dropdown: Gestion Discipline */}
          <div>
            <button
              onClick={() => setOpenDiscipline(!OpenDiscipline)}
              className={`w-full py-3 px-3 rounded text-grisClaire hover:bg-sky-800 font-bold flex items-center justify-between ${
                OpenDiscipline && !isCollapsed ? 'bg-sky-900' : ''
              }`}
              title="Gestion Discipline"
            >
              <div className="flex items-center">
                <AccountBoxIcon />
                {!isCollapsed && <span className="ml-2">Gestion Discipline</span>}
              </div>
              {!isCollapsed && (
                <span>
                  {openTeachers ? <ExpandMoreIcon /> : <KeyboardArrowRightIcon />}
                </span>
              )}
            </button>
            {OpenDiscipline && !isCollapsed && (
              <div className="pl-4 flex flex-col gap-1 mt-1">
                <NavLink
                  to="/formulaire-comportement"
                  className={({ isActive }) =>
                    `py-2 px-3 rounded no-underline text-grisClaire text-sm font-bold hover:bg-sky-800 ${
                      isActive ? 'bg-sky-800 text-grisClaire font-semibold' : ''
                    }`
                  }
                >
                Saisir un comportement
                </NavLink>
              </div>
            )}
          </div>

          {/* Settings */}
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `py-3 px-3 rounded no-underline text-grisClaire font-bold hover:bg-sky-800 flex items-center ${
                isActive ? 'bg-sky-800 text-grisClaire font-semibold' : ''
              }`
            }
            title="Paramètres"
          >
            <SettingsIcon />
            {!isCollapsed && <span className="ml-2">Paramètres</span>}
          </NavLink>
                    {/* Deconnexion */}
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `py-3 px-3 rounded no-underline  text-grisClaire font-bold hover:bg-sky-900  bg-sky-800 flex items-center ${
                isActive ? 'bg-gray-100 text-blue-600 font-semibold' : ''
              }`
            }
            title="Transactions"
          >
            <LogoutIcon />
            {!isCollapsed && <span className="ml-2">Deconnexion</span> }
          </NavLink>

        </nav>
      </aside>
    </>
  );
};

export default Sidebar;