import axios from "axios";
import type { Eleve } from "../types/Eleve";


const API_URL = "http://localhost:8080/api/eleves";

export const listerEleves = async (): Promise<Eleve[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};
