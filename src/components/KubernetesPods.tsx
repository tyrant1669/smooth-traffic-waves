
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Layers } from 'lucide-react';

interface Pod {
  id: string;
  name: string;
  status: 'Running' | 'Pending' | 'Failed' | 'Unknown';
  version: string;
  environment: 'blue' | 'green';
}

interface KubernetesPodsProps {
  pods: Pod[];
}

const KubernetesPods = ({ pods }: KubernetesPodsProps) => {
  const statusColors = {
    Running: 'bg-accent text-accent-foreground',
    Pending: 'bg-yellow-500 text-white',
    Failed: 'bg-destructive text-destructive-foreground',
    Unknown: 'bg-muted-foreground text-background',
  };

  const environmentColors = {
    blue: 'border-blue-light',
    green: 'border-green-light',
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Layers size={18} className="text-primary" />
          Kubernetes Pods
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {pods.map((pod) => (
            <div
              key={pod.id}
              className={cn(
                "pod border-l-4 bg-muted/40 p-3 rounded-md",
                environmentColors[pod.environment]
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium truncate">{pod.name}</span>
                <div className={cn(
                  "text-xs px-2 py-0.5 rounded-full",
                  statusColors[pod.status]
                )}>
                  {pod.status}
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                {pod.environment.charAt(0).toUpperCase() + pod.environment.slice(1)} | {pod.version}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default KubernetesPods;
