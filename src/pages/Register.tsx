import React, { useState } from 'react';
import { registerUser } from './services/userService';


const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await registerUser(formData);
      setResponseMessage("Utilisateur créé avec succès !");
      setFormData({ username: '', password: '', role: '' });
    } catch (error: any) {
      setResponseMessage("Erreur lors de la création de l'utilisateur.");
    }
  };

  const inputClass = "w-full px-3 py-2 rounded bg-white text-sm";

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-[#032B5F] p-9 mx-3 w-[400px] rounded-lg">
        <h2 className="text-white text-center text-lg font-bold mb-4">Création d'un utilisateur</h2>

        <div className="space-y-5">
          <input
            type="text"
            name="username"
            placeholder="Nom d'utilisateur"
            value={formData.username}
            onChange={handleChange}
            className={inputClass}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={formData.password}
            onChange={handleChange}
            className={inputClass}
            required
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className={inputClass}
            required
          >
            <option value="">Choisir un rôle</option>
            <option value="admin">Admin</option>
            <option value="parent">Parent</option>
            <option value="eleve">Eleve</option>
            <option value="surveillant">Surveillant</option>
            <option value="professeur">Professeur</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-bold py-2 rounded hover:bg-orange-600 mt-6"
        >
          Créer l'utilisateur
        </button>

        {responseMessage && (
          <p className="mt-4 text-center text-sm text-white">{responseMessage}</p>
        )}
      </form>
    </div>
  );
};

export default Register;
