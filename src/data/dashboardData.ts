
export interface Pod {
  id: string;
  name: string;
  status: 'Running' | 'Pending' | 'Failed' | 'Unknown';
  version: string;
  environment: 'blue' | 'green';
}

export interface Environment {
  type: 'blue' | 'green';
  active: boolean;
  version: string;
  status: 'healthy' | 'warning' | 'error';
  pods: {
    healthy: number;
    total: number;
  };
  lastDeployed: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  time: string;
  description: string;
  status: 'success' | 'pending' | 'error';
}

// Sample data for the dashboard
export const environments: Environment[] = [
  {
    type: 'blue',
    active: true,
    version: 'v2.3.1',
    status: 'healthy',
    pods: {
      healthy: 3,
      total: 3,
    },
    lastDeployed: '2025-05-07 14:32',
  },
  {
    type: 'green',
    active: false,
    version: 'v2.4.0-rc1',
    status: 'warning',
    pods: {
      healthy: 2,
      total: 3,
    },
    lastDeployed: '2025-05-08 09:15',
  },
];

export const pods: Pod[] = [
  {
    id: 'pod-1',
    name: 'app-blue-deployment-7d8f9b7c9d-1',
    status: 'Running',
    version: 'v2.3.1',
    environment: 'blue',
  },
  {
    id: 'pod-2',
    name: 'app-blue-deployment-7d8f9b7c9d-2',
    status: 'Running',
    version: 'v2.3.1',
    environment: 'blue',
  },
  {
    id: 'pod-3',
    name: 'app-blue-deployment-7d8f9b7c9d-3',
    status: 'Running',
    version: 'v2.3.1',
    environment: 'blue',
  },
  {
    id: 'pod-4',
    name: 'app-green-deployment-5f7d8e6f5e-1',
    status: 'Running',
    version: 'v2.4.0-rc1',
    environment: 'green',
  },
  {
    id: 'pod-5',
    name: 'app-green-deployment-5f7d8e6f5e-2',
    status: 'Running',
    version: 'v2.4.0-rc1',
    environment: 'green',
  },
  {
    id: 'pod-6',
    name: 'app-green-deployment-5f7d8e6f5e-3',
    status: 'Pending',
    version: 'v2.4.0-rc1',
    environment: 'green',
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'event-1',
    title: 'Green Deployment Started',
    time: '09:15',
    description: 'Started deploying v2.4.0-rc1 to Green environment',
    status: 'success',
  },
  {
    id: 'event-2',
    title: 'Canary Deployment Started',
    time: '09:30',
    description: 'Started canary deployment with 10% traffic to v2.4.0-rc1',
    status: 'pending',
  },
  {
    id: 'event-3',
    title: 'Blue Deployment Complete',
    time: '14:32 (Yesterday)',
    description: 'Successfully deployed v2.3.1 to Blue environment',
    status: 'success',
  },
  {
    id: 'event-4',
    title: 'Pod Scaling Event',
    time: '13:45 (Yesterday)',
    description: 'Scaled Blue deployment from 2 to 3 pods',
    status: 'success',
  },
  {
    id: 'event-5',
    title: 'Green Deployment Failed',
    time: '10:20 (Yesterday)',
    description: 'Failed to deploy v2.3.5 to Green environment',
    status: 'error',
  },
];

export const canaryDeployment = {
  oldVersion: 'v2.3.1',
  newVersion: 'v2.4.0-rc1',
  trafficPercentage: 10,
  status: 'in-progress' as const,
};
