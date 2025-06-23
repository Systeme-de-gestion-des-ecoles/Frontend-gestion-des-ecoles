export interface Note {
  id?: number;
  matiere: string;
  valeur: number;
  eleveId: number; // relation simulée avec l'élève
}
