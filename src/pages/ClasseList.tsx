import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AddIcon from '@mui/icons-material/Add';
import AddClass from "./AddClasse";



const ClassList: React.FC = () => {
  const [classes, setClasses] = useState([
    { name: "6eme", chief: "Esperance spinoza Tsafack" },
    { name: "5eme", chief: "RAIINA Ange de Dieu" },
    { name: "4eme", chief: "Esperance spinoza Tsafack" },
    { name: "3eme", chief: "RAIINA" },
    { name: "2nd", chief: "RAIINA Ange de Dieu" },
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleAddClass = (newClass: { name: string; chief: string }) => {
    setClasses([...classes, newClass]);
  };

  const handleDeleteClass = (index: number) => {
    const updatedClasses = classes.filter((_, i) => i !== index);
    setClasses(updatedClasses);
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 font-sans">
      
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          ></div>
          
          <div className="relative w-full max-w-md">
            <AddClass
              onClose={() => setShowModal(false)} 
              onAddClass={handleAddClass}
            />
          </div>
        </div>
      )}

      <div className="text-center text-sm text-orange-400 font-semibold mb-8">
        VENDREDI LE 10 MAI 2025
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8">
        <button 
          onClick={() => setShowModal(true)}
          className="bg-bleuFonce text-white px-4 py-2 rounded font-bold shadow hover:bg-bleuFonce/90 transition flex items-center gap-2"
        >
          <AddIcon /> Ajouter une classe
        </button>
        <h2 className="text-lg font-semibold underline underline-offset-4 text-center mt-4 sm:mt-0">
          Liste des classes de l'école
        </h2>
        <div className="hidden sm:block w-32" />
      </div>

      <div className="w-full overflow-x-auto">
        <div className="min-w-[600px] divide-y divide-gray-300 rounded-lg overflow-hidden shadow">
          <div className="grid grid-cols-3 text-white text-center font-bold bg-bleuFonce">
            <div className="py-2">Nom Classe</div>
            <div className="py-2">Nom du chef classe</div>
            <div className="py-2">Actions</div>
          </div>

          {classes.map((cls, idx) => (
            <div className="grid grid-cols-3 text-center hover:bg-gray-300 bg-gray-200 text-sm" key={idx}>
              <div className="py-3 border-t border-gray-300">{cls.name}</div>
              <div className="py-3 border-t border-gray-300">{cls.chief}</div>
              <div className="flex justify-center items-center gap-2 py-3 border-t border-gray-300">
                <button className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                  Choisir un autre chef
                </button>
                <button 
                  onClick={() => handleDeleteClass(idx)}
                  className="text-red-600 text-lg font-bold"
                >
                  <DeleteIcon />
                </button>
                <button className="text-bleuFonce text-lg font-bold">
                  <RemoveRedEyeIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassList;
