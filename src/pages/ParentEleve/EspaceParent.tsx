import SchoolIcon from "@mui/icons-material/School";
import ReportIcon from "@mui/icons-material/Report";
import GradeIcon from "@mui/icons-material/Grade";

type Enfant = {
  id: number;
  nom: string;
  prenom: string;
  photo: string;
  notes: string;
  comportement: string;
  absences: number;
};

const enfantsDuParent: Enfant[] = [
  {
    id: 1,
    nom: "TEMFACK",
    prenom: "DALVIRA",
    photo: "/images/me.jpg",
    notes: "Moyenne : 15.5 / 20",
    comportement: "Bon",
    absences: 1,
  },
  {
    id: 2,
    nom: "ANGE",
    prenom: "RAIINA",
    photo: "/images/me.jpg",
    notes: "13.8 / 20",
    comportement: "Excelent",
    absences: 0,
  },
];

export default function EspaceParent() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-center text-blue-800 font-bold text-xl mb-6">
        Espace Parent - Suivi des enfants
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {enfantsDuParent.map((enfant) => (
          <div
            key={enfant.id}
            className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4"
          >
            <img
              src={enfant.photo}
              alt={enfant.nom}
              className="w-16 h-16 rounded-full object-cover shrink-0"
            />

            <div className="flex flex-col gap-1">
              <h2 className="font-semibold text-lg text-gray-700">
                {enfant.prenom} {enfant.nom}
              </h2>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <GradeIcon fontSize="small" className="text-yellow-500" />
                <span className="font-bold">Moyenne:</span> {enfant.notes}
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <ReportIcon fontSize="small" className="text-blue-500" />
                <span className="font-bold">Comportement:</span>{enfant.comportement}
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <SchoolIcon fontSize="small" className="text-red-500" />
                <span className="font-bold">Absences:</span>{enfant.absences}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
