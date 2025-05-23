import { useState } from "react";

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
  {
    id: 1,
    nom: "Esperance",
    prenom: "Spinoza",
    sexe: "M",
    statut: "ABSENT",
    photo: "/images/me.jpg",
  },
  {
    id: 2,
    nom: "RAIINA",
    prenom: "ANGE",
    sexe: "F",
    statut: "PRESENT",
    photo: "/images/me.jpg",
  },
  {
    id: 3,
    nom: "DALVIRA",
    prenom: "TEMFACK",
    sexe: "F",
    statut: "PRESENT",
    photo: "/images/me.jpg",
  },
  {
    id: 4,
    nom: "RAIINA",
    prenom: "ANGE",
    sexe: "F",
    statut: "PRESENT",
    photo: "/images/me.jpg",
  },
  {
    id: 5,
    nom: "RAIINA",
    prenom: "ANGE",
    sexe: "F",
    statut: "ABSENT",
    photo: "/images/me.jpg",
  },
];

export default function AttendanceList() {
  const [students, setStudents] = useState<Student[]>(initialStudents);

  const toggleStatut = (id: number) => {
    const updated: Student[] = students.map((student) =>
      student.id === id
        ? {
            ...student,
            statut: student.statut === "PRESENT" ? "ABSENT" : "PRESENT",
          }
        : student
    );
    setStudents(updated);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <p className="text-center text-sm text-gray-500 mb-2">
        VENDREDI LE 10 MAI 2025
      </p>
      <h1 className="text-center text-blue-800 underline mb-6 font-semibold">
        LISTE DES ELEVES DE LA CLASSE CM2
      </h1>

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
            {students.map((student) => (
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
                    <div
                      className={`w-4 h-4 rounded ${
                        student.statut === "PRESENT"
                          ? "bg-green-500"
                          : "bg-red-600"
                      }`}
                    ></div>
                    {student.statut}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-8">
        <button className="w-full max-w-2xl bg-yellow-400 hover:bg-yellow-500 text-bleuFonce font-bold py-2 px-6 rounded">
          VALIDER APPELS
        </button>
      </div>
    </div>
  );
}
