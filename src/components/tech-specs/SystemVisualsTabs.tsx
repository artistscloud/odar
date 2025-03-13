
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SystemVisualsContent from './SystemVisualsContent';

const SystemVisualsTabs: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">System Visuals</h2>
      <Tabs defaultValue="3d" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="3d">3D View</TabsTrigger>
          <TabsTrigger value="side">Side View</TabsTrigger>
          <TabsTrigger value="active">Active Sampling</TabsTrigger>
          <TabsTrigger value="specs">Key Specs</TabsTrigger>
          <TabsTrigger value="assembly">Assembly Guide</TabsTrigger>
        </TabsList>
        <TabsContent value="3d" className="space-y-4">
          <SystemVisualsContent tab="3d" />
        </TabsContent>
        <TabsContent value="side" className="space-y-4">
          <SystemVisualsContent tab="side" />
        </TabsContent>
        <TabsContent value="active" className="space-y-4">
          <SystemVisualsContent tab="active" />
        </TabsContent>
        <TabsContent value="specs" className="space-y-4">
          <SystemVisualsContent tab="specs" />
        </TabsContent>
        <TabsContent value="assembly" className="space-y-4">
          <SystemVisualsContent tab="assembly" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SystemVisualsTabs;
