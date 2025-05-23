import { NavLink } from 'react-router-dom';

type SidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
};

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  return (
    <>
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed md:relative z-30 w-64 bg-white border-r transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out`}>
        <div className="p-6 font-bold text-xl">Volt React</div>
        <nav className="flex flex-col gap-2 px-4 text-gray-700">
          <NavLink 
            to="/overview" 
            className={({ isActive }) => `py-2 px-3 rounded hover:bg-gray-100 ${isActive ? 'bg-gray-100 text-blue-600 font-semibold' : ''}`}
          >
            Overview
          </NavLink>
          <NavLink 
            to="/transactions" 
            className={({ isActive }) => `py-2 px-3 rounded hover:bg-gray-100 ${isActive ? 'bg-gray-100 text-blue-600 font-semibold' : ''}`}
          >
            Transactions
          </NavLink>
          <NavLink 
            to="/settings" 
            className={({ isActive }) => `py-2 px-3 rounded hover:bg-gray-100 ${isActive ? 'bg-gray-100 text-blue-600 font-semibold' : ''}`}
          >
            Settings
          </NavLink>
        </nav>
        <div className="p-4">
          <button className="w-full bg-blue-500 text-white py-2 rounded">Upgrade to Pro</button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;