import React from 'react';
import { FaUserShield, FaBus, FaUtensils, FaChalkboardTeacher, FaUserFriends, FaUserTie } from 'react-icons/fa';

const Utilisateurs: React.FC = () => {
  const utilisateurs = [
    { icon: <FaUserShield size={24} />, label: 'Administrateur' },
    { icon: <FaBus size={24} />, label: 'Chauffeur' },
    { icon: <FaUtensils size={24} />, label: 'Chef cuisinier' },
    { icon: <FaChalkboardTeacher size={24} />, label: 'Enseignant' },
    { icon: <FaUserFriends size={24} />, label: 'Parent' },
    { icon: <FaUserTie size={24} />, label: 'Surveillant général' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-[#002D62] p-6 rounded-lg w-full max-w-md text-white">
        <h2 className="text-center text-xl font-bold mb-6">LISTE DES UTILISATEURS</h2>
        <div className="space-y-4">
          {utilisateurs.map((utilisateur, index) => (
            <div key={index} className="flex items-center justify-between bg-white text-black px-4 py-2 rounded">
              <div className="flex items-center gap-4">
                <div className="text-black">{utilisateur.icon}</div>
                <span className="font-medium">{utilisateur.label}</span>
              </div>
              <button className="bg-orange-500 text-white text-sm font-semibold py-1 px-3 rounded hover:bg-orange-600">
                Voir la liste
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Utilisateurs;
