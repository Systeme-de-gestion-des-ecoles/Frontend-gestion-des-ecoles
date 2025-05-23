import { Bell, Menu } from 'lucide-react';
import type {Dispatch, SetStateAction } from 'react';

type HeaderProps = {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  title?: string;
  subtitle?: string;
};

const Header = ({ 
  setSidebarOpen, 
  title = 'Dashboard',
  subtitle = 'Your dashboard overview' 
}: HeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center">
        <button 
          className="md:hidden mr-4 text-gray-500"
          onClick={() => setSidebarOpen(prev => !prev)}
        >
          <Menu className="w-6 h-6" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-white border rounded px-4 py-1.5 text-sm">Share</button>
        <button className="bg-white border rounded px-4 py-1.5 text-sm">Export</button>
        <Bell className="w-5 h-5 text-gray-500" />
        <img src="https://i.pravatar.cc/40" alt="avatar" className="rounded-full w-8 h-8" />
      </div>
    </div>
  );
};

export default Header;