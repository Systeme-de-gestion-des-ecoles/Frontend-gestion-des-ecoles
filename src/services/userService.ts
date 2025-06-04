import axios from 'axios';

const API_URL = 'https://0d29-102-244-41-149.ngrok-free.app/api';

export const registerUser = async (data: {
  username: string;
  password: string;
  role: string;
}) => {
  const token = localStorage.getItem('authToken'); // Récupère le token de l'admin

  const response = await axios.post(`${API_URL}/users`, data, {
    headers: {
      Authorization: `Bearer ${token}`, // Nécessaire pour créer un utilisateur
    },
  });

  return response.data;
};
