
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { RefreshCw, Server, ExternalLink, Check, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EnvironmentProps {
  type: 'blue' | 'green';
  active: boolean;
  version: string;
  status: 'healthy' | 'warning' | 'error';
  pods: {
    healthy: number;
    total: number;
  };
  lastDeployed: string;
}

const BlueGreenEnvironment = ({
  type,
  active,
  version,
  status,
  pods,
  lastDeployed,
}: EnvironmentProps) => {
  const colors = {
    blue: 'bg-blue-light/10 border-blue-light',
    green: 'bg-green-light/10 border-green-light',
  };

  const statusColors = {
    healthy: 'bg-accent text-accent-foreground',
    warning: 'bg-yellow-500 text-white',
    error: 'bg-destructive text-destructive-foreground',
  };

  const statusIcons = {
    healthy: <Check size={16} />,
    warning: <AlertTriangle size={16} />,
    error: <AlertTriangle size={16} />,
  };

  return (
    <Card className={cn(
      "border-2",
      colors[type],
      active && "ring-2 ring-offset-2",
      active && type === 'blue' ? "ring-blue" : "ring-green"
    )}>
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2">
            <Server size={18} className={type === 'blue' ? 'text-blue' : 'text-green'} />
            {type === 'blue' ? 'Blue Environment' : 'Green Environment'}
            {active && <Badge variant="outline" className="ml-2">Active</Badge>}
          </CardTitle>
        </div>
        <Badge variant="outline" className={cn(statusColors[status], "flex items-center gap-1")}>
          {statusIcons[status]}
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Version</span>
            <span className="font-medium">{version}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Pods</span>
            <span className="font-medium">{pods.healthy}/{pods.total} Healthy</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Last Deployed</span>
            <span className="font-medium">{lastDeployed}</span>
          </div>
          
          <div className="flex space-x-2 pt-2">
            <Button 
              variant="outline" 
              className="flex-1" 
              disabled={active}
            >
              {active ? "Current" : "Switch To"}
            </Button>
            <Button variant="outline" size="icon">
              <ExternalLink size={16} />
            </Button>
            <Button variant="outline" size="icon">
              <RefreshCw size={16} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlueGreenEnvironment;
