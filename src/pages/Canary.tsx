
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GitMerge } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CanaryDeployment from '@/components/CanaryDeployment';
import KubernetesPods from '@/components/KubernetesPods';
import { canaryDeployment, pods } from '@/data/dashboardData';

const Canary = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Canary Deployment</h1>
        <p className="text-muted-foreground">Gradually roll out changes to a subset of users</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitMerge size={18} className="text-primary" />
            Deployment Strategy
          </CardTitle>
          <CardDescription>
            Canary deployment allows you to release a new version to a small subset of users before rolling it out to the entire infrastructure. This provides a way to test new features with minimal risk.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="traffic">Traffic Control</TabsTrigger>
              <TabsTrigger value="metrics">Metrics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="pt-4">
              <div className="space-y-6">
                <div className="bg-muted/60 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Current Canary Deployment</h3>
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    <div className="text-muted-foreground">Status</div>
                    <div className="font-medium capitalize">{canaryDeployment.status.replace('-', ' ')}</div>
                    <div className="text-muted-foreground">Old Version</div>
                    <div className="font-medium">{canaryDeployment.oldVersion}</div>
                    <div className="text-muted-foreground">New Version</div>
                    <div className="font-medium">{canaryDeployment.newVersion}</div>
                    <div className="text-muted-foreground">Traffic Split</div>
                    <div className="font-medium">{100 - canaryDeployment.trafficPercentage}% / {canaryDeployment.trafficPercentage}%</div>
                  </div>
                </div>
                
                <CanaryDeployment {...canaryDeployment} />
              </div>
            </TabsContent>
            
            <TabsContent value="traffic" className="pt-4">
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Traffic Distribution</CardTitle>
                    <CardDescription>Configure how traffic is split between versions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center border rounded-md">
                      <p className="text-muted-foreground">Traffic visualization will appear here</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="metrics" className="pt-4">
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Performance Metrics</CardTitle>
                    <CardDescription>Compare metrics between old and new versions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center border rounded-md">
                      <p className="text-muted-foreground">Metrics comparison will appear here</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <KubernetesPods pods={pods} />
    </div>
  );
};

export default Canary;
