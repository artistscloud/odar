
import React, { useState } from 'react';
import Header from '@/components/Header';
import ProcessesNav from '@/components/ProcessesNav';
import ProcessesContent from '@/components/ProcessesContent';

const Processes = () => {
  const [activeSection, setActiveSection] = useState('collection');
  
  const sections = [
    { id: 'collection', label: 'Data Collection Protocol' },
    { id: 'chamber', label: 'Testing Chamber Blueprint' },
    { id: 'analysis', label: 'Data Analysis' },
    { id: 'validation', label: 'Validation Procedures' },
    { id: 'maintenance', label: 'System Maintenance' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#eff6ff]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        <Header />
        
        <main className="mt-8">
          <h1 className="text-3xl font-bold mb-6">OdAR System Processes</h1>
          
          <div className="flex flex-col md:flex-row gap-6">
            <ProcessesNav 
              sections={sections} 
              activeSection={activeSection} 
              onSectionChange={setActiveSection} 
            />
            
            <ProcessesContent 
              activeSection={activeSection}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Processes;
