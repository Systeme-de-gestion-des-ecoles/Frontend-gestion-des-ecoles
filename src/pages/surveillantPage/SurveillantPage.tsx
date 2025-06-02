import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import GavelIcon from "@mui/icons-material/Gavel";
import ComportementForm from "../FormComportmnt";

type Student = {
  id: number;
  nom: string;
  prenom: string;
  sexe: string;
  classe: string;
  photo: string;
};

const allStudents: Student[] = [
  { id: 1, nom: "Espérance", prenom: "Spinoza", sexe: "M", classe: "CM2", photo: "/images/me.jpg" },
  { id: 2, nom: "Raiina", prenom: "Ange", sexe: "F", classe: "CE2", photo: "/images/me.jpg" },
  { id: 3, nom: "Dalvira", prenom: "Temfack", sexe: "F", classe: "CM2", photo: "/images/me.jpg" },
  { id: 4, nom: "Lionel", prenom: "Mbappe", sexe: "M", classe: "CE2", photo: "/images/me.jpg" },
  { id: 5, nom: "Ines", prenom: "Claire", sexe: "F", classe: "CM1", photo: "/images/me.jpg" },
];

const classes = ["CE2", "CM1", "CM2"];

export default function PageSurveillant() {
  const [search, setSearch] = useState("");
  const [selectedClasse, setSelectedClasse] = useState("");
  const [selectedStudentId, setSelectedStudentId] = useState<number | null>(null);

  const filtered = allStudents.filter(
    (s) =>
      (!selectedClasse || s.classe === selectedClasse) &&
      `${s.nom} ${s.prenom}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <p className="text-center text-gray-500 mb-2 text-sm">
        {new Date().toLocaleDateString("fr-FR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }).toUpperCase()}
      </p>

      <h1 className="text-center text-bleuFonce underline mb-6 font-semibold text-xl">
        ENREGISTREMENT DU COMPORTEMENT DES ÉLÈVES
      </h1>

      {/* Filtres alignés */}
      <div className="flex justify-center items-center flex-wrap gap-4 mb-6">
        <select
          value={selectedClasse}
          onChange={(e) => {
            setSelectedClasse(e.target.value);
            setSelectedStudentId(null); // réinitialiser le formulaire si on change de classe
          }}
          className="border border-gray-300 rounded px-4 py-2 w-60 focus:outline-none focus:ring-2 focus:ring-bleuFonce"
        >
          <option value="">Choisir une classe</option>
          {classes.map((classe) => (
            <option key={classe} value={classe}>
              {classe}
            </option>
          ))}
        </select>

        <div className="relative w-60">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Rechercher un élève..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            disabled={!selectedClasse}
          />
        </div>
      </div>

      {/* Contenu conditionnel */}
      {!selectedClasse ? (
        <div className="text-center text-gray-500 mt-20 text-lg">
          ⚠️ Veuillez sélectionner une classe pour afficher la liste des élèves.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse bg-white shadow-sm rounded-lg">
            <thead>
              <tr className="bg-bleuFonce text-white text-sm">
                <th className="px-4 py-2 text-left">CLASSE</th>
                <th className="px-4 py-2 text-left">NOM</th>
                <th className="px-4 py-2 text-left">PRÉNOM</th>
                <th className="px-4 py-2 text-left">SEXE</th>
                <th className="px-4 py-2 text-left">DISCIPLINE</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((student) => (
                <tr
                  key={student.id}
                  className="border-b hover:bg-gray-100 transition duration-150"
                >
                  <td className="px-4 py-2">{student.classe}</td>
                  <td className="px-4 py-2 flex items-center gap-2">
                    <img
                      src={student.photo}
                      alt={student.nom}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    {student.nom}
                  </td>
                  <td className="px-4 py-2">{student.prenom}</td>
                  <td className="px-4 py-2">{student.sexe}</td>
                  <td className="px-4 py-2">
                    <button
                      className="flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                      onClick={() => setSelectedStudentId(student.id)}
                    >
                      <GavelIcon fontSize="small" />
                      Discipline
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-4 text-gray-500">
                    Aucun élève trouvé dans cette classe.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Formulaire modal si un élève est sélectionné */}
          {selectedStudentId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Fond semi-transparent sombre */}
              <div 
                className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                onClick={() => setSelectedStudentId(null)}
              ></div>
              
              {/* Contenu du modal */}
              <div className="relative rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <ComportementForm />
                  <div className="flex justify-center mt-4">
                    <button
                      className="text-red-600 underline hover:text-red-800"
                      onClick={() => setSelectedStudentId(null)}
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}