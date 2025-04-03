
import React, { useEffect } from 'react';
import PumpMechanismTabs from '@/components/tech-specs/PumpMechanismTabs';
import RangingSystemSection from '@/components/tech-specs/RangingSystemSection';
import EnclosureDesignSection from '@/components/tech-specs/EnclosureDesignSection';
import MicrocontrollerSystemSection from '@/components/tech-specs/MicrocontrollerSystemSection';
import SensorArraySection from '@/components/tech-specs/SensorArraySection';
import SystemVisualsTabs from '@/components/tech-specs/SystemVisualsTabs';
import ModelArchitectureSection from '@/components/tech-specs/ModelArchitectureSection';
import NanoFiberSensorSection from '@/components/tech-specs/NanoFiberSensorSection';

interface TechSpecsContentProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const TechSpecsContent: React.FC<TechSpecsContentProps> = ({ activeSection, setActiveSection }) => {
  useEffect(() => {
    const handleNavigateToSection = (event: CustomEvent) => {
      if (event.detail && event.detail.section) {
        setActiveSection(event.detail.section);
      }
    };

    window.addEventListener('navigate-to-section', handleNavigateToSection as EventListener);
    
    return () => {
      window.removeEventListener('navigate-to-section', handleNavigateToSection as EventListener);
    };
  }, [setActiveSection]);

  return (
    <div className="flex-1 glass-card p-6">
      {activeSection === 'pump' && <PumpMechanismTabs />}
      {activeSection === 'ranging' && <RangingSystemSection />}
      {activeSection === 'enclosure' && <EnclosureDesignSection />}
      {activeSection === 'microcontroller' && <MicrocontrollerSystemSection />}
      {activeSection === 'sensor' && <SensorArraySection />}
      {activeSection === 'visuals' && <SystemVisualsTabs />}
      {activeSection === 'model' && <ModelArchitectureSection />}
      {activeSection === 'nanofiber' && <NanoFiberSensorSection />}
    </div>
  );
};

export default TechSpecsContent;
