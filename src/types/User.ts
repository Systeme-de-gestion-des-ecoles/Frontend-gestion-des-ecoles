export interface User {
  id?: number; 
  nom: string;
  email: string;
  motDePasse: string;
  role: "ADMIN"|"ELEVE" | "PROFESSEUR" | "SURVEILLANT" | "PARENT";
}
