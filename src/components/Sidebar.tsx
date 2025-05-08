
import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  RefreshCw, 
  GitCompare, 
  GitMerge, 
  History, 
  Settings,
  Layers 
} from 'lucide-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
}

const SidebarItem = ({ icon, label, to, active }: SidebarItemProps) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        cn(
          "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
          isActive 
            ? "bg-sidebar-accent text-primary" 
            : "text-sidebar-foreground hover:bg-sidebar-accent/50"
        )
      }
    >
      <span className="flex shrink-0 items-center justify-center w-6 h-6">
        {icon}
      </span>
      <span>{label}</span>
    </NavLink>
  );
};

const Sidebar = () => {
  return (
    <div className="w-64 bg-sidebar h-full border-r border-sidebar-border flex flex-col shadow-md">
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center space-x-2">
          <RefreshCw size={24} className="text-primary" />
          <span className="font-bold text-xl text-sidebar-foreground">DeployFlow</span>
        </div>
      </div>
      
      <div className="p-3 flex flex-col gap-1.5 flex-1 overflow-y-auto">
        <div className="mb-2 px-3 py-1 text-xs uppercase text-sidebar-foreground/60 font-semibold">
          Main
        </div>
        <SidebarItem 
          icon={<LayoutDashboard size={18} />} 
          label="Dashboard" 
          to="/" 
        />
        
        <div className="mt-6 mb-2 px-3 py-1 text-xs uppercase text-sidebar-foreground/60 font-semibold">
          Deployment
        </div>
        <SidebarItem 
          icon={<GitCompare size={18} />} 
          label="Blue-Green" 
          to="/blue-green" 
        />
        <SidebarItem 
          icon={<GitMerge size={18} />} 
          label="Canary" 
          to="/canary" 
        />
        <SidebarItem 
          icon={<Layers size={18} />} 
          label="Environments" 
          to="/environments" 
        />
        <SidebarItem 
          icon={<History size={18} />} 
          label="History" 
          to="/history" 
        />
      </div>
      
      <div className="p-3 border-t border-sidebar-border mt-auto">
        <SidebarItem 
          icon={<Settings size={18} />} 
          label="Settings" 
          to="/settings" 
        />
      </div>
    </div>
  );
};

export default Sidebar;
