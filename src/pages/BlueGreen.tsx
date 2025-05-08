
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { GitCompare, ArrowRightLeft, AlertTriangle } from 'lucide-react';
import BlueGreenEnvironment from '@/components/BlueGreenEnvironment';
import KubernetesPods from '@/components/KubernetesPods';
import { environments, pods } from '@/data/dashboardData';

const BlueGreen = () => {
  const activeEnv = environments.find(env => env.active);
  const inactiveEnv = environments.find(env => !env.active);
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Blue-Green Deployment</h1>
        <p className="text-muted-foreground">Manage your Blue-Green deployment strategy</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitCompare size={18} className="text-primary" />
            Deployment Strategy
          </CardTitle>
          <CardDescription>
            Blue-Green deployment allows you to deploy a new version (Green) while keeping the current version (Blue) running. This enables zero-downtime deployments and easy rollbacks.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BlueGreenEnvironment {...environments.find(e => e.type === 'blue')!} />
              <BlueGreenEnvironment {...environments.find(e => e.type === 'green')!} />
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t">
              <div className="bg-muted/60 px-4 py-2 rounded-lg flex items-center gap-2">
                <Badge variant="outline" className="bg-blue text-white">
                  BLUE
                </Badge>
                <ArrowRightLeft size={18} className="text-muted-foreground" />
                <Badge variant="outline" className="bg-green text-white">
                  GREEN
                </Badge>
              </div>
              
              <Button className="flex gap-2">
                <ArrowRightLeft size={16} />
                Switch Traffic to {activeEnv?.type === 'blue' ? 'Green' : 'Blue'}
              </Button>
              
              <Button variant="destructive" className="flex gap-2">
                <AlertTriangle size={16} />
                Rollback Deployment
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <KubernetesPods pods={pods} />
    </div>
  );
};

export default BlueGreen;
