
import React from 'react';
import PumpMechanismTabs from '@/components/tech-specs/PumpMechanismTabs';
import RangingSystemSection from '@/components/tech-specs/RangingSystemSection';
import EnclosureDesignSection from '@/components/tech-specs/EnclosureDesignSection';
import MicrocontrollerSystemSection from '@/components/tech-specs/MicrocontrollerSystemSection';
import SensorArraySection from '@/components/tech-specs/SensorArraySection';
import SystemVisualsTabs from '@/components/tech-specs/SystemVisualsTabs';

interface TechSpecsContentProps {
  activeSection: string;
}

const TechSpecsContent: React.FC<TechSpecsContentProps> = ({ activeSection }) => {
  return (
    <div className="flex-1 glass-card p-6">
      {activeSection === 'pump' && <PumpMechanismTabs />}
      {activeSection === 'ranging' && <RangingSystemSection />}
      {activeSection === 'enclosure' && <EnclosureDesignSection />}
      {activeSection === 'microcontroller' && <MicrocontrollerSystemSection />}
      {activeSection === 'sensor' && <SensorArraySection />}
      {activeSection === 'visuals' && <SystemVisualsTabs />}
    </div>
  );
};

export default TechSpecsContent;
