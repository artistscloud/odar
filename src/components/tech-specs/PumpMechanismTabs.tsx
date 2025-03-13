
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PumpMechanismContent from './PumpMechanismContent';

const PumpMechanismTabs: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Pump Mechanism</h2>
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="mechanical">Mechanical Specs</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <PumpMechanismContent tab="overview" />
        </TabsContent>
        <TabsContent value="mechanical" className="space-y-4">
          <PumpMechanismContent tab="mechanical" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PumpMechanismTabs;
