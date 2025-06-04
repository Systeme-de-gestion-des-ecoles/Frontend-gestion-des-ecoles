import React, { useState } from 'react';

const Releve_note: React.FC = () => {
  const [notes, setNotes] = useState([
    { numero: 1, nom: 'Dassi ange', note: 17, isEditing: false },
    { numero: 2, nom: 'Temfack belva', note: 12, isEditing: false },
    { numero: 3, nom: 'Domkam raina', note: 10, isEditing: false },
    { numero: 4, nom: '', note: '', isEditing: false },
    { numero: 5, nom: '', note: '', isEditing: false },
    { numero: 6, nom: '', note: '', isEditing: false },
  ]);

  const handleNoteChange = (index: number, value: string) => {
    const updatedNotes = [...notes];
    updatedNotes[index].note = value;
    setNotes(updatedNotes);
  };

  const handleNomChange = (index: number, value: string) => {
    const updatedNotes = [...notes];
    updatedNotes[index].nom = value;
    setNotes(updatedNotes);
  };

  const toggleEdit = (index: number) => {
    const updatedNotes = [...notes];
    updatedNotes[index].isEditing = !updatedNotes[index].isEditing;
    setNotes(updatedNotes);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 p-4">
      <div className="bg-[#002D62] text-white p-6 rounded-lg mx-3 shadow-md w-[700px]">
        <h1 className="text-center text-white text-2xl font-bold mb-4">RELEVE DE NOTES</h1>

        <div className="text-sm mb-4">
          <p><span className="font-bold ">CLASSE:</span> 6e</p>
          <p><span className="font-bold">MATIERE:</span> Svt</p>
          <p><span className="font-bold">SEQUENCE:</span> 2</p>
          <p><span className="font-bold">COEFFICIENT:</span> 6</p>
        </div>

        <table className="w-full text-black bg-gray-300 border border-black">
          <thead className="bg-white">
            <tr>
              <th className="border border-black p-1">N°</th>
              <th className="border border-black p-1">Noms et Prénoms</th>
              <th className="border border-black p-1">Notes</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((item, index) => (
              <tr key={index}>
                <td className="border border-black p-1 text-center font-medium">{item.numero}</td>
                <td className="border border-black p-1 font-medium">
                  <input
                    type="text"
                    className="w-full bg-transparent outline-none"
                    value={item.nom}
                    onChange={(e) => handleNomChange(index, e.target.value)}
                  />
                </td>
                <td className="border border-black p-1 font-medium">
                  <div className="relative w-full">
                    {item.isEditing ? (
                      <input
                        type="text"
                        className="w-full pr-8 bg-white text-black rounded px-2"
                        value={item.note}
                        onChange={(e) => handleNoteChange(index, e.target.value)}
                        onBlur={() => toggleEdit(index)}
                        autoFocus
                      />
                    ) : (
                      <>
                        <div className="bg-transparent w-full px-2">{item.note}</div>
                        <button
                          type="button"
                          onClick={() => toggleEdit(index)}
                          title="Modifier la note"
                          className="absolute right-1 top-1/2 -translate-y-1/2 text-blue-700 text-xs font-bold"
                        >
                          ✏️
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center mt-6">
          <button className="bg-orange-500 text-white font-bold py-2 px-20 rounded hover:bg-orange-600">
            ENREGISTRER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Releve_note;
