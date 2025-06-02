import { BookOpen, Users, GraduationCap, Calendar, Clock, MoreVertical } from 'lucide-react';

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

const transactions = [
  {
    id: '300500',
    plan: 'Platinum Subscription Plan',
    issueDate: '18 May 2025',
    dueDate: '18 Jun 2025',
    total: '$799.00',
    status: 'Paid',
  },
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

      {/* Transactions récentes */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Transactions récentes</h2>
          <input
            type="text"
            placeholder="Rechercher..."
            className="px-3 py-1.5 border rounded text-sm w-1/3"
          />
        </div>
        
        <div className="overflow-auto rounded">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">#</th>
                <th className="px-6 py-3">Facture pour</th>
                <th className="px-6 py-3">Date d'émission</th>
                <th className="px-6 py-3">Date d'échéance</th>
                <th className="px-6 py-3">Total</th>
                <th className="px-6 py-3">Statut</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{tx.id}</td>
                  <td className="px-6 py-4">{tx.plan}</td>
                  <td className="px-6 py-4">{tx.issueDate}</td>
                  <td className="px-6 py-4">{tx.dueDate}</td>
                  <td className="px-6 py-4">{tx.total}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1 rounded-full hover:bg-gray-100">
                      <MoreVertical className="w-4 h-4 text-gray-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}