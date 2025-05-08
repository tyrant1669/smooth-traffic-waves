
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Settings as SettingsIcon, Save, Server, GitMerge } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Settings = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Configure your deployment settings</p>
      </div>
      
      <Tabs defaultValue="general">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="blue-green">Blue-Green</TabsTrigger>
          <TabsTrigger value="canary">Canary</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <SettingsIcon size={18} className="text-primary" />
                General Settings
              </CardTitle>
              <CardDescription>
                Configure general deployment preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="projectName">Project Name</Label>
                  <Input id="projectName" defaultValue="Main Service" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="kube-context">Kubernetes Context</Label>
                  <Input id="kube-context" defaultValue="production-cluster" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="nginx-config">Nginx Config Path</Label>
                  <Input id="nginx-config" defaultValue="/etc/nginx/conf.d/main.conf" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-notifications">Automatic Notifications</Label>
                    <div className="text-sm text-muted-foreground">
                      Receive notifications on deployment events
                    </div>
                  </div>
                  <Switch id="auto-notifications" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-rollback">Automatic Rollback</Label>
                    <div className="text-sm text-muted-foreground">
                      Automatically rollback failed deployments
                    </div>
                  </div>
                  <Switch id="auto-rollback" defaultChecked />
                </div>
                
                <div className="pt-4 flex justify-end">
                  <Button className="flex items-center gap-2">
                    <Save size={16} />
                    Save Settings
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="blue-green" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server size={18} className="text-primary" />
                Blue-Green Deployment Settings
              </CardTitle>
              <CardDescription>
                Configure settings specific to Blue-Green deployments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="blue-namespace">Blue Namespace</Label>
                    <Input id="blue-namespace" defaultValue="production-blue" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="green-namespace">Green Namespace</Label>
                    <Input id="green-namespace" defaultValue="production-green" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="health-validation">Health Validation Before Switch</Label>
                    <div className="text-sm text-muted-foreground">
                      Validate health before switching to new environment
                    </div>
                  </div>
                  <Switch id="health-validation" defaultChecked />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="health-endpoint">Health Check Endpoint</Label>
                  <Input id="health-endpoint" defaultValue="/api/health" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="switch-timeout">Switch Timeout (seconds)</Label>
                  <Input id="switch-timeout" type="number" defaultValue="60" />
                </div>
                
                <div className="pt-4 flex justify-end">
                  <Button className="flex items-center gap-2">
                    <Save size={16} />
                    Save Settings
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="canary" className="pt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitMerge size={18} className="text-primary" />
                Canary Deployment Settings
              </CardTitle>
              <CardDescription>
                Configure settings specific to Canary deployments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="initial-traffic">Initial Traffic Percentage</Label>
                  <Input id="initial-traffic" type="number" defaultValue="10" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="step-percentage">Step Percentage</Label>
                  <Input id="step-percentage" type="number" defaultValue="10" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="step-interval">Step Interval (minutes)</Label>
                  <Input id="step-interval" type="number" defaultValue="15" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-increment">Automatic Traffic Increment</Label>
                    <div className="text-sm text-muted-foreground">
                      Automatically increase traffic to new version
                    </div>
                  </div>
                  <Switch id="auto-increment" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="metrics-based">Metrics-Based Progression</Label>
                    <div className="text-sm text-muted-foreground">
                      Progress based on performance metrics
                    </div>
                  </div>
                  <Switch id="metrics-based" defaultChecked />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="max-error-rate">Maximum Error Rate (%)</Label>
                  <Input id="max-error-rate" type="number" defaultValue="1" />
                </div>
                
                <div className="pt-4 flex justify-end">
                  <Button className="flex items-center gap-2">
                    <Save size={16} />
                    Save Settings
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
