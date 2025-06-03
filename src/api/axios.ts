import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // à adapter selon l'URL du backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
