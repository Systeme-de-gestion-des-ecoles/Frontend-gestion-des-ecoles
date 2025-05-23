import { useState } from 'react';
import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';


type DashboardLayoutProps = {
  children?: ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <main className="flex-1 overflow-y-auto p-6">
        <Header setSidebarOpen={setSidebarOpen} />
        
        <div className="container mx-auto">
          {children || <Outlet />}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;