import api from "../../api/axios";


export interface RegisterData {
  username: string;
  password: string;
  role: string;
}

export const registerUser = async (data: RegisterData) => {
  const payload = {
    username: data.username,
    password: data.password,
    roles: [data.role], // Le backend attend un tableau
  };

  const response = await api.post('/users', payload);
  return response.data;
};
