import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import 'simplebar/dist/simplebar.min.css';
import 'simplebar-react/dist/simplebar.min.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Pages
import LoginPage from './pages/LoginPage';
import FormComportmnt from './pages/FormComportmnt';
import ListEleves from './pages/ChefDeClasse/ListEleves';


import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './components/layout/Dashboard';
import ClassList from './pages/ClasseList';
import ChefClassePage from './pages/ChefDeClasse/ChefClassePage';
import PageParent from './pages/ParentEleve/PageParents';
import PageLayout from './pages/surveillantPage/PageLayout';
import AddClass from './pages/AddClasse';





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
        {/* Route publique */}
        <Route path="/login" element={<LoginPage />} />
        {/* Route dédiée au chef de classe */}
        <Route path="/chef-classe" element={
          <ProtectedRoute>
            <ChefClassePage />
          </ProtectedRoute>
        } />
        <Route path="/page-parent" element={
          <ProtectedRoute>
            <PageParent />
          </ProtectedRoute>
        } />

        <Route path="/page-surveillant" element={
          <ProtectedRoute>
            <PageLayout />
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
        </Route>
      </Routes>
    </Router>
  );
}