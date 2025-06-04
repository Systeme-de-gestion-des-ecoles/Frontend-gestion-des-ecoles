import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";


type User = {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  role: 'parent' | 'professeur' | 'chef de classe' | 'surveillant';
  classe?: string; // Optionnel, seulement pour les chefs de classe
  matiere?: string; // Optionnel, seulement pour les professeurs
};

// Composant principal de la liste des utilisateurs
const UserList: React.FC = () => {
  // Données des utilisateurs
  const [users, setUsers] = useState<User[]>([
    { id: '1', nom: 'Dupont', prenom: 'Jean', email: 'jean.dupont@email.com', role: 'parent' },
    { id: '2', nom: 'Martin', prenom: 'Sophie', email: 'sophie.martin@email.com', role: 'professeur', matiere: 'Mathématiques' },
    { id: '3', nom: 'Bernard', prenom: 'Luc', email: 'luc.bernard@email.com', role: 'chef de classe', classe: '6eme' },
    { id: '4', nom: 'Petit', prenom: 'Marie', email: 'marie.petit@email.com', role: 'surveillant' },
    { id: '5', nom: 'Durand', prenom: 'Pierre', email: 'pierre.durand@email.com', role: 'professeur', matiere: 'Français' },
    { id: '6', nom: 'Leroy', prenom: 'Julie', email: 'julie.leroy@email.com', role: 'parent' },
    { id: '7', nom: 'Moreau', prenom: 'Thomas', email: 'thomas.moreau@email.com', role: 'chef de classe', classe: '5eme' },
  ]);

  // États pour les filtres
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  // Rôles disponibles pour le filtre
  const roles = ['parent', 'professeur', 'chef de classe', 'surveillant'];

  // Filtrer les utilisateurs
  const filteredUsers = users.filter(user => {
    const matchesRole = selectedRole ? user.role === selectedRole : true;
    const matchesSearch = search 
      ? `${user.nom} ${user.prenom}`.toLowerCase().includes(search.toLowerCase()) 
      : true;
    
    return matchesRole && matchesSearch;
  });

  // Gestion de la suppression d'un utilisateur
  const handleDeleteUser = (id: string) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {/* Date actuelle */}
      <p className="text-center text-gray-500 mb-2 text-sm">
        {new Date().toLocaleDateString("fr-FR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }).toUpperCase()}
      </p>

      <h1 className="text-center text-bleuFonce underline mb-6 font-semibold text-xl">
        GESTION DES UTILISATEURS
      </h1>

      {/* Filtres */}
      <div className="flex justify-center items-center flex-wrap gap-4 mb-6">
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-60 focus:outline-none focus:ring-2 focus:ring-bleuFonce"
        >
          <option value="">Tous les rôles</option>
          {roles.map((role) => (
            <option key={role} value={role}>
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </option>
          ))}
        </select>

        <div className="relative w-60">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Rechercher un utilisateur..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <Link 
        to="/register"
        className="bg-bleuFonce text-white px-4 py-2 rounded font-bold shadow hover:bg-bleuFonce/90 transition flex items-center gap-2"
        >
        <AddIcon /> Ajouter un utilisateur
        </Link>
      </div>

      {/* Liste des utilisateurs */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse bg-white shadow-sm rounded-lg">
          <thead>
            <tr className="bg-bleuFonce text-white text-sm">
              <th className="px-4 py-2 text-left">NOM</th>
              <th className="px-4 py-2 text-left">PRÉNOM</th>
              <th className="px-4 py-2 text-left">EMAIL</th>
              <th className="px-4 py-2 text-left">ROLE</th>
              <th className="px-4 py-2 text-left">DÉTAILS</th>
              <th className="px-4 py-2 text-left">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-100 transition duration-150"
              >
                <td className="px-4 py-2">{user.nom}</td>
                <td className="px-4 py-2">{user.prenom}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    user.role === 'professeur' ? 'bg-blue-100 text-blue-800' :
                    user.role === 'chef de classe' ? 'bg-green-100 text-green-800' :
                    user.role === 'surveillant' ? 'bg-purple-100 text-purple-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {user.role.toUpperCase()}
                  </span>
                  {user.classe && <div className="text-xs mt-1">Classe: {user.classe}</div>}
                  {user.matiere && <div className="text-xs mt-1">Matière: {user.matiere}</div>}
                </td>
                <td className="px-4 py-2">
                  <button className="text-bleuFonce hover:text-bleuFonce/80">
                    <RemoveRedEyeIcon />
                  </button>
                </td>
                <td className="px-4 py-2">
                  <button 
                    onClick={() => handleDeleteUser(user.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  Aucun utilisateur trouvé.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

     
    </div>
  );
};

export default UserList;