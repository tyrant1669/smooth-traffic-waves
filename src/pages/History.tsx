
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { History as HistoryIcon, RefreshCw, ArrowLeft, GitMerge, Server } from 'lucide-react';
import { timelineEvents } from '@/data/dashboardData';

interface DeploymentRecord {
  id: string;
  type: 'blue-green' | 'canary' | 'rollback';
  environment: string;
  version: string;
  timestamp: string;
  status: 'success' | 'failed' | 'in-progress';
  author: string;
  description: string;
}

const deployments: DeploymentRecord[] = [
  {
    id: 'dep-1',
    type: 'blue-green',
    environment: 'Production Green',
    version: 'v2.4.0-rc1',
    timestamp: '2025-05-08 09:15',
    status: 'in-progress',
    author: 'Alex Developer',
    description: 'Deploy new features for user dashboard'
  },
  {
    id: 'dep-2',
    type: 'blue-green',
    environment: 'Production Blue',
    version: 'v2.3.1',
    timestamp: '2025-05-07 14:32',
    status: 'success',
    author: 'Sam Smith',
    description: 'Hotfix for login issue'
  },
  {
    id: 'dep-3',
    type: 'canary',
    environment: 'Canary',
    version: 'v2.3.0',
    timestamp: '2025-05-06 10:45',
    status: 'success',
    author: 'Jamie Roberts',
    description: 'New authentication flow'
  },
  {
    id: 'dep-4',
    type: 'rollback',
    environment: 'Production Green',
    version: 'v2.2.5',
    timestamp: '2025-05-05 16:20',
    status: 'success',
    author: 'System',
    description: 'Automatic rollback due to high error rate'
  },
  {
    id: 'dep-5',
    type: 'blue-green',
    environment: 'Production Green',
    version: 'v2.3.0',
    timestamp: '2025-05-05 15:10',
    status: 'failed',
    author: 'Jamie Roberts',
    description: 'Update to user management system'
  },
];

const DeploymentIcon = ({ type }: { type: DeploymentRecord['type'] }) => {
  switch (type) {
    case 'blue-green':
      return <Server size={16} className="text-blue" />;
    case 'canary':
      return <GitMerge size={16} className="text-teal" />;
    case 'rollback':
      return <ArrowLeft size={16} className="text-destructive" />;
    default:
      return <RefreshCw size={16} />;
  }
};

const StatusBadge = ({ status }: { status: DeploymentRecord['status'] }) => {
  const colors = {
    success: 'bg-accent text-accent-foreground',
    failed: 'bg-destructive text-destructive-foreground',
    'in-progress': 'bg-yellow-500 text-white',
  };
  
  return (
    <Badge className={colors[status]}>
      {status === 'in-progress' ? 'In Progress' : status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
};

const History = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Deployment History</h1>
        <p className="text-muted-foreground">View and manage previous deployments</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HistoryIcon size={18} className="text-primary" />
            Recent Deployments
          </CardTitle>
          <CardDescription>
            History of recent deployments across all environments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {deployments.map((deployment) => (
              <Card key={deployment.id} className="bg-muted/40">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <DeploymentIcon type={deployment.type} />
                      <CardTitle className="text-base">{deployment.environment} - {deployment.version}</CardTitle>
                    </div>
                    <StatusBadge status={deployment.status} />
                  </div>
                  <CardDescription>{deployment.timestamp} by {deployment.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">{deployment.description}</div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Details</Button>
                      {deployment.status === 'success' && (
                        <Button variant="outline" size="sm">
                          <ArrowLeft size={14} className="mr-1" />
                          Rollback
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-6">
            <Button variant="outline">Load More</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default History;
