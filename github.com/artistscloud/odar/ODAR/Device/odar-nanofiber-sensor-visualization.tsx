import React, { useState } from 'react';
import { Info, Layers, Focus, Zap } from 'lucide-react';

const NanoFiberSensorVisualization = () => {
  const [activeView, setActiveView] = useState('structure');

  const renderSensorStructure = () => (
    <div className="relative w-full h-96 flex items-center justify-center">
      <div className="absolute w-64 h-64 border-4 border-blue-500 rounded-full flex items-center justify-center">
        <div className="absolute w-48 h-48 border-2 border-green-500 rounded-full">
          <div className="absolute w-32 h-32 border-2 border-red-500 rounded-full inset-1/4">
            <div className="absolute inset-0 bg-purple-200 opacity-50 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="absolute text-center">
        <h3 className="text-xl font-bold">Tubular Nanofiber Sensor Structure</h3>
        <p className="text-sm text-gray-600">Multi-layered detection zones</p>
      </div>
    </div>
  );

  const renderPerformanceEnhancement = () => (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="bg-blue-100 p-4 rounded-lg">
        <Zap className="w-12 h-12 text-blue-600 mb-4" />
        <h4 className="font-bold mb-2">Sensitivity Improvement</h4>
        <ul className="list-disc list-inside text-sm">
          <li>500-1000% increased surface area</li>
          <li>Lower detection thresholds</li>
          <li>Sub-ppb level detection potential</li>
        </ul>
      </div>
      <div className="bg-green-100 p-4 rounded-lg">
        <Layers className="w-12 h-12 text-green-600 mb-4" />
        <h4 className="font-bold mb-2">Selectivity Enhancement</h4>
        <ul className="list-disc list-inside text-sm">
          <li>Sequential detection zones</li>
          <li>30-40% improved compound discrimination</li>
          <li>Reduced cross-sensitivity</li>
        </ul>
      </div>
    </div>
  );

  const renderDetectionZones = () => (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-xl bg-gray-100 rounded-lg p-4 mb-4">
        <h3 className="text-xl font-bold mb-4">Tubular Detection Zones</h3>
        <div className="flex justify-between">
          <div className="w-1/3 text-center">
            <div className="h-24 w-24 mx-auto bg-blue-300 rounded-full mb-2"></div>
            <h4 className="font-semibold">Entrance Zone</h4>
            <p className="text-sm">Initial filtering</p>
          </div>
          <div className="w-1/3 text-center">
            <div className="h-24 w-24 mx-auto bg-green-300 rounded-full mb-2"></div>
            <h4 className="font-semibold">Mid Tube Region</h4>
            <p className="text-sm">Secondary interaction</p>
          </div>
          <div className="w-1/3 text-center">
            <div className="h-24 w-24 mx-auto bg-red-300 rounded-full mb-2"></div>
            <h4 className="font-semibold">Inner Detection Zone</h4>
            <p className="text-sm">Final identification</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderImplementationDetails = () => (
    <div className="p-4">
      <div className="bg-gray-100 rounded-lg p-4">
        <h3 className="text-xl font-bold mb-4">Implementation Approaches</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-3 rounded-lg shadow-md">
            <h4 className="font-semibold mb-2">Direct Fabrication</h4>
            <p className="text-sm">
              Electrospinning nanofibers directly onto existing sensor substrate
            </p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-md">
            <h4 className="font-semibold mb-2">Modular Overlay</h4>
            <p className="text-sm">
              Separately fabricated nanofiber arrays with modular attachment
            </p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-md">
            <h4 className="font-semibold mb-2">Hybrid Integration</h4>
            <p className="text-sm">
              Combination of direct fabrication and modular components
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const viewOptions = [
    { 
      value: 'structure', 
      label: 'Sensor Structure', 
      icon: <Focus className="w-5 h-5" /> 
    },
    { 
      value: 'performance', 
      label: 'Performance', 
      icon: <Zap className="w-5 h-5" /> 
    },
    { 
      value: 'zones', 
      label: 'Detection Zones', 
      icon: <Layers className="w-5 h-5" /> 
    },
    { 
      value: 'implementation', 
      label: 'Implementation', 
      icon: <Info className="w-5 h-5" /> 
    }
  ];

  const renderActiveView = () => {
    switch (activeView) {
      case 'structure':
        return renderSensorStructure();
      case 'performance':
        return renderPerformanceEnhancement();
      case 'zones':
        return renderDetectionZones();
      case 'implementation':
        return renderImplementationDetails();
      default:
        return renderSensorStructure();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gray-100 p-4 flex justify-center space-x-4">
        {viewOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setActiveView(option.value)}
            className={`
              flex items-center space-x-2 px-4 py-2 rounded-md transition-all
              ${activeView === option.value 
                ? 'bg-blue-500 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-200'}
            `}
          >
            {option.icon}
            <span>{option.label}</span>
          </button>
        ))}
      </div>
      <div className="p-6">
        {renderActiveView()}
      </div>
    </div>
  );
};

export default NanoFiberSensorVisualization;