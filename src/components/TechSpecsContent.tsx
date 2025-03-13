
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PumpMechanismContent from '@/components/tech-specs/PumpMechanismContent';
import RangingSystemContent from '@/components/tech-specs/RangingSystemContent';
import EnclosureDesignContent from '@/components/tech-specs/EnclosureDesignContent';
import MicrocontrollerSystemContent from '@/components/tech-specs/MicrocontrollerSystemContent';
import SensorArrayContent from '@/components/tech-specs/SensorArrayContent';
import SystemVisualsContent from '@/components/tech-specs/SystemVisualsContent';

interface TechSpecsContentProps {
  activeSection: string;
}

const TechSpecsContent: React.FC<TechSpecsContentProps> = ({ activeSection }) => {
  return (
    <div className="flex-1 glass-card p-6">
      {activeSection === 'pump' && (
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
      )}
      
      {activeSection === 'ranging' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Ranging System</h2>
          <RangingSystemContent />
        </div>
      )}
      
      {activeSection === 'enclosure' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Enclosure Design</h2>
          <EnclosureDesignContent />
        </div>
      )}
      
      {activeSection === 'microcontroller' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Microcontroller System</h2>
          <MicrocontrollerSystemContent />
        </div>
      )}
      
      {activeSection === 'sensor' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Sensor Array</h2>
          <SensorArrayContent />
        </div>
      )}
      
      {activeSection === 'visuals' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">System Visuals</h2>
          <Tabs defaultValue="3d" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="3d">3D View</TabsTrigger>
              <TabsTrigger value="side">Side View</TabsTrigger>
              <TabsTrigger value="specs">Key Specs</TabsTrigger>
              <TabsTrigger value="assembly">Assembly Guide</TabsTrigger>
            </TabsList>
            <TabsContent value="3d" className="space-y-4">
              <SystemVisualsContent tab="3d" />
            </TabsContent>
            <TabsContent value="side" className="space-y-4">
              <SystemVisualsContent tab="side" />
            </TabsContent>
            <TabsContent value="specs" className="space-y-4">
              <SystemVisualsContent tab="specs" />
            </TabsContent>
            <TabsContent value="assembly" className="space-y-4">
              <SystemVisualsContent tab="assembly" />
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default TechSpecsContent;
