
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import type { ReactNode } from 'react';

import FormComportmnt from './pages/FormComportmnt';
import ListEleves from './pages/ChefDeClasse/ListEleves';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './components/layout/Dashboard';
import ClassList from './pages/ClasseList';
import ChefClassePage from './pages/ChefDeClasse/ChefClassePage';
import PageParent from './pages/ParentEleve/PageParents';
import PageLayout from './pages/surveillantPage/PageLayout';

import Register from './pages/Register';
import Eleve from './pages/Eleve';
import Parent from './pages/Parent';
import Remplissage_note from './pages/Remplissage_note';
import Assignation from './pages/Assigner_matiere';
import AjouterMatiere from './pages/Ajouter_matiere';
import Releve_note from './pages/Releve_note';
import Profil_eleve from './pages/Profil_eleve';
import Layout from './pages/profeseur/Layout';
import LoginPage from './pages/LoginPage';
import UserList from './pages/UserList';
import VisitorHome from './pages/websitepage/VisitorHome';
import DemoNavigator from './pages/websitepage/DemoNavigator';
import GestionBus from './pages/transport/GestionBus';
import GestionTrajets from './pages/transport/GestionTrajets';
import AffectationEleves from './pages/transport/AffectationEleves';
import SuiviTempsReel from './pages/transport/SuiviTempsReel';
import Historique from './pages/transport/Historique';
import PageLayoutChauffeur from './pages/chauffeur/PageLayoutChauffeur';
import PageAppelEleves from './pages/chauffeur/PageAppelEleves';
import PageSignalerPanne from './pages/chauffeur/PageSignalerPanne';
import ModifierTrajetPage from './pages/ParentEleve/ModifierTrajetPage';
import ReleveNoteParentPage from './pages/ParentEleve/ReleveNoteParentPage';

type ProtectedRouteProps = {
  children: ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = localStorage.getItem('authToken');
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

export default function App() {
  return (
    <div className="font-linkedin">
      <Router>
        <Routes>

          {/* ✅ Page publique principale (visiteur) */}
          <Route path="/" element={<VisitorHome />} />
          <Route path="/demo" element={<DemoNavigator />} />

          {/* ✅ Page de connexion */}
          <Route path="/login" element={<LoginPage onClose={() => {}} />} />

          {/* ✅ Dashboard et autres routes protégées sous /dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            {/* ✅ Route principale du dashboard */}
            <Route index element={<Dashboard />} />
            <Route path="liste-des-eleves" element={<ListEleves />} />
            <Route path="liste-eleves" element={<ClassList />} />
            <Route path="formulaire-comportement" element={<FormComportmnt />} />
            <Route path="assignation" element={<Assignation />} />
            <Route path="ajouter_matiere" element={<AjouterMatiere />} />
            <Route path="register" element={<Register />} />
            <Route path="eleve" element={<Eleve />} />
            <Route path="liste-utilisateur" element={<UserList />} />
            <Route path="/dashboard/gestion-bus" element={<GestionBus />} />
            <Route path="/dashboard/gestion-trajets" element={<GestionTrajets />} />
            <Route path="/dashboard/affectation-eleves" element={<AffectationEleves />} />
            <Route path="/dashboard/suivi-temps-reel" element={<SuiviTempsReel />} />
            <Route path="/dashboard/historique" element={<Historique />} />
          </Route>

          {/* ✅ Autres routes protégées individuelles */}
          <Route
            path="/chef-classe"
            element={
              <ProtectedRoute>
                <ChefClassePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/parent"
            element={
              <ProtectedRoute>
                <PageParent />
              </ProtectedRoute>
            }
          />

          <Route
            path="/surveillant"
            element={
              <ProtectedRoute>
                <PageLayout />
              </ProtectedRoute>
            }
          />
           <Route path="/modifier-trajet/:id" element={<ModifierTrajetPage />} />

          <Route
            path="/professeur"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          />

          <Route
            path="/parent"
            element={
              <ProtectedRoute>
                <Parent />
              </ProtectedRoute>
            }
          />

          <Route
            path="/remplissage_note"
            element={
              <ProtectedRoute>
                <Remplissage_note />
              </ProtectedRoute>
            }
          />

          <Route
            path="/releve_note"
            element={
              <ProtectedRoute>
                <Releve_note />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profil_eleve"
            element={
              <ProtectedRoute>
                <Profil_eleve />
              </ProtectedRoute>
            }
          />

          <Route
            path="/releve_note/:eleveId"
            element={
              <ProtectedRoute>
                <ReleveNoteParentPage />
              </ProtectedRoute>
            }
          />
          {/* Route chauffeur */}
          <Route path="/chauffeur" element={<PageLayoutChauffeur />} />
          <Route path="/appel-eleves" element={<PageAppelEleves />} />
          <Route path="/signaler-panne" element={<PageSignalerPanne />} />

          {/* ✅ Route inconnue → rediriger vers la page visiteur */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}
