
import React from 'react';
import BlueprintSVG from './chamber/BlueprintSVG';
import ChamberDimensions from './chamber/ChamberDimensions';
import SystemComponents from './chamber/SystemComponents';
import SafetyFeatures from './chamber/SafetyFeatures';
import AdditionalFeatures from './chamber/AdditionalFeatures';
import { ScrollArea } from '@/components/ui/scroll-area';

const TestingChamberBlueprint = () => {
  return (
    <div className="flex-1 glass-card p-6 overflow-auto">
      <div className="prose prose-odar max-w-none">
        <h2 className="text-2xl font-bold text-odar-blue mb-6">OdAR Testing Chamber Blueprint</h2>
        
        <div className="mb-8 overflow-auto">
          <BlueprintSVG />
        </div>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">OdAR Testing Chamber Specifications</h3>
        
        <ScrollArea className="h-[400px] pr-4">
          <ChamberDimensions />
          <SystemComponents />
          <SafetyFeatures />
          <AdditionalFeatures />
        </ScrollArea>
      </div>
    </div>
  );
};

export default TestingChamberBlueprint;
