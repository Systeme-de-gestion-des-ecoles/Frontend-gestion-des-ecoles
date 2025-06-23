export default function ComportementForm() {
  return (
    <div className="flex items-center justify-center lg:p-4 py-20">
      <div className="bg-[#002F6C] rounded-t-lg text-white shadow-md w-full max-w-md">
        <div className="p-8">
          <h2 className="text-center text-xl font-bold underline mb-6">
            Enregistrer un comportement
          </h2>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="type de comportement"
                className="w-full px-4 py-2 rounded bg-gray-200 text-black focus:outline-none"
              />
            </div>

            <div className="flex justify-around text-sm">
              <label className="flex items-center space-x-2">
                <input type="radio" name="gravite" className="accent-green-300" />
                <span>Faible</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="gravite" className="accent-orange" />
                <span>Moyenne</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="gravite" className="accent-red-700" />
                <span>Grave</span>
              </label>
            </div>

            <div>
              <input
                type="text"
                placeholder="saction"
                className="w-full px-4 py-2 rounded bg-gray-200 text-black focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#F5A623] text-black font-bold py-2 rounded hover:bg-yellow-500"
            >
              Valider comportement
            </button>
          </form>
        </div>
        <div className="h-2 bg-[#F5A623] rounded-t-lg"></div>
      </div>
    </div>
  );
}
