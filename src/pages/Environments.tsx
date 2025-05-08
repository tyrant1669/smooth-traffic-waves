
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Layers, Server, Plus, RefreshCw } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { environments, pods } from '@/data/dashboardData';

const EnvironmentCard = ({ name, type, version, status }: { 
  name: string;
  type: string; 
  version: string; 
  status: 'active' | 'inactive' | 'maintenance';
}) => {
  const statusColors = {
    active: 'bg-accent text-accent-foreground',
    inactive: 'bg-muted-foreground text-background',
    maintenance: 'bg-yellow-500 text-white',
  };
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-base">{name}</CardTitle>
          <Badge className={statusColors[status]}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
        <CardDescription>{type}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-y-1 text-sm">
            <span className="text-muted-foreground">Version</span>
            <span>{version}</span>
            <span className="text-muted-foreground">Type</span>
            <span className="capitalize">{type}</span>
          </div>
          
          <div className="pt-2 flex justify-end">
            <Button variant="outline" size="sm">Manage</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Environments = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Environments</h1>
          <p className="text-muted-foreground">Manage your deployment environments</p>
        </div>
        <Button>
          <Plus size={16} className="mr-2" />
          New Environment
        </Button>
      </div>
      
      <Tabs defaultValue="production">
        <TabsList>
          <TabsTrigger value="production">Production</TabsTrigger>
          <TabsTrigger value="staging">Staging</TabsTrigger>
          <TabsTrigger value="development">Development</TabsTrigger>
        </TabsList>
        
        <TabsContent value="production" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <EnvironmentCard 
              name="Production Blue" 
              type="blue-green" 
              version={environments.find(e => e.type === 'blue')?.version || 'N/A'} 
              status="active" 
            />
            <EnvironmentCard 
              name="Production Green" 
              type="blue-green" 
              version={environments.find(e => e.type === 'green')?.version || 'N/A'} 
              status="inactive" 
            />
            <EnvironmentCard 
              name="Canary Environment" 
              type="canary" 
              version="v2.4.0-rc1" 
              status="active" 
            />
          </div>
        </TabsContent>
        
        <TabsContent value="staging" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <EnvironmentCard 
              name="Staging" 
              type="standard" 
              version="v2.4.0-rc2" 
              status="active" 
            />
            <EnvironmentCard 
              name="QA" 
              type="standard" 
              version="v2.4.0-rc1" 
              status="maintenance" 
            />
          </div>
        </TabsContent>
        
        <TabsContent value="development" className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <EnvironmentCard 
              name="Development" 
              type="standard" 
              version="v2.4.1-dev" 
              status="active" 
            />
            <EnvironmentCard 
              name="Feature Testing" 
              type="standard" 
              version="v2.5.0-alpha" 
              status="active" 
            />
          </div>
        </TabsContent>
      </Tabs>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Layers size={18} className="text-primary" />
            Infrastructure Overview
          </CardTitle>
          <CardDescription>
            Overview of your current infrastructure and resources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-muted/40">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Server size={16} className="text-blue" />
                      Kubernetes Clusters
                    </CardTitle>
                    <span className="text-2xl font-bold">2</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-xs text-muted-foreground">
                    Production, Staging
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-muted/40">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <RefreshCw size={16} className="text-green" />
                      Active Deployments
                    </CardTitle>
                    <span className="text-2xl font-bold">3</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-xs text-muted-foreground">
                    Blue, Green, Canary
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-muted/40">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium flex items-center gap-2">
                      <Layers size={16} className="text-teal" />
                      Total Pods
                    </CardTitle>
                    <span className="text-2xl font-bold">{pods.length}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-xs text-muted-foreground">
                    {pods.filter(p => p.status === 'Running').length} Running, {pods.filter(p => p.status !== 'Running').length} Other
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Environments;
