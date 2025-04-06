
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DeviceInterface from './DeviceInterface';
import { AlertTriangle, Info, Zap } from 'lucide-react';

const DeviceVisualizer: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">OdAR Device Interface Visualization</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
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
      
      <Card>
        <CardHeader className="bg-gradient-to-br from-teal-50 to-blue-50">
          <CardTitle className="flex items-center">
            <Zap className="h-5 w-5 text-teal-600 mr-2" />
            Enhanced Nanotubular Follicle Technology
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-medium mb-3">Multi-Metal Integration for Multi-Spectrum Sensing</h3>
              <p className="text-odar-gray-700 mb-4">
                The OdAR system employs cutting-edge nanotubular follicle technology with multi-metal integration 
                to dramatically enhance detection sensitivity, selectivity, and response time.
              </p>
              
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-md">
                  <h4 className="font-medium text-blue-800">Zone 1: Entrance Filtering</h4>
                  <ul className="list-disc list-inside text-sm mt-1">
                    <li>Au/Pt nanoparticles (5-10nm)</li>
                    <li>Ag nanowires for conductivity</li>
                    <li>Cu-doped filter membrane</li>
                  </ul>
                </div>
                
                <div className="p-3 bg-indigo-50 rounded-md">
                  <h4 className="font-medium text-indigo-800">Zone 2: Concentration Enhancement</h4>
                  <ul className="list-disc list-inside text-sm mt-1">
                    <li>ZnO/SnO2 composites</li>
                    <li>Au interdigitated networks</li>
                    <li>TiO2 photocatalytic elements</li>
                  </ul>
                </div>
                
                <div className="p-3 bg-teal-50 rounded-md">
                  <h4 className="font-medium text-teal-800">Zone 3: Detection Region</h4>
                  <ul className="list-disc list-inside text-sm mt-1">
                    <li>Ag-Cu bimetallic particles</li>
                    <li>Pt/Pd catalyst sites (2-4nm)</li>
                    <li>Fe3O4 magnetic elements</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="max-w-full rounded-lg shadow-md bg-gray-100 p-8 flex items-center justify-center">
                <div className="text-center">
                  <Zap className="h-16 w-16 text-teal-600 mx-auto mb-4" />
                  <p className="text-gray-600">Enhanced Nanotubular Follicle with Multi-Metal Integration</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeviceVisualizer;
