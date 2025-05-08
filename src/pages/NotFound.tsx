
import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <AlertTriangle size={60} className="text-destructive" />
        </div>
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-xl text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <p className="text-muted-foreground">
          Path: <code className="bg-muted px-2 py-1 rounded">{location.pathname}</code>
        </p>
        <div className="pt-4">
          <Button asChild>
            <a href="/">Return to Dashboard</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
