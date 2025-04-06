
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DeviceInterface from './DeviceInterface';
import { AlertTriangle, Info } from 'lucide-react';

const DeviceVisualizer: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">OdAR Device Interface Visualization</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardTitle className="flex items-center">
              <Info className="h-5 w-5 text-blue-600 mr-2" />
              Live Detection Interface
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 flex justify-center">
            <DeviceInterface />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="bg-gradient-to-br from-amber-50 to-yellow-50">
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-amber-600 mr-2" />
              Alert & Response System
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Intuitive Alert Display</h3>
              <p className="text-odar-gray-700">
                The OdAR device features real-time alerts with color-coded warnings based on detection thresholds. 
                The system provides immediate identification of compounds with concentration levels.
              </p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-md">
              <h4 className="font-medium mb-2">Key Features:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Compound identification with confidence scoring</li>
                <li>Concentration measurement in parts per million (ppm)</li>
                <li>Directional source indication with distance estimation</li>
                <li>Automatic comparison to regulatory safety thresholds</li>
                <li>Clear safety recommendations based on detection parameters</li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-md">
              <h4 className="font-medium mb-2 text-blue-800">Navigation System:</h4>
              <p className="text-sm">
                The intuitive navigation bar provides quick access to Detection Mode, History Records, 
                System Status, and Configuration settings to meet various operational requirements.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DeviceVisualizer;
