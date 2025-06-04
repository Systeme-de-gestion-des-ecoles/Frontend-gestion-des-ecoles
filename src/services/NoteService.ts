import axios from "axios";
import type { Note } from "../types/Note";

const API_URL = "https://0d29-102-244-41-149.ngrok-free.app/api";

export const ajouterNote = async (note: Note) => {
  const response = await axios.post(API_URL, note);
  return response.data;
};
