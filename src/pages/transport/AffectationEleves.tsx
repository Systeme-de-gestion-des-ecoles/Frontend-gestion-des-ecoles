import React, { useState } from "react";

type Eleve = {
  id: string;
  nom: string;
  niveau: "Maternelle" | "Primaire" | "Collège" | "Lycée";
  classe: string; // ex : 6e, Tle, CE2
};

// Exemple de données simulées
const eleves: Eleve[] = [
  { id: "1", nom: "Aminata Fofana", niveau: "Lycée", classe: "Tle A" },
  { id: "2", nom: "Michel Tchoumi", niveau: "Lycée", classe: "1ère D" },
  { id: "3", nom: "Sophie Kotto", niveau: "Collège", classe: "5e" },
  { id: "4", nom: "Junior Nomo", niveau: "Primaire", classe: "CE2" },
];

const AffectationEleves: React.FC = () => {
  const [niveau, setNiveau] = useState("");
  const [classe, setClasse] = useState("");
  const [search, setSearch] = useState("");
  const [student, setStudent] = useState("");
  const [bus, setBus] = useState("");
  const [route, setRoute] = useState("");

  const handleAffect = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ student, bus, route });
    setStudent("");
    setBus("");
    setRoute("");
  };

  const elevesFiltres = eleves.filter(
    (el) =>
      (niveau === "" || el.niveau === niveau) &&
      (classe === "" || el.classe === classe) &&
      el.nom.toLowerCase().includes(search.toLowerCase())
  );

  // Liste des classes disponibles selon niveau sélectionné
  const classesDispo = [...new Set(eleves.filter(el => niveau === "" || el.niveau === niveau).map(el => el.classe))];

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-3xl font-bold mb-6">👧 Affectation des élèves</h1>

      <form
        onSubmit={handleAffect}
        className="bg-white p-4 md:p-6 rounded shadow space-y-6 max-w-4xl w-full mx-auto">
        {/* Filtres */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 font-medium">Niveau scolaire</label>
            <select
              value={niveau}
              onChange={(e) => {
                setNiveau(e.target.value);
                setClasse(""); // Reset classe si niveau change
              }}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">-- Tous les niveaux --</option>
              <option value="Maternelle">Maternelle</option>
              <option value="Primaire">Primaire</option>
              <option value="Collège">Collège</option>
              <option value="Lycée">Lycée</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Classe</label>
            <select
              value={classe}
              onChange={(e) => setClasse(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              disabled={classesDispo.length === 0}
            >
              <option value="">-- Toutes les classes --</option>
              {classesDispo.map((cl) => (
                <option key={cl} value={cl}>
                  {cl}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Recherche élève</label>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Nom de l'élève"
            />
          </div>
        </div>

        {/* Sélection élève */}
        <div>
          <label className="block mb-1 font-medium">Élève</label>
          <select
            value={student}
            onChange={(e) => setStudent(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">-- Sélectionner un élève --</option>
            {elevesFiltres.length === 0 ? (
              <option disabled>Aucun élève trouvé</option>
            ) : (
              elevesFiltres.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.nom} ({el.classe} - {el.niveau})
                </option>
              ))
            )}
          </select>
        </div>

        {/* Bus + Trajet */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Bus</label>
            <select
              value={bus}
              onChange={(e) => setBus(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">-- Sélectionner un bus --</option>
              <option value="B1">LT1234AB</option>
              <option value="B2">LT5678CD</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Trajet</label>
            <select
              value={route}
              onChange={(e) => setRoute(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">-- Sélectionner un trajet --</option>
              <option value="T1">Bonamoussadi - Akwa</option>
              <option value="T2">Bastos - Nlongkak</option>
            </select>
          </div>
        </div>

        {/* Bouton */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-bleuFonce text-white px-6 py-2 rounded hover:bg-bleu-950"
          >
            ✅ Affecter l'élève
          </button>
        </div>
      </form>
    </div>
  );
};

export default AffectationEleves;
