import type { Sujet } from "../types/Sujet";

export async function ajouterSujet(sujet: Sujet) {
  const response = await fetch('http://localhost:8080/api/sujets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    credentials: 'include', // Ajoutez cette ligne cruciale
    body: JSON.stringify(sujet)
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || "Erreur lors de l'ajout du sujet");
  }

  return await response.json();
}