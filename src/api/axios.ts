import axios from 'axios';

const api = axios.create({
  baseURL: 'https://0d29-102-244-41-149.ngrok-free.app/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
