
import React from 'react';
import DataCollectionProtocol from '@/components/processes/DataCollectionProtocol';
import TestingChamberBlueprint from '@/components/processes/TestingChamberBlueprint';
import DataAnalysisContent from '@/components/processes/DataAnalysisContent';
import ValidationProceduresContent from '@/components/processes/ValidationProceduresContent';

interface ProcessesContentProps {
  activeSection: string;
}

const ProcessesContent: React.FC<ProcessesContentProps> = ({ activeSection }) => {
  if (activeSection === 'collection') {
    return <DataCollectionProtocol />;
  }
  
  if (activeSection === 'chamber') {
    return <TestingChamberBlueprint />;
  }
  
  if (activeSection === 'analysis') {
    return <DataAnalysisContent />;
  }
  
  if (activeSection === 'validation') {
    return <ValidationProceduresContent />;
  }
  
  // For maintenance section or any other future sections
  return (
    <div className="flex-1 glass-card p-6">
      <p className="text-odar-gray-500 italic">Content for {activeSection} is coming soon...</p>
    </div>
  );
};

export default ProcessesContent;
