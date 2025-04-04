
import React, { useState } from 'react';
import Header from '@/components/Header';
import TechSpecsNav from '@/components/TechSpecsNav';
import TechSpecsContent from '@/components/TechSpecsContent';
import { FileCode, Layers } from 'lucide-react';

const TechSpecs = () => {
  const [activeSection, setActiveSection] = useState('pump');
  
  const sections = [
    { id: 'pump', label: 'Pump Mechanism' },
    { id: 'ranging', label: 'Ranging System' },
    { id: 'enclosure', label: 'Enclosure Design' },
    { id: 'microcontroller', label: 'Microcontroller System' },
    { id: 'sensor', label: 'Sensor Array' },
    { id: 'nanofiber', label: 'Nanofiber Technology', icon: <Layers className="w-4 h-4" /> },
    { id: 'visuals', label: 'System Visuals' },
    { id: 'model', label: 'Model Architecture', icon: <FileCode className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#eff6ff]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        <Header />
        
        <main className="mt-8">
          <h1 className="text-3xl font-bold mb-6">Technical Specifications</h1>
          
          <div className="flex flex-col md:flex-row gap-6">
            <TechSpecsNav 
              sections={sections} 
              activeSection={activeSection} 
              onSectionChange={setActiveSection} 
            />
            
            <TechSpecsContent 
              activeSection={activeSection}
              setActiveSection={setActiveSection} 
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default TechSpecs;
