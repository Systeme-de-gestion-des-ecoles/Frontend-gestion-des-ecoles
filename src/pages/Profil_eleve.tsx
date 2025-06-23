import React from 'react';

const Profil_eleve: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="bg-[#032B5F] text-white rounded-lg p-6 mx-3 w-[450px]">
        <h1 className="text-center text-2xl font-bold mb-4">PROFIL ELEVE</h1>

    
        <div className="flex justify-center mb-4">
          <img
            src="/public/image5.jpg" 
            alt="Profil élève"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>

     
        <div className="grid grid-cols-2 gap-2 text-sm mb-6">
          <div className="font-bold space-y-1">
            <p>Nom:</p>
            <p>Prénom:</p>
            <p>Sexe:</p>
            <p>Date de naissance:</p>
            <p>Classe:</p>
            <p>Numéro de table:</p>
            <p>Matricule:</p>
          </div>
          <div className="space-y-1">
            <p>DASSI DOMKAM</p>
            <p>Ange Raina</p>
            <p>Féminin</p>
            <p>11-01-2004</p>
            <p>Terminale</p>
            <p>04</p>
            <p>LYC2025</p>
          </div>
        </div>

        <table className="w-full text-sm text-center bg-white text-black rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Trimestre</th>
              <th className="p-2 border">Moyenne (/20)</th>
              <th className="p-2 border">Absence</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">1er</td>
              <td className="p-2 border">02</td>
              <td className="p-2 border">0</td>
            </tr>
            <tr>
              <td className="p-2 border">2e</td>
              <td className="p-2 border">/</td>
              <td className="p-2 border">/</td>
            </tr>
            <tr>
              <td className="p-2 border">3e</td>
              <td className="p-2 border">01</td>
              <td className="p-2 border">0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profil_eleve;
