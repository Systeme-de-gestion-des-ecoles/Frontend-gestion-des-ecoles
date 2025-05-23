import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import 'simplebar/dist/simplebar.min.css';
import 'simplebar-react/dist/simplebar.min.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Pages
import LoginPage from './pages/LoginPage';
import FormComportmnt from './pages/FormComportmnt';
import ListEleves from './pages/ListEleves';

// Layout
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './components/layout/Dashboard';

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
        
        {/* Routes protégées avec layout */}
        <Route element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="/formulaire-comportement" element={<FormComportmnt />} />
          <Route path="/liste-des-eleves" element={<ListEleves />} />
        </Route>
      </Routes>
    </Router>
  );
}