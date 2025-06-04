import { BookOpen, Users, GraduationCap, Calendar, Clock } from 'lucide-react';

const stats = [
  { title: "Élèves inscrits", value: "1243", icon: Users, trend: "+12% ce mois" },
  { title: "Cours actifs", value: "42", icon: BookOpen, trend: "+3 nouveaux" },
  { title: "Enseignants", value: "68", icon: GraduationCap, trend: "2 absents" },
  { title: "Événements", value: "5", icon: Calendar, trend: "1 aujourd'hui" },
];

const quickActions = [
  { title: "Ajouter un élève", icon: Users },
  { title: "Créer un cours", icon: BookOpen },
  { title: "Planifier un examen", icon: GraduationCap },
  { title: "Voir l'emploi du temps", icon: Calendar },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Tableau de bord</h1>
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-gray-500" />
          <span className="text-sm text-gray-600">{new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                <p className="text-xs text-green-600 mt-1">{stat.trend}</p>
              </div>
              <div className="p-2 rounded-full bg-blue-50 text-blue-600">
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Raccourcis */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold mb-4">Actions rapides</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <action.icon className="w-6 h-6 text-blue-600 mb-2" />
              <span className="text-sm text-center">{action.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}