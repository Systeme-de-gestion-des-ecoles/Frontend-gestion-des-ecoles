import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import TransactionsPage from './pages/TransactionsPage';
import OverviewPage from './pages/OverviewPage';
import SettingsPage from './pages/SettingsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <OverviewPage />,
      },
      {
        path: 'transactions',
        element: <TransactionsPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
    ],
  },
]);

export default router;