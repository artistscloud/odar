
import React from 'react';
import { Link } from 'react-router-dom';
import { MicroscopeIcon } from 'lucide-react';

const SystemVisualsTopContent: React.FC = () => {
  return (
    <>
      <div className="overflow-auto my-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="w-full max-w-3xl mx-auto">
          {/* Title */}
          <text x="400" y="30" fontFamily="Arial" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#333">OdAR System - Top View with Active Sampling</text>
          
          {/* Top View */}
          <g transform="translate(400, 300)">
            <text x="-200" y="-140" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#333">Top View</text>
            
            {/* Outline with Gradient */}
            <defs>
              <linearGradient id="topViewGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:"#d5e6f3",stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:"#a7c9e5",stopOpacity:1}} />
              </linearGradient>
            </defs>
            <rect x="-200" y="-120" width="200" height="120" fill="url(#topViewGradient)" stroke="#333" strokeWidth="1.5" rx="5" ry="5"/>
            
            {/* Display Outline */}
            <rect x="-135" y="-100" width="70" height="35" fill="#222" stroke="#444" strokeWidth="1"/>
            <text x="-100" y="-80" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="#4FC3F7">OdAR System</text>
            
            {/* Buttons with Labels */}
            <circle cx="-150" cy="-40" r="6" fill="#555" stroke="#333" strokeWidth="1"/>
            <text x="-150" y="-25" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="#333">MENU</text>
            
            <circle cx="-120" cy="-40" r="6" fill="#555" stroke="#333" strokeWidth="1"/>
            <text x="-120" y="-25" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="#333">SELECT</text>
            
            <circle cx="-90" cy="-40" r="6" fill="#555" stroke="#333" strokeWidth="1"/>
            <text x="-90" y="-25" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="#333">BACK</text>
            
            {/* Power LED */}
            <circle cx="-60" cy="-40" r="3" fill="#2f2" stroke="#090" strokeWidth="0.5"/>
            <text x="-60" y="-25" fontFamily="Arial" fontSize="7" textAnchor="middle" fill="#333">PWR</text>
            
            {/* Sensor Placement with Enhanced Labels */}
            {/* Front Sensors */}
            <circle cx="-170" cy="-90" r="8" fill="#e1e1e1" stroke="#333" strokeWidth="1"/>
            <circle cx="-170" cy="-90" r="5" fill="#aaa" stroke="#444" strokeWidth="0.5"/>
            <text x="-170" y="-102" fontFamily="Arial" fontSize="7" textAnchor="middle" fill="#333">HC-SR04 #1</text>
            <text x="-170" y="-78" fontFamily="Arial" fontSize="6" textAnchor="middle" fill="#333">Front</text>
            
            {/* Olfactory Sensor Array */}
            <rect x="-50" y="-95" width="20" height="20" fill="#222" stroke="#333" strokeWidth="1" rx="2" ry="2"/>
            <text x="-40" y="-85" fontFamily="Arial" fontSize="6" textAnchor="middle" fill="#fff">OSA</text>
            <text x="-40" y="-102" fontFamily="Arial" fontSize="7" textAnchor="middle" fill="#333">Olfactory</text>
            <text x="-40" y="-70" fontFamily="Arial" fontSize="6" textAnchor="middle" fill="#333">Sensor Array</text>
            
            {/* Left Side Sensor */}
            <circle cx="-170" cy="-30" r="8" fill="#e1e1e1" stroke="#333" strokeWidth="1"/>
            <circle cx="-170" cy="-30" r="5" fill="#aaa" stroke="#444" strokeWidth="0.5"/>
            <text x="-170" y="-18" fontFamily="Arial" fontSize="7" textAnchor="middle" fill="#333">HC-SR04 #2</text>
            <text x="-170" y="-10" fontFamily="Arial" fontSize="6" textAnchor="middle" fill="#333">Left Side</text>
            
            {/* Right Side Sensor */}
            <circle cx="-30" cy="-30" r="8" fill="#e1e1e1" stroke="#333" strokeWidth="1"/>
            <circle cx="-30" cy="-30" r="5" fill="#aaa" stroke="#444" strokeWidth="0.5"/>
            <text x="-30" y="-18" fontFamily="Arial" fontSize="7" textAnchor="middle" fill="#333">HC-SR04 #3</text>
            <text x="-30" y="-10" fontFamily="Arial" fontSize="6" textAnchor="middle" fill="#333">Right Side</text>
            
            {/* Optional ToF Sensor */}
            <rect x="-55" y="-60" width="30" height="15" fill="#ffcc80" stroke="#333" strokeWidth="1" rx="2" ry="2"/>
            <text x="-40" y="-50" fontFamily="Arial" fontSize="6" textAnchor="middle" fill="#333">VL53L1X</text>
            <text x="-40" y="-42" fontFamily="Arial" fontSize="5" textAnchor="middle" fill="#333">(Optional ToF)</text>
            
            {/* NEW: Pump Inlet */}
            <circle cx="-25" cy="-85" r="2.5" fill="none" stroke="#333" strokeWidth="1"/>
            <circle cx="-25" cy="-85" r="2" fill="#111" stroke="none"/>
            <text x="-25" y="-95" fontFamily="Arial" fontSize="7" textAnchor="middle" fill="#333">Inlet</text>
            
            {/* NEW: Pump Location */}
            <rect x="-20" y="-60" width="15" height="15" fill="#ff9800" stroke="#e65100" strokeWidth="1" rx="2" ry="2"/>
            <text x="-12" y="-52" fontFamily="Arial" fontSize="6" textAnchor="middle" fill="white">PUMP</text>
            <line x1="-25" y1="-85" x2="-15" y2="-60" stroke="#0288d1" strokeWidth="0.5" strokeDasharray="2,1"/>
            
            {/* NEW: Airflow Indicators */}
            <path d="M-25 -85 L-20 -70" stroke="#0288d1" strokeWidth="0.5" fill="none"/>
            <path d="M-25 -85 L-28 -82 L-22 -82 Z" fill="#0288d1"/>
            <text x="-15" y="-75" fontFamily="Arial" fontSize="7" textAnchor="start" fill="#0288d1">Airflow</text>
            
            {/* NEW: Airflow Chamber */}
            <rect x="-55" y="-95" width="30" height="30" fill="none" stroke="#0288d1" strokeWidth="0.5" strokeDasharray="2,1"/>
            
            {/* Dimensions */}
            <line x1="-210" y1="-120" x2="-210" y2="0" stroke="#333" strokeWidth="0.5"/>
            <line x1="-212" y1="-120" x2="-208" y2="-120" stroke="#333" strokeWidth="0.5"/>
            <line x1="-212" y1="0" x2="-208" y2="0" stroke="#333" strokeWidth="0.5"/>
            <text x="-215" y="-60" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="#333" transform="rotate(270 -215,-60)">60mm</text>
            
            <line x1="-200" y1="10" x2="0" y2="10" stroke="#333" strokeWidth="0.5"/>
            <line x1="-200" y1="12" x2="-200" y2="8" stroke="#333" strokeWidth="0.5"/>
            <line x1="0" y1="12" x2="0" y2="8" stroke="#333" strokeWidth="0.5"/>
            <text x="-100" y="20" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="#333">100mm</text>
            
            {/* 360° Coverage Annotation */}
            <circle cx="-100" cy="-60" r="35" fill="none" stroke="#090" strokeWidth="0.5" strokeDasharray="2,1"/>
            <text x="-100" y="-15" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="#090">360° Ranging Coverage (Up to 4m)</text>
            
            {/* NEW: Active Sampling Text */}
            <text x="-100" y="-130" fontFamily="Arial" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#0288d1">Active Sampling System</text>
          </g>
        </svg>
      </div>
      
      <div className="mt-6 text-odar-gray-700">
        <h4 className="text-lg font-medium mb-2">Top View System Features</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>360° Ranging System</strong>: Three HC-SR04 ultrasonic sensors for omnidirectional spatial awareness</li>
          <li><strong>Active Sampling</strong>: Micropump draws air through the inlet to the olfactory sensor array</li>
          <li><strong>Control Interface</strong>: Three-button system with MENU, SELECT, and BACK for user interaction</li>
          <li><strong>Sensor Integration</strong>: 
            <ul className="list-disc pl-5 mt-1">
              <li>Primary olfactory sensor array with 8 gas-specific sensors</li>
              <li>Optional VL53L1X time-of-flight sensor for enhanced proximity detection</li>
            </ul>
          </li>
          <li><strong>Compact Design</strong>: All components arranged for maximum space efficiency in 100mm × 60mm footprint</li>
        </ul>
        
        <div className="mt-6">
          <Link 
            to="/tech-specs" 
            className="inline-flex items-center text-odar-blue hover:text-odar-accent transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/tech-specs');
              const event = new CustomEvent('navigate-to-section', { detail: { section: 'pump' } });
              window.dispatchEvent(event);
            }}
          >
            <MicroscopeIcon size={18} className="mr-1" />
            <span>View Pump Mechanism Details</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SystemVisualsTopContent;
