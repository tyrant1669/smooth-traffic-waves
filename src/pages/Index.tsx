
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StatusCard from '@/components/StatusCard';
import BlueGreenEnvironment from '@/components/BlueGreenEnvironment';
import CanaryDeployment from '@/components/CanaryDeployment';
import DeploymentTimeline from '@/components/DeploymentTimeline';
import KubernetesPods from '@/components/KubernetesPods';
import { environments, pods, timelineEvents, canaryDeployment } from '@/data/dashboardData';
import { Server, GitMerge, RefreshCw, CheckCircle } from 'lucide-react';

const Index = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Manage your Blue-Green and Canary deployments</p>
      </div>
      
      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatusCard 
          title="Environment Status" 
          value="Healthy" 
          icon={<CheckCircle size={20} />} 
          status="healthy" 
        />
        <StatusCard 
          title="Pods Running" 
          value={`${pods.filter(p => p.status === 'Running').length}/${pods.length}`} 
          icon={<Server size={20} />} 
          status={pods.every(p => p.status === 'Running') ? 'healthy' : 'warning'} 
        />
        <StatusCard 
          title="Active Deployments" 
          value="2" 
          icon={<RefreshCw size={20} />} 
          status="info" 
        />
        <StatusCard 
          title="Traffic Split" 
          value={`${100 - canaryDeployment.trafficPercentage}% / ${canaryDeployment.trafficPercentage}%`} 
          icon={<GitMerge size={20} />} 
          status="info" 
        />
      </div>
      
      {/* Blue-Green and Canary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {environments.map((env) => (
            <BlueGreenEnvironment key={env.type} {...env} />
          ))}
        </div>
        <CanaryDeployment {...canaryDeployment} />
      </div>
      
      {/* Timeline and Pods */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DeploymentTimeline events={timelineEvents} />
        <KubernetesPods pods={pods} />
      </div>
    </div>
  );
};

export default Index;
