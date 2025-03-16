
import React from 'react';
import DataCollectionProtocol from './processes/DataCollectionProtocol';
import TestingChamberBlueprint from './processes/TestingChamberBlueprint';
import DataAnalysisContent from './processes/DataAnalysisContent';
import ValidationProceduresContent from './processes/ValidationProceduresContent';
import SystemMaintenanceContent from './processes/SystemMaintenanceContent';

interface ProcessesContentProps {
  activeSection: string;
}

const ProcessesContent: React.FC<ProcessesContentProps> = ({ activeSection }) => {
  return (
    <div className="w-full md:w-3/4">
      {activeSection === 'collection' && <DataCollectionProtocol />}
      {activeSection === 'chamber' && <TestingChamberBlueprint />}
      {activeSection === 'analysis' && <DataAnalysisContent />}
      {activeSection === 'validation' && <ValidationProceduresContent />}
      {activeSection === 'maintenance' && <SystemMaintenanceContent />}
    </div>
  );
};

export default ProcessesContent;
