import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ClassIcon from '@mui/icons-material/Class';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

const dataStatistiques = [
  { name: 'Utilisateurs', value: 120, icon: <PersonAddIcon /> },
  { name: 'Classes', value: 8, icon: <ClassIcon /> },
  { name: 'Matières', value: 24, icon: <AssignmentIcon /> },
  { name: 'Bus', value: 5, icon: <DirectionsBusIcon /> },
];

const graphData = [
  { mois: 'Janv', élèves: 40 },
  { mois: 'Févr', élèves: 60 },
  { mois: 'Mars', élèves: 80 },
  { mois: 'Avr', élèves: 75 },
  { mois: 'Mai', élèves: 90 },
];

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Titre */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Tableau de bord</h1>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {dataStatistiques.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg transition-all"
          >
            <div className="bg-blue-100 text-blue-800 p-3 rounded-full">
              {stat.icon}
            </div>
            <div>
              <h4 className="text-gray-600 text-sm">{stat.name}</h4>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Graphique */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Évolution des élèves inscrits</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={graphData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mois" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="élèves" fill="#0ea5e9" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Activité récente */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Activité récente</h2>
        <ul className="divide-y divide-gray-200">
          <li className="py-3 flex justify-between text-sm text-gray-600">
            <span>👤 Nouvel enseignant ajouté</span>
            <span className="text-gray-400">il y a 1h</span>
          </li>
          <li className="py-3 flex justify-between text-sm text-gray-600">
            <span>🚌 Nouveau trajet assigné</span>
            <span className="text-gray-400">il y a 2h</span>
          </li>
          <li className="py-3 flex justify-between text-sm text-gray-600">
            <span>📚 Matière "Maths" modifiée</span>
            <span className="text-gray-400">Hier</span>
          </li>
          <li className="py-3 flex justify-between text-sm text-gray-600">
            <span>🎓 Élève inscrit à la classe 5e</span>
            <span className="text-gray-400">Hier</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
