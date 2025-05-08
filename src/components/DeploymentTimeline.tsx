
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { History, Check, Clock, AlertTriangle } from 'lucide-react';

interface TimelineEvent {
  id: string;
  title: string;
  time: string;
  description: string;
  status: 'success' | 'pending' | 'error';
}

interface DeploymentTimelineProps {
  events: TimelineEvent[];
}

const StatusIcon = ({ status }: { status: TimelineEvent['status'] }) => {
  switch (status) {
    case 'success':
      return <Check size={16} className="text-accent" />;
    case 'pending':
      return <Clock size={16} className="text-yellow-500" />;
    case 'error':
      return <AlertTriangle size={16} className="text-destructive" />;
  }
};

const DeploymentTimeline = ({ events }: DeploymentTimelineProps) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <History size={18} className="text-primary" />
          Deployment History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-muted-foreground/20" />
          
          {/* Timeline events */}
          <div className="space-y-6">
            {events.map((event, index) => (
              <div key={event.id} className="flex gap-4">
                <div className={cn(
                  "h-7 w-7 rounded-full flex items-center justify-center z-10",
                  event.status === 'success' ? "bg-accent/20" : 
                  event.status === 'pending' ? "bg-yellow-500/20" : "bg-destructive/20"
                )}>
                  <StatusIcon status={event.status} />
                </div>
                
                <div className="space-y-1 flex-1">
                  <div className="flex justify-between">
                    <span className="font-medium">{event.title}</span>
                    <span className="text-sm text-muted-foreground">{event.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeploymentTimeline;
