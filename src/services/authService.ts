import axios from 'axios';

const API_URL = 'https://0d29-102-244-41-149.ngrok-free.app/api';

export const login = async (username: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, {
    username,
    password,
  });

  const { token } = response.data;

  // Sauvegarder le token pour les prochaines requêtes
  localStorage.setItem('authToken', token);
  return token;
};
