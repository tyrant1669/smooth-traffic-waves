
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { GitMerge, AlertTriangle, Check } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface CanaryDeploymentProps {
  oldVersion: string;
  newVersion: string;
  trafficPercentage: number;
  status: 'in-progress' | 'complete' | 'failed';
}

const CanaryDeployment = ({
  oldVersion,
  newVersion,
  trafficPercentage: initialTraffic,
  status,
}: CanaryDeploymentProps) => {
  const [trafficPercentage, setTrafficPercentage] = useState(initialTraffic);
  
  const getStatusColor = () => {
    switch (status) {
      case 'complete':
        return 'text-accent';
      case 'failed':
        return 'text-destructive';
      default:
        return 'text-primary';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'complete':
        return <Check size={18} />;
      case 'failed':
        return <AlertTriangle size={18} />;
      default:
        return <GitMerge size={18} />;
    }
  };

  return (
    <Card className="border-2 border-teal/20 bg-teal-light/5">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <span className={getStatusColor()}>{getStatusIcon()}</span>
              Canary Deployment
            </CardTitle>
            <CardDescription>
              Traffic split between versions
            </CardDescription>
          </div>
          <Button 
            variant={status === 'complete' ? 'secondary' : 'default'}
            disabled={status === 'failed'}
            size="sm"
          >
            {status === 'complete' ? 'Deployed' : status === 'failed' ? 'Failed' : 'Complete Rollout'}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="bg-muted p-4 rounded-lg space-y-4">
            <div className="flex justify-between">
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">Current Version</div>
                <div className="font-medium">{oldVersion}</div>
              </div>
              <div className="space-y-1 text-right">
                <div className="text-sm text-muted-foreground">New Version</div>
                <div className="font-medium">{newVersion}</div>
              </div>
            </div>
            
            <div className="h-2 relative w-full bg-muted-foreground/20 rounded">
              <div 
                className="absolute left-0 top-0 h-full bg-primary rounded deployment-progress-bar"
                style={{ width: `${trafficPercentage}%` }}
              />
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{100 - trafficPercentage}%</span>
              <span className="text-muted-foreground">{trafficPercentage}%</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <label className="text-sm font-medium">Traffic Control</label>
            <Slider
              value={[trafficPercentage]}
              onValueChange={(values) => setTrafficPercentage(values[0])}
              disabled={status !== 'in-progress'}
              min={0}
              max={100}
              step={5}
              className="py-2"
            />
            
            <div className="grid grid-cols-2 gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                disabled={trafficPercentage === 0 || status !== 'in-progress'}
                onClick={() => setTrafficPercentage(Math.max(0, trafficPercentage - 10))}
              >
                -10%
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                disabled={trafficPercentage === 100 || status !== 'in-progress'}
                onClick={() => setTrafficPercentage(Math.min(100, trafficPercentage + 10))}
              >
                +10%
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CanaryDeployment;
