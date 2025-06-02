// src/pages/ReleveNoteParent.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

type Note = {
  matiere: string;
  sequence: string;
  coefficient: number;
  note: number;
  appreciation: string;
};

type Eleve = {
  id: string;
  nom: string;
  prenom: string;
  classe: string;
  notes: Note[];
  moyenneGenerale: number;
};

const ReleveNoteParent: React.FC = () => {
  const { eleveId } = useParams<{ eleveId: string }>();
  const navigate = useNavigate();
  const [eleve, setEleve] = useState<Eleve | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulation de données - en réalité vous feriez un appel API
    const fetchEleveData = () => {
      setTimeout(() => {
        const elevesData: Eleve[] = [
          {
            id: '1',
            nom: 'TEMFACK',
            prenom: 'DALVIRA',
            classe: '6e A',
            moyenneGenerale: 15.5,
            notes: [
              { matiere: 'Mathématiques', sequence: '1', coefficient: 4, note: 16, appreciation: 'Excellent' },
              { matiere: 'Français', sequence: '1', coefficient: 3, note: 14, appreciation: 'Très bien' },
              { matiere: 'SVT', sequence: '1', coefficient: 2, note: 17, appreciation: 'Excellent' },
              { matiere: 'Histoire-Géo', sequence: '1', coefficient: 2, note: 13, appreciation: 'Bien' },
            ],
          },
          {
            id: '2',
            nom: 'ANGE',
            prenom: 'RAIINA',
            classe: '5e B',
            moyenneGenerale: 13.8,
            notes: [
              { matiere: 'Mathématiques', sequence: '1', coefficient: 4, note: 12, appreciation: 'Bien' },
              { matiere: 'Français', sequence: '1', coefficient: 3, note: 15, appreciation: 'Très bien' },
              { matiere: 'SVT', sequence: '1', coefficient: 2, note: 14, appreciation: 'Très bien' },
            ],
          },
        ];

        const selectedEleve = elevesData.find(e => e.id === eleveId) || null;
        setEleve(selectedEleve);
        setLoading(false);
      }, 500);
    };

    fetchEleveData();
  }, [eleveId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-700">Chargement du relevé de notes...</p>
        </div>
      </div>
    );
  }

  if (!eleve) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-red-600 mb-4">Élève non trouvé</h2>
          <button 
            onClick={() => navigate(-1)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center mx-auto"
          >
            <ArrowBackIcon className="mr-2" />
            Retour à l'espace parent
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="mb-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
        >
          <ArrowBackIcon className="mr-2" />
          Retour
        </button>

        <div className="bg-[#002D62] text-white p-6 rounded-lg shadow-xl">
          <h1 className="text-center text-2xl font-bold mb-6">RELEVÉ DE NOTES - {eleve.prenom} {eleve.nom}</h1>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <p className="font-bold">Classe:</p>
              <p>{eleve.classe}</p>
            </div>
            <div>
              <p className="font-bold">Moyenne Générale:</p>
              <p className="text-xl font-bold text-yellow-400">{eleve.moyenneGenerale.toFixed(1)} / 20</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white text-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-3 px-4 text-left">Matière</th>
                  <th className="py-3 px-4 text-center">Séquence</th>
                  <th className="py-3 px-4 text-center">Coeff.</th>
                  <th className="py-3 px-4 text-center">Note</th>
                  <th className="py-3 px-4 text-left">Appréciation</th>
                </tr>
              </thead>
              <tbody>
                {eleve.notes.map((note, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 border-b">{note.matiere}</td>
                    <td className="py-3 px-4 border-b text-center">{note.sequence}</td>
                    <td className="py-3 px-4 border-b text-center">{note.coefficient}</td>
                    <td className="py-3 px-4 border-b text-center font-bold">{note.note}/20</td>
                    <td className="py-3 px-4 border-b">{note.appreciation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-blue-900 bg-opacity-20 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Légende :</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p><span className="font-bold">Moyenne Générale :</span> Moyenne pondérée par les coefficients</p>
              <p><span className="font-bold">Excellent :</span> ≥ 16/20</p>
              <p><span className="font-bold">Très bien :</span> 14-15.9/20</p>
              <p><span className="font-bold">Bien :</span> 12-13.9/20</p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>Ce relevé est consultable en ligne uniquement - École VotreÉcole</p>
          <p className="mt-2">Dernière mise à jour : {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ReleveNoteParent;