import React, { useState } from 'react';
import { FaBars, FaTrash } from 'react-icons/fa';
import classNames from 'classnames';

const ListChauffeur: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [administrateurs, setAdministrateurs] = useState([
    {
      numero: 1,
      nom: 'Ange raina',
      photo: 'public/image1.jpg',
    },
    {
      numero: 2,
      nom: 'Dassi ange',
      photo: 'public/image2.jpg',
    },
    {
      numero: 3,
      nom: '',
      photo: 'public/image3.jpg',
    },
    
  ]);

  const handleNomChange = (index: number, value: string) => {
    const updated = [...administrateurs];
    updated[index].nom = value;
    setAdministrateurs(updated);
  };

  const handleDelete = (index: number) => {
    const updated = administrateurs.filter((_, i) => i !== index);
    setAdministrateurs(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
    
      <div className="bg-[#002D62] text-white w-16 sm:w-64 p-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mb-6 text-white focus:outline-none block sm:hidden"
        >
          <FaBars size={24} />
        </button>
        <div className={classNames("space-y-4", { hidden: !menuOpen && window.innerWidth < 640 })}>
          <p className="font-bold">Utilisateurs</p>
          <ul className="text-sm space-y-2">
            <li>Administrateur</li>
            <li>Chauffeur</li>
            <li>Chef cuisinier</li>
            <li>Enseignant</li>
            <li>Parent</li>
            <li>Surveillant</li>
          </ul>
        </div>
      </div>

      <div className="flex-1 p-6">
        <h2 className="text-center text-2xl font-bold mb-6">LISTE DES CHAUFFEURS</h2>
        <table className="w-full border border-black text-center mb-6">
          <thead>
            <tr className="bg-white">
              <th className="border border-black p-2">N°</th>
              <th className="border border-black p-2">Noms</th>
              <th className="border border-black p-2">Options</th>
            </tr>
          </thead>
          <tbody>
            {administrateurs.map((admin, index) => (
              <tr key={index}>
                <td className="border border-black p-2">{admin.numero}</td>
                <td className="border border-black p-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={admin.photo}
                      alt={`Admin ${admin.nom}`}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <input
                      type="text"
                      value={admin.nom}
                      onChange={(e) => handleNomChange(index, e.target.value)}
                      className="w-full outline-none bg-transparent text-black"
                    />
                  </div>
                </td>
                <td className="border border-black p-2">
                  <div className="flex justify-center items-center gap-2">
                    <button className="bg-orange-500 text-white text-sm font-semibold py-1 px-2 rounded hover:bg-orange-600">
                      Voir les details
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center">
          <button className="bg-green-600 text-white font-bold py-2 px-6 rounded hover:bg-green-700">
            ENREGISTRER
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListChauffeur;
