import api from "../../api/axios";

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  confirmPassword: string;
  role: string;
}

export const registerUser = async (data: RegisterData) => {
  const response = await api.post('/users/register', data); // Adapte le endpoint si besoin
  return response.data;
};
