
import React from 'react';
import { Bell, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Header = () => {
  return (
    <header className="border-b bg-background h-16 flex items-center justify-between px-6">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-primary">Deployment Dashboard</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Bell size={18} />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Settings size={18} />
        </Button>
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-primary text-primary-foreground">
            AD
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
