import React, { useState } from 'react';
import api from '../api/axios';

type LoginPageProps = {
  onClose: () => void;
};

export default function LoginPage({ onClose }: LoginPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post('/login', {
        username,
        password,
      });

      const token = response.data.token;
      localStorage.setItem('authToken', token); 
      alert('Connexion réussie ✅');
      onClose(); 
    } catch (error: any) {
      console.error(error);
      setError('Échec de la connexion. Vérifiez vos identifiants.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-bleuFonce rounded-t-lg text-white shadow-md w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-white text-xl">×</button>

        <div className="p-6">
          <h2 className="text-center text-xl font-bold underline mb-6">
            CONNEXION AU COMPTE
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="nom" className="block mb-1">Nom</label>
              <input
                type="text"
                id="nom"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Entrez votre nom"
                className="w-full px-4 py-2 rounded bg-gray-200 text-black"
                required
              />
            </div>

            <div>
              <label htmlFor="motdepasse" className="block mb-1">Mot de passe</label>
              <input
                type="password"
                id="motdepasse"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrez votre mot de passe"
                className="w-full px-4 py-2 rounded bg-gray-200 text-black"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#F5A623] text-black font-bold py-2 rounded hover:bg-yellow-500"
            >
              CONNEXION
            </button>
          </form>

          {error && <p className="text-red-400 mt-4 text-center">{error}</p>}

          <div className="flex justify-between text-sm mt-6">
            <a href="#" className="hover:underline text-grisClaire">Vous n'avez pas de compte ?</a>
            <a href="#" className="hover:underline text-grisClaire">Mot de passe oublié ?</a>
          </div>
        </div>

        <div className="h-2 bg-[#F5A623] rounded-t-lg"></div>
      </div>
    </div>
  );
}
