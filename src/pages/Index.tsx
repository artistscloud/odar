
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import SystemStatus from '@/components/SystemStatus';
import SensorVisualizer from '@/components/SensorVisualizer';
import RangeData from '@/components/RangeData';
import ControlPanel from '@/components/ControlPanel';

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#eff6ff] transition-opacity duration-1000 ${
      loaded ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        <Header />
        
        <main className="mt-6">
          <div className="mb-6">
            <SystemStatus />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <SensorVisualizer />
            </div>
            <div className="space-y-6">
              <RangeData />
              <ControlPanel />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
