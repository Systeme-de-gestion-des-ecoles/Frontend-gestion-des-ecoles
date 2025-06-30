import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BusFront, AlertTriangle, Users, School, Home } from "lucide-react";

export default function ChauffeurAccueil() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5A623] p-4 text-blue-800">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Bonjour M. Paul (Chauffeur Bus 3)</h1>

        <Card className="rounded-2xl shadow-md mb-4">
          <CardContent className="grid grid-cols-2 gap-4 p-4">
            <Button
              className="bg-white text-blue-800 font-bold shadow rounded-2xl py-6"
              onClick={() => navigate("/depart-matin")}
            >
              🟢 Départ Matin
            </Button>

            <Button
              className="bg-white text-blue-800 font-bold shadow rounded-2xl py-6"
              onClick={() => navigate("/depart-soir")}
            >
              🟠 Départ Soir
            </Button>

            <Button
              className="bg-white text-blue-800 font-bold shadow rounded-2xl py-6"
              onClick={() => navigate("/arrivee-ecole")}
            >
              <School className="inline mr-2" /> Arrivée École
            </Button>

            <Button
              className="bg-white text-blue-800 font-bold shadow rounded-2xl py-6"
              onClick={() => navigate("/arrivee-maison")}
            >
              <Home className="inline mr-2" /> Arrivée Maison
            </Button>

            <Button
              className="bg-white text-blue-800 font-bold shadow rounded-2xl py-6 col-span-2"
              onClick={() => navigate("/appel-eleves")}
            >
              <Users className="inline mr-2" /> Faire l'appel
            </Button>

            <Button
              className="bg-white text-blue-800 font-bold shadow rounded-2xl py-6 col-span-2"
              onClick={() => navigate("/signaler-panne")}
            >
              <AlertTriangle className="inline mr-2" /> Signaler une panne
            </Button>
          </CardContent>
        </Card>

        <Separator className="my-4 bg-blue-800" />
        <p className="text-center text-sm">Plateforme Scolink</p>
      </div>
    </div>
  );
}
