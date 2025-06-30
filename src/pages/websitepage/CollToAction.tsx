import { MessageCircle } from "lucide-react";

const CallToAction = () => {
  return (
    <section id="contact" className="bg-gradient-to-r from-[#0b1444] to-[#1e2d80] text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Vous êtes une école ou un parent intéressé ?</h2>
        <p className="text-lg mb-8">
          Demandez une démo ou contactez-nous pour découvrir comment notre plateforme peut transformer la gestion scolaire.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <a
            href="https://wa.me/237686362376"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5" />
            Contactez-nous via WhatsApp
          </a>

          <a
            href="/demo"
            className=" text-[#0b1444] font-semibold px-6 py-3 rounded-full bg-gray-100 transition-all duration-200"
          >
            Demander une démo
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
