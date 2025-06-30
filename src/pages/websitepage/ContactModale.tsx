import React from "react";
import { X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 p-2 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl w-full max-w-lg p-6 relative shadow-lg">
        {/* Bouton Fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-[#0b1444] mb-4 text-center">
          Contactez-nous
        </h2>

       <form className="space-y-6">
  <div>
    <label className="text-sm font-medium text-gray-700">Nom</label>
    <input
      type="text"
      placeholder="Votre nom"
      className="w-full border-0 border-b-2 border-gray-300 focus:border-[#0b1444] focus:outline-none px-0 py-2 bg-transparent"
    />
  </div>

  <div>
    <label className="text-sm font-medium text-gray-700">Email</label>
    <input
      type="email"
      placeholder="exemple@email.com"
      className="w-full border-0 border-b-2 border-gray-300 focus:border-[#0b1444] focus:outline-none px-0 py-2 bg-transparent"
    />
  </div>

  <div>
    <label className="text-sm font-medium text-gray-700">Message</label>
    <textarea
      placeholder="Votre message"
      rows={4}
      className="w-full border rounded-md px4 border-gray-300 focus:border-[#0b1444] focus:outline-none px-0 py-2 bg-transparent"
    ></textarea>
  </div>
</form>

      </div>
    </div>
  );
};

export default ContactModal;
