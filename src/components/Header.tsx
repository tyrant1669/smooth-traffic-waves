
import React from 'react';
import { Bell, Settings, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="border-b bg-background h-16 flex items-center justify-between px-4 md:px-6 shadow-sm">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-primary hidden md:block">Deployment Dashboard</h1>
      </div>
      
      <div className="hidden md:flex items-center mx-4 flex-1 max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search deployments..." 
            className="pl-9 bg-background border-muted"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-2 md:space-x-4">
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Bell size={18} />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Settings size={18} />
        </Button>
        <Avatar className="h-8 w-8 bg-primary/10">
          <AvatarFallback className="bg-primary text-primary-foreground text-sm">
            AD
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
