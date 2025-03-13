
import React, { useState } from 'react';
import { useStaggeredAnimation } from '@/utils/animation';

type ControlOption = {
  id: string;
  label: string;
  icon: React.ReactNode;
  options?: string[];
};

const ControlPanel: React.FC = () => {
  const [activeMode, setActiveMode] = useState('standard');
  const [pumpSpeed, setPumpSpeed] = useState('400');
  const [samplingRate, setSamplingRate] = useState('5');
  
  const controlOptions: ControlOption[] = [
    {
      id: 'mode',
      label: 'Operating Mode',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.28 13.61C15.15 14.74 13.53 15.09 12.1 14.64L9.51 17.22C9.33 17.41 8.96 17.53 8.69 17.49L7.49 17.33C7.09 17.28 6.73 16.9 6.67 16.51L6.51 15.31C6.47 15.05 6.6 14.68 6.78 14.49L9.36 11.91C8.92 10.48 9.26 8.86 10.39 7.73C12.01 6.11 14.65 6.11 16.28 7.73C17.9 9.34 17.9 11.98 16.28 13.61Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.45 16.28L9.59999 15.42" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.3945 10.7H13.4035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      options: ['Standard', 'Energy Saving', 'High Sensitivity']
    },
    {
      id: 'pump',
      label: 'Pump Flow Rate',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 16V8M14 16V8M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M4 7H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 3H15L16 7H8L9 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      options: ['200 mL/min', '400 mL/min', '600 mL/min', '800 mL/min']
    },
    {
      id: 'sampling',
      label: 'Sampling Rate',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9H21M7 3V5M17 3V5M6 13H8M11 13H13M16 13H18M6 17H8M11 17H13M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      options: ['1 Hz', '5 Hz', '10 Hz']
    }
  ];
  
  const animationVisible = useStaggeredAnimation(controlOptions.length, 150, 1000);
  
  const handleModeChange = (mode: string) => {
    setActiveMode(mode.toLowerCase());
    
    // Simulate setting appropriate values based on mode
    if (mode.toLowerCase() === 'energy saving') {
      setPumpSpeed('200');
      setSamplingRate('1');
    } else if (mode.toLowerCase() === 'high sensitivity') {
      setPumpSpeed('800');
      setSamplingRate('10');
    } else {
      setPumpSpeed('400');
      setSamplingRate('5');
    }
  };
  
  const handlePumpChange = (value: string) => {
    setPumpSpeed(value.split(' ')[0]);
  };
  
  const handleSamplingChange = (value: string) => {
    setSamplingRate(value.split(' ')[0]);
  };
  
  const getHandler = (id: string) => {
    switch (id) {
      case 'mode':
        return handleModeChange;
      case 'pump':
        return handlePumpChange;
      case 'sampling':
        return handleSamplingChange;
      default:
        return () => {};
    }
  };
  
  const getValue = (id: string) => {
    switch (id) {
      case 'mode':
        return activeMode === 'standard' ? 'Standard' : 
               activeMode === 'energy saving' ? 'Energy Saving' : 'High Sensitivity';
      case 'pump':
        return `${pumpSpeed} mL/min`;
      case 'sampling':
        return `${samplingRate} Hz`;
      default:
        return '';
    }
  };
  
  return (
    <div className="glass-card p-5">
      <h3 className="text-lg font-medium mb-4">Control Panel</h3>
      <div className="space-y-6">
        {controlOptions.map((option, index) => (
          <div 
            key={option.id}
            className={`transition-all duration-700 ease-out ${
              animationVisible[index] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="flex items-center mb-2">
              <div className="text-odar-gray-600 mr-2">{option.icon}</div>
              <div className="text-sm font-medium">{option.label}</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {option.options?.map((value) => (
                <button
                  key={value}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    getValue(option.id) === value 
                      ? 'bg-odar-blue text-white shadow-sm' 
                      : 'bg-odar-gray-100 text-odar-gray-700 hover:bg-odar-gray-200'
                  }`}
                  onClick={() => getHandler(option.id)(value)}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-4 border-t border-odar-gray-200">
        <button 
          className="w-full bg-odar-gray-800 hover:bg-odar-gray-900 text-white py-2.5 rounded-md font-medium transition-colors duration-300"
        >
          Export Sensor Data
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
