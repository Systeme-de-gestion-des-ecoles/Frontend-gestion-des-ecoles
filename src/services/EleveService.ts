import axios from "axios";
import type { Eleve } from "../types/Eleve";


const API_URL = "https://0d29-102-244-41-149.ngrok-free.app/api";

export const listerEleves = async (): Promise<Eleve[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};
