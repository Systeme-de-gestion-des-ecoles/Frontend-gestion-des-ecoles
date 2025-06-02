import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import 'simplebar/dist/simplebar.min.css';
import 'simplebar-react/dist/simplebar.min.css';
import "bootstrap/dist/css/bootstrap.min.css";

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
import Surveillant from './pages/Surveillant';
import Remplissage_note from './pages/Remplissage_note';
import Assignation from './pages/Assigner_matiere';
import AjouterMatiere from './pages/Ajouter_matiere';
import Chauffeur from './pages/Chauffeur';
import Releve_note from './pages/Releve_note';
import Profil_eleve from './pages/Profil_eleve';
import ReleveNoteParent from './pages/ReleveNoteParent';
import Layout from './pages/profeseur/Layout';


type ProtectedRouteProps = {
  children: ReactNode;
};
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  // Ajoutez ici votre logique d'authentification
  const isAuthenticated = true; // À remplacer par votre logique réelle
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};


export default function App() {
  return (
    <Router>
      <Routes>

        {/* Route raina */}

        <Route path="/chauffeur" element={<Chauffeur/>} />
        <Route path="/parent" element={<Parent/>} />
        <Route path="/surveillant" element={<Surveillant/>} />
        <Route path="/remplissage_note" element={<Remplissage_note/>} />
        <Route path="/releve_note" element={<Releve_note/>} />
       <Route path="/profil_eleve" element={<Profil_eleve/>} />

        {/* Route dédiée au chef de classe */}
        <Route path="/chef-classe" element={
          <ProtectedRoute>
            <ChefClassePage />
          </ProtectedRoute>
        } />
    
      <Route path="/page-parent" element={<PageParent />} />
      <Route path="/releve_note/:eleveId" element={<ReleveNoteParent />} />
          
        

        <Route path="/page-surveillant" element={
          <ProtectedRoute>
            <PageLayout />
          </ProtectedRoute>
        } />


        <Route path="/page-professeur" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        } />
         
        {/* Routes protégées avec layout */}
        <Route element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="/liste-des-eleves" element={<ListEleves />} />
          <Route path='/liste-eleves' element={<ClassList />}  />
          <Route path="/formulaire-comportement" element={<FormComportmnt />} />
          <Route path="/assignation" element={<Assignation/>} />
          <Route path="/ajouter_matiere" element={<AjouterMatiere/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/eleve" element={<Eleve/>} />
        </Route>
      </Routes>

    </Router>
  );
}