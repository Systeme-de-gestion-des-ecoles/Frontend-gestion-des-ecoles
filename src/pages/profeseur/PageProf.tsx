import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import GradeIcon from "@mui/icons-material/Grade";
import NotesForm from "./NotesForm";

export type Student = {
  id: number;
  nom: string;
  prenom: string;
  sexe: string;
  classe: string;
  photo: string;
  matieres: {
    nom: string;
    note: number;
    appreciation: string;
  }[];
};

const initialStudents: Student[] = [
  {
    id: 1,
    nom: "Espérance",
    prenom: "Spinoza",
    sexe: "M",
    classe: "CM2",
    photo: "/images/me.jpg",
    matieres: [
      { nom: "Mathématiques", note: 15, appreciation: "Très bien" },
      { nom: "Français", note: 12, appreciation: "Bien" },
    ],
  },
  {
    id: 2,
    nom: "Raiina",
    prenom: "Ange",
    sexe: "F",
    classe: "CE2",
    photo: "/images/me.jpg",
    matieres: [{ nom: "Mathématiques", note: 18, appreciation: "Excellent" }],
  },
  {
    id: 3,
    nom: "Dalvira",
    prenom: "Temfack",
    sexe: "F",
    classe: "CM2",
    photo: "/images/me.jpg",
    matieres: [{ nom: "Français", note: 14, appreciation: "Très bien" }],
  },
  {
    id: 4,
    nom: "Lionel",
    prenom: "Mbappe",
    sexe: "M",
    classe: "CE2",
    photo: "/images/me.jpg",
    matieres: [],
  },
  {
    id: 5,
    nom: "Ines",
    prenom: "Claire",
    sexe: "F",
    classe: "CM1",
    photo: "/images/me.jpg",
    matieres: [{ nom: "Mathématiques", note: 10, appreciation: "Passable" }],
  },
];

const classes = ["CE2", "CM1", "CM2"];
const matieres = ["Mathématiques", "Français", "Histoire", "Sciences"];

export default function PageProf() {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [search, setSearch] = useState("");
  const [selectedClasse, setSelectedClasse] = useState("");
  const [selectedStudentId, setSelectedStudentId] = useState<number | null>(null);
  const [selectedMatiere, setSelectedMatiere] = useState("");

  const filtered = students.filter(
    (s) =>
      (!selectedClasse || s.classe === selectedClasse) &&
      `${s.nom} ${s.prenom}`.toLowerCase().includes(search.toLowerCase())
  );

  const selectedStudent = selectedStudentId
    ? students.find((s) => s.id === selectedStudentId)
    : null;

  const handleSave = (updatedStudent: Student) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === updatedStudent.id ? updatedStudent : s))
    );
    setSelectedStudentId(null);
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <p className="text-center text-gray-500 mb-2 text-sm">
        {new Date()
          .toLocaleDateString("fr-FR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })
          .toUpperCase()}
      </p>

      <h1 className="text-center text-bleuFonce underline mb-6 font-semibold text-xl">
        GESTION DES NOTES DES ÉLÈVES
      </h1>

      {/* Filtres */}
      <div className="flex justify-center items-center flex-wrap gap-4 mb-6">
        <div>
          <label htmlFor="select-classe" className="sr-only">
            Choisir une classe
          </label>
          <select
            id="select-classe"
            value={selectedClasse}
            onChange={(e) => {
              setSelectedClasse(e.target.value);
              setSelectedStudentId(null);
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
        </div>

        <div>
          <label htmlFor="select-matiere" className="sr-only">
            Choisir une matière
          </label>
          <select
            id="select-matiere"
            value={selectedMatiere}
            onChange={(e) => setSelectedMatiere(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-60 focus:outline-none focus:ring-2 focus:ring-bleuFonce"
            disabled={!selectedClasse}
          >
            <option value="">Choisir une matière</option>
            {matieres.map((matiere) => (
              <option key={matiere} value={matiere}>
                {matiere}
              </option>
            ))}
          </select>
        </div>

        <div className="relative w-60">
          <label htmlFor="search-eleve" className="sr-only">
            Rechercher un élève
          </label>
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
            <SearchIcon />
          </span>
          <input
            id="search-eleve"
            type="text"
            placeholder="Rechercher un élève..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            disabled={!selectedClasse}
          />
        </div>
      </div>

      {!selectedClasse ? (
        <div className="text-center text-gray-500 mt-20 text-lg">
          ⚠️ Veuillez sélectionner une classe pour afficher la liste des élèves.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse bg-white shadow-sm rounded-lg">
            <thead>
              <tr className="bg-bleuFonce text-white text-sm">
                <th scope="col" className="px-4 py-2 text-left">
                  CLASSE
                </th>
                <th scope="col" className="px-4 py-2 text-left">
                  ÉLÈVE
                </th>
                <th scope="col" className="px-4 py-2 text-left">
                  SEXE
                </th>
                <th scope="col" className="px-4 py-2 text-left">
                  NOTES
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((student) => {
                const notesMatiere = selectedMatiere
                  ? student.matieres?.filter((m) => m.nom === selectedMatiere) || []
                  : student.matieres || [];

                return (
                  <tr
                    key={student.id}
                    className="border-b hover:bg-gray-100 transition duration-150"
                  >
                    <td className="px-4 py-2">{student.classe}</td>
                    <td className="px-4 py-2 flex items-center gap-3">
                      <img
                        src={student.photo}
                        alt="élève"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium">{student.nom}</p>
                        <p className="text-sm text-gray-500">{student.prenom}</p>
                      </div>
                    </td>
                    <td className="px-4 py-2">{student.sexe}</td>
                    <td className="px-4 py-2">
                      <div className="flex flex-col gap-1">
                        {notesMatiere.length > 0 ? (
                          notesMatiere.map((matiere, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <span className="font-medium">
                                {matiere.nom}: {matiere.note}/20
                              </span>
                              <span className="text-sm text-gray-600">
                                ({matiere.appreciation})
                              </span>
                            </div>
                          ))
                        ) : (
                          <span className="text-gray-500">Aucune note</span>
                        )}
                        <button
                          className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded mt-1 w-fit disabled:opacity-50"
                          onClick={() => setSelectedStudentId(student.id)}
                          disabled={!selectedMatiere}
                        >
                          <GradeIcon fontSize="small" />
                          {notesMatiere.length > 0 ? "Modifier" : "Ajouter"} note
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-gray-500">
                    Aucun élève trouvé dans cette classe.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {selectedStudent && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div
                className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                onClick={() => setSelectedStudentId(null)}
              ></div>

              <div className="relative rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
                <button
                  onClick={() => setSelectedStudentId(null)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
                  aria-label="Fermer"
                >
                  &times;
                </button>
                <div className="p-6">
                  <NotesForm
                    student={selectedStudent}
                    matiere={selectedMatiere}
                    onClose={() => setSelectedStudentId(null)}
                    onSave={handleSave}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
