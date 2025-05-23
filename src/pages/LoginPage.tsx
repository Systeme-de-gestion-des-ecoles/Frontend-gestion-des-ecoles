export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-[#002F6C] rounded-t-lg text-white shadow-md w-full max-w-md">
        <div className="p-6">
          <h2 className="text-center text-xl font-bold underline mb-6">
            CONNEXION AU COMPTE
          </h2>

          <form className="space-y-4">
            <div>
              <label htmlFor="nom" className="block mb-1">Nom</label>
              <input
                type="text"
                id="nom"
                placeholder="Entrez votre nom"
                className="w-full px-4 py-2 rounded bg-gray-200 text-black focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="motdepasse" className="block mb-1">Mot de passe</label>
              <input
                type="password"
                id="motdepasse"
                placeholder="Entrez votre mot de passe"
                className="w-full px-4 py-2 rounded bg-gray-200 text-black focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#F5A623] text-black font-bold py-2 rounded hover:bg-yellow-500"
            >
              CONNEXION
            </button>
          </form>

          <div className="flex justify-between text-sm mt-6">
            <a href="#" className="hover:underline hover:text-sky-400 text-grisClaire">Vous n'avez pas de compte ?</a>
            <a href="#" className="hover:underline hover:text-sky-400 text-grisClaire">Mot de passe oublié ?</a>
          </div>
        </div>

        <div className="h-2 bg-[#F5A623] rounded-t-lg"></div>
      </div>
    </div>
  );
}
