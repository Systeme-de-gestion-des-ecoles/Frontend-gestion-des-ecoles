import axios from "axios";
import type { Note } from "../types/Note";

const API_URL = "http://localhost:8080/api/notes";

export const ajouterNote = async (note: Note) => {
  const response = await axios.post(API_URL, note);
  return response.data;
};
