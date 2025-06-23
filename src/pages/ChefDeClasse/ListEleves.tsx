import { useState } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';

type Statut = "PRESENT" | "ABSENT";

type Student = {
  id: number;
  nom: string;
  prenom: string;
  sexe: string;
  statut: Statut;
  photo: string;
};

const initialStudents: Student[] = [
  { id: 1, nom: "Esperance", prenom: "Spinoza", sexe: "M", statut: "ABSENT", photo: "/images/me.jpg" },
  { id: 2, nom: "RAIINA", prenom: "ANGE", sexe: "F", statut: "PRESENT", photo: "/images/me.jpg" },
  { id: 3, nom: "DALVIRA", prenom: "TEMFACK", sexe: "F", statut: "PRESENT", photo: "/images/me.jpg" },
  { id: 4, nom: "RAIINA", prenom: "ANGE", sexe: "F", statut: "PRESENT", photo: "/images/me.jpg" },
  { id: 5, nom: "RAIINA", prenom: "ANGE", sexe: "F", statut: "ABSENT", photo: "/images/me.jpg" },
];

export default function ListEleves() {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [search, setSearch] = useState("");

  const toggleStatut = (id: number) => {
    const updated: Student[] = students.map((student) =>
      student.id === id
        ? {
            ...student,
            statut: student.statut === "PRESENT" ? "ABSENT" : "PRESENT" as Statut,
          }
        : student
    );
    setStudents(updated);
  };

  const filteredStudents = students.filter((student) =>
    `${student.nom} ${student.prenom}`.toLowerCase().includes(search.toLowerCase())
  );

  const nbPresents = students.filter(s => s.statut === "PRESENT").length;
  const nbAbsents = students.length - nbPresents;

  return (
    <div className="p-6 min-h-screen text-sm">
      <p className="text-center text-gray-500 mb-2">
        {new Date().toLocaleDateString("fr-FR", {
          weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        }).toUpperCase()}
      </p>

      <h1 className="text-center text-blue-800 underline mb-6 font-semibold text-lg">
        LISTE DES ELEVES DE LA CLASSE CM2
      </h1>

    <div className="mb-4 flex justify-center">
      <div className="relative w-full max-w-md">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
          <SearchIcon />
        </span>
        <input
          type="text"
          placeholder="Rechercher un élève..."
          className="pl-10 border border-gray-300 rounded px-6 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
      {/* Statistiques */}
      <div className="flex justify-center gap-4 mb-4">
        <div className="bg-green-100 text-green-800 px-4 py-2 rounded font-medium">
          Présents : {nbPresents}
        </div>
        <div className="bg-red-100 text-red-800 px-4 py-2 rounded font-medium">
          Absents : {nbAbsents}
        </div>
      </div>

      {/* Tableau des élèves */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-2">
          <thead>
            <tr>
              <th className="bg-gray-400 px-4 py-2 text-white rounded">MATRICULE</th>
              <th className="bg-gray-400 px-4 py-2 text-white rounded">NOM</th>
              <th className="bg-gray-400 px-4 py-2 text-white rounded">PRENOM</th>
              <th className="bg-gray-400 px-4 py-2 text-white rounded">SEXE</th>
              <th className="bg-gray-400 px-4 py-2 text-white rounded">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="text-center">
                <td className="bg-gray-200 px-4 py-2 rounded">E25-00{student.id}</td>
                <td className="bg-gray-200 px-4 py-2 rounded flex items-center justify-center gap-2">
                  <img
                    src={student.photo}
                    alt={student.nom}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  {student.nom}
                </td>
                <td className="bg-gray-200 px-4 py-2 rounded">{student.prenom}</td>
                <td className="bg-gray-200 px-4 py-2 rounded">{student.sexe}</td>
                <td
                  className="bg-gray-200 px-4 py-2 rounded cursor-pointer"
                  onClick={() => toggleStatut(student.id)}
                >
                  <div className="flex items-center justify-center gap-2">
                    {student.statut === "PRESENT" ? (
                      <CheckCircleIcon sx={{ color: '#4CAF50', fontSize: 20 }} />
                    ) : (
                      <CancelIcon sx={{ color: '#E53935', fontSize: 20 }} />
                    )}
                    {student.statut}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bouton validation */}
      <div className="flex justify-center mt-8">
        <button className="w-full max-w-2xl bg-orange hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded">
          VALIDER APPELS
        </button>
      </div>
    </div>
  );
}
