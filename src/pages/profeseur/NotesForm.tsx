import { useState, useEffect } from "react";
import type { Student } from "./PageProf"; // Ajoutez 'type' devant l'import

type NotesFormProps = {
  student: Student | null | undefined; 
  matiere: string;
  onClose: () => void;
};

export default function NotesForm({ student, matiere, onClose }: NotesFormProps) {
  const [note, setNote] = useState<number | "">("");
  const [appreciation, setAppreciation] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (student && matiere) {
      // Vérifier si une note existe déjà pour cette matière
      const existingNote = student.matieres?.find(m => m.nom === matiere);
      if (existingNote) {
        setNote(existingNote.note);
        setAppreciation(existingNote.appreciation);
        setIsEditMode(true);
      } else {
        setNote("");
        setAppreciation("");
        setIsEditMode(false);
      }
    }
  }, [student, matiere]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (note === "" || !student || !matiere) return;

    // Ici, vous devrez implémenter la logique pour sauvegarder la note
    // Soit en modifiant le state parent, soit via une API
    console.log({
      studentId: student.id,
      matiere,
      note: Number(note),
      appreciation
    });

    // Fermer le formulaire après soumission
    onClose();
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "") {
      setNote("");
    } else {
      const numValue = Number(value);
      if (!isNaN(numValue) && numValue >= 0 && numValue <= 20) {
        setNote(numValue);
      }
    }
  };

  if (!student || !matiere) return null;

  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-bleuFonce">
        {isEditMode ? "Modifier la note" : "Ajouter une note"}
      </h2>
      
      <div className="mb-4">
        <p className="font-medium">Élève: <span className="font-normal">{student.prenom} {student.nom}</span></p>
        <p className="font-medium">Classe: <span className="font-normal">{student.classe}</span></p>
        <p className="font-medium">Matière: <span className="font-normal">{matiere}</span></p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="note" className="block text-sm font-medium text-gray-700 mb-1">
            Note (sur 20)
          </label>
          <input
            type="text"
            id="note"
            className="border border-gray-300 rounded px-3 py-2 w-20 focus:outline-none focus:ring-2 focus:ring-bleuFonce"
            value={note}
            onChange={handleNoteChange}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="appreciation" className="block text-sm font-medium text-gray-700 mb-1">
            Appréciation
          </label>
          <textarea
            id="appreciation"
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-bleuFonce"
            rows={3}
            value={appreciation}
            onChange={(e) => setAppreciation(e.target.value)}
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
            onClick={onClose}
          >
            Annuler
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-bleuFonce text-white rounded hover:bg-blue-700"
          >
            {isEditMode ? "Modifier" : "Enregistrer"}
          </button>
        </div>
      </form>
    </div>
  );
}