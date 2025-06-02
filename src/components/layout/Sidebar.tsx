import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import ClassIcon from '@mui/icons-material/Class';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
};

const Sidebar = ({ sidebarOpen, setSidebarOpen, isCollapsed, setIsCollapsed }: SidebarProps) => {
  const [openTeachers, setOpenTeachers] = useState(false);
  const [OpenClasses, setOpenClasses] = useState(false);
  const [OpenDiscipline, setOpenDiscipline] = useState(false);
  const [OpenMatiere, setOpenMatiere] = useState(false);


  // Fonction pour fermer les sous-menus quand on réduit la sidebar
  const handleCollapse = () => {
    if (!isCollapsed) {
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
            to="/"
            className={({ isActive }) =>
              `py-3 px-3 rounded no-underline text-grisClaire font-bold hover:bg-sky-800 flex items-center ${
                isActive ? 'text-gray-100 bg-sky-800 font-semibold' : ''
              }`
            }
            title="Dashboard"
          >
            <DashboardIcon />
            {!isCollapsed && <span className="ml-2">Dashboard</span>}
          </NavLink>

            {/* Dropdown: Gestion des matiere */}
          <div>
            <button
              onClick={() => setOpenMatiere(!OpenMatiere)}
              className={`w-full py-3 px-3 rounded text-grisClaire hover:bg-sky-800 font-bold flex items-center justify-between ${
                OpenMatiere && !isCollapsed ? 'bg-sky-900' : ''
              }`}
              title="Gestion Notes"
            >
              <div className="flex items-center">
                <MedicalInformationIcon />
                {!isCollapsed && <span className="ml-2">Gestion Matiere</span>}
              </div>
              {!isCollapsed && (
                <span>
                  {OpenMatiere ? <ExpandMoreIcon /> : <KeyboardArrowRightIcon />}
                </span>
              )}
            </button>
            {OpenMatiere && !isCollapsed && (
              <div className="pl-4 flex flex-col gap-1 mt-1">
                <NavLink
                  to="/ajouter_matiere"
                  className={({ isActive }) =>
                    `py-2 px-3 rounded no-underline text-grisClaire text-sm font-bold hover:bg-sky-800 ${
                      isActive ? 'bg-sky-800 text-grisClaire font-semibold' : ''
                    }`
                  }
                >
                  Ajouter matiere
                </NavLink>
                <NavLink
                  to="assignation"
                  className={({ isActive }) =>
                    `py-2 px-3 rounded no-underline text-grisClaire text-sm font-bold hover:bg-sky-800 ${
                      isActive ? 'bg-sky-800 text-grisClaire font-semibold' : ''
                    }`
                  }
                >
                  Assigner une matiere
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
                  to="/register"
                  className={({ isActive }) =>
                    `py-2 px-3 rounded no-underline text-grisClaire text-sm font-bold hover:bg-sky-800 ${
                      isActive ? 'bg-sky-800 text-grisClaire font-semibold' : ''
                    }`
                  }
                >
                  Creer un utilisateur
                </NavLink>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    `py-2 px-3 rounded no-underline text-grisClaire text-sm font-bold hover:bg-sky-800 ${
                      isActive ? 'bg-sky-800 text-grisClaire font-semibold' : ''
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
                <AssignmentLateIcon />
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
          
              <NavLink
            to="/eleve"
            className={({ isActive }) =>
              `py-3 px-3 rounded no-underline  text-grisClaire font-bold hover:bg-sky-800   flex items-center ${
                isActive ? 'bg-sky-800 text-grisClaire font-semibold' : ''
              }`
            }
            title="Transactions"
          >
            <PersonAddIcon />
            {!isCollapsed && <span className="ml-2">Ajouter eleves</span> }
          </NavLink>

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
                isActive ? 'bg-sky-800 text-grisClaire font-semibold' : ''
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