
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatusCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  status?: 'healthy' | 'warning' | 'error' | 'info';
  className?: string;
}

const StatusCard = ({
  title,
  value,
  icon,
  status = 'info',
  className,
}: StatusCardProps) => {
  const statusColors = {
    healthy: 'bg-accent/10 text-accent',
    warning: 'bg-yellow-500/10 text-yellow-500',
    error: 'bg-destructive/10 text-destructive',
    info: 'bg-primary/10 text-primary',
  };

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">{value}</span>
          <div className={cn("p-2 rounded-full", statusColors[status])}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusCard;
