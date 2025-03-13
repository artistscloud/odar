
import React from 'react';

const TestingChamberBlueprint: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">OdAR Testing Chamber Blueprint</h2>
        <div className="overflow-auto my-6 border-2 border-odar-gray-300 rounded-md p-4 bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 800" className="w-full">
            <path fill="#f0f5f9" d="M0 0h1000v800H0z"/>
            <text x="500" y="40" fontFamily="Arial" fontSize="28" fontWeight="bold" textAnchor="middle" fill="#333">OdAR Testing Chamber Blueprint (Revised)</text>
            <path fill="#e6f2ff" stroke="#333" strokeWidth="4" d="M100 150h800v600H100z"/>
            <path d="M200 150v600m100-600v600m100-600v600m100-600v600m100-600v600m100-600v600M100 250h800M100 350h800M100 450h800M100 550h800M100 650h800" stroke="#ccc" strokeDasharray="5,5"/>
            <path stroke="#333" strokeWidth="2" d="M100 120h800m-800-5v10m800-10v10"/>
            <text x="500" y="110" fontFamily="Arial" fontSize="20" textAnchor="middle" fill="#333">5.0m</text>
            <path stroke="#333" strokeWidth="2" d="M70 150v600m-5-600h10M65 750h10"/>
            <text x="45" y="450" fontFamily="Arial" fontSize="20" textAnchor="middle" fill="#333" transform="rotate(-90 45 450)">5.0m</text>
            <path fill="#ccc" stroke="#333" strokeWidth="3" d="M100 550h100v200H100z"/>
            <path fill="#fff" stroke="#333" strokeWidth="3" d="M200 650h100v100H200z"/>
            <path d="M100 650h100m0 100h100" stroke="#333" strokeWidth="3"/>
            <circle cx="150" cy="600" r="8" fill="#4caf50" stroke="#333" strokeWidth="2"/>
            <text x="160" y="605" fontFamily="Arial" fontSize="10" fill="#333">OPEN</text>
            <text x="150" y="590" fontFamily="Arial" fontSize="16" textAnchor="middle" fill="#333">ENTRY</text>
            <text x="150" y="610" fontFamily="Arial" fontSize="16" textAnchor="middle" fill="#333">AIRLOCK</text>
            <text x="240" y="720" fontFamily="Arial" fontSize="16" textAnchor="middle" fill="#333">DOOR</text>
            <path fill="#d4e6f1" stroke="#333" strokeWidth="2" d="M930 150h40v200h-40z"/>
            <text x="950" y="250" fontFamily="Arial" fontSize="16" textAnchor="middle" fill="#333" transform="rotate(90 950 250)">CONTROL ROOM</text>
            <path fill="#a9cce3" stroke="#333" d="M900 200h30v100h-30zm0 150h30v100h-30z"/>
            <text x="915" y="260" fontFamily="Arial" fontSize="12" textAnchor="middle" fill="#333" transform="rotate(90 915 260)">WINDOW</text>
            <path stroke="#555" strokeWidth="6" d="M150 200h700"/>
            <path fill="none" stroke="#ff6b6b" strokeWidth="2" strokeDasharray="10,5" d="M150 190h700v20H150z"/>
            <path stroke="#555" strokeWidth="5" d="M500 200v500"/>
            <circle cx="500" cy="720" r="15" fill="#e74c3c" stroke="#333" strokeWidth="2"/>
            <text x="500" y="725" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#fff">ESTOP</text>
            <path fill="#888" stroke="#333" strokeWidth="2" d="M485 450h30v60h-30z"/>
            <circle cx="500" cy="450" r="20" fill="#ff6b6b" stroke="#333" strokeWidth="2"/>
            <text x="500" y="430" fontFamily="Arial" fontSize="12" textAnchor="middle" fill="#333">POSITION: X=500cm Y=450cm Z=450cm</text>
            <text x="500" y="270" fontFamily="Arial" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#333">XYZ ROBOTIC SYSTEM</text>
            <path fill="none" stroke="#333" strokeDasharray="10,5" d="M150 197h700v6H150z"/>
            <path fill="none" stroke="#333" strokeDasharray="10,5" d="M497 200h6v500h-6z"/>
            <path fill="none" stroke="#ff6b6b" strokeDasharray="15,5" strokeWidth="2" d="M200 250h600v400H200z"/>
            <text x="500" y="670" fontFamily="Arial" fontSize="16" textAnchor="middle" fill="#ff6b6b">4m × 4m MOVEMENT AREA</text>
            <path fill="#aed6f1" stroke="#333" strokeWidth="2" d="M130 180h80v50h-80z"/>
            <text x="170" y="210" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#333">GAS</text>
            <text x="170" y="225" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#333">PANEL</text>
            <path fill="#f1c40f" stroke="#333" d="M130 230h20v20h-20z"/>
            <text x="140" y="245" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="#333">PR</text>
            <path fill="#ebf5fb" stroke="#333" strokeWidth="2" d="M120 260h100v60H120z"/>
            <text x="170" y="295" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#333">CYLINDER</text>
            <text x="170" y="310" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#333">STORAGE</text>
            <circle cx="170" r="5" fill="#2ecc71" stroke="#333"/>
            <text x="170" y="340" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="#333">QC</text>
            <circle cx="300" cy="300" r="10" fill="#aed6f1" stroke="#333" strokeWidth="2"/>
            <circle cx="400" cy="400" r="10" fill="#aed6f1" stroke="#333" strokeWidth="2"/>
            <circle cx="600" cy="300" r="10" fill="#aed6f1" stroke="#333" strokeWidth="2"/>
            <circle cx="700" cy="400" r="10" fill="#aed6f1" stroke="#333" strokeWidth="2"/>
            <circle cx="300" cy="600" r="10" fill="#aed6f1" stroke="#333" strokeWidth="2"/>
            <circle cx="600" cy="600" r="10" fill="#aed6f1" stroke="#333" strokeWidth="2"/>
            <text x="300" y="285" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">N2</text>
            <text x="400" y="385" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">CO2</text>
            <text x="600" y="285" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">O2</text>
            <text x="700" y="385" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">CH4</text>
            <text x="300" y="585" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">H2</text>
            <text x="600" y="585" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">C2H4</text>
            <path d="M210 205c40 0 60 95 90 95" stroke="#aed6f1" strokeWidth="3" fill="none"/>
            <path d="M210 205c40 0 60 195 190 195" stroke="#aed6f1" strokeWidth="3" fill="none"/>
            <path d="M210 205c140 0 240 95 390 95" stroke="#aed6f1" strokeWidth="3" fill="none"/>
            <path d="M210 205c140 0 240 195 490 195" stroke="#aed6f1" strokeWidth="3" fill="none"/>
            <path d="M210 205c40 0 40 395 90 395" stroke="#aed6f1" strokeWidth="3" fill="none"/>
            <path d="M210 205c140 0 240 395 390 395" stroke="#aed6f1" strokeWidth="3" fill="none"/>
            <text x="170" y="150" fontFamily="Arial" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#333">GAS DELIVERY</text>
            <text x="170" y="165" fontFamily="Arial" fontSize="16" textAnchor="middle" fill="#333">SYSTEM</text>
            <path fill="#d5f5e3" stroke="#333" strokeWidth="2" d="M820 180h60v120h-60z"/>
            <text x="850" y="240" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#333">HVAC</text>
            <circle cx="850" r="5" fill="#3498db" stroke="#333"/>
            <text x="850" y="210" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="#333">T:22°C</text>
            <text x="850" y="220" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="#333">H:50%</text>
            <path d="M820 210h-70v20m70 40h-70v410H250" stroke="#d5f5e3" strokeWidth="8" fill="none"/>
            <path fill="#d5f5e3" stroke="#333" d="M740 230h20v20h-20zm0 90h20v20h-20zm0 90h20v20h-20zm0 90h20v20h-20zm0 90h20v20h-20zm-90 80h20v20h-20zm-100 0h20v20h-20zm-100 0h20v20h-20zm-100 0h20v20h-20zm-100 0h20v20h-20z"/>
            <text x="850" y="170" fontFamily="Arial" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#333">ENVIRONMENTAL</text>
            <text x="850" y="185" fontFamily="Arial" fontSize="16" textAnchor="middle" fill="#333">CONTROL</text>
            <path fill="#f9e79f" stroke="#333" strokeWidth="2" d="M730 520h120v80H730z"/>
            <text x="790" y="565" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#333">DATA</text>
            <text x="790" y="580" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#333">ACQUISITION</text>
            <path fill="#f1c40f" stroke="#333" d="M730 450h60v40h-60zm60 0h60v40h-60z"/>
            <circle cx="200" cy="200" r="6" fill="#f9e79f" stroke="#333"/>
            <circle cx="200" cy="400" r="6" fill="#f9e79f" stroke="#333"/>
            <circle cx="200" cy="600" r="6" fill="#f9e79f" stroke="#333"/>
            <circle cx="400" cy="200" r="6" fill="#f9e79f" stroke="#333"/>
            <circle cx="400" cy="600" r="6" fill="#f9e79f" stroke="#333"/>
            <circle cx="600" cy="200" r="6" fill="#f9e79f" stroke="#333"/>
            <circle cx="600" cy="400" r="6" fill="#f9e79f" stroke="#333"/>
            <circle cx="600" cy="600" r="6" fill="#f9e79f" stroke="#333"/>
            <circle cx="800" cy="400" r="6" fill="#f9e79f" stroke="#333"/>
            <circle cx="800" cy="600" r="6" fill="#f9e79f" stroke="#333"/>
            <path fill="#3498db" stroke="#333" d="M730 600h20v20h-20z"/>
            <text x="740" y="615" fontFamily="Arial" fontSize="8" textAnchor="middle" fill="#333">LAN</text>
            <path d="M200 200h50v320h480" stroke="#f9e79f" strokeDasharray="5,3"/>
            <path d="M200 400h60v130h470m-530 70h70v-60h460" stroke="#f9e79f" strokeDasharray="5,3"/>
            <path d="M400 200h50v320h280m-330 80h50v-50h280" stroke="#f9e79f" strokeDasharray="5,3"/>
            <path d="M600 200h50v320h80" stroke="#f9e79f" strokeDasharray="5,3"/>
            <path d="M600 400h50v140h80m-130 60h50v-40h80m70-160v110h-70m70 90v-30h-70" stroke="#f9e79f" strokeDasharray="5,3"/>
            <text x="790" y="505" fontFamily="Arial" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#333">MONITORING</text>
            <text x="790" y="520" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#333">SYSTEM</text>
            <path fill="#edbb99" stroke="#333" strokeWidth="2" d="M480 350h40v40h-40z"/>
            <path stroke="#333" strokeWidth="2" d="M500 390v40"/>
            <circle cx="500" cy="350" r="20" fill="#edbb99" stroke="#333" strokeWidth="2"/>
            <text x="500" y="355" fontFamily="Arial" fontSize="12" textAnchor="middle" fill="#333">OdAR</text>
            <path fill="#3498db" stroke="#333" d="M480 430h20v10h-20z"/>
            <text x="490" y="440" fontFamily="Arial" fontSize="6" textAnchor="middle" fill="#333">POWER</text>
            <circle cx="300" cy="450" r="15" fill="#edbb99" stroke="#333" strokeWidth="2" strokeDasharray="5,3"/>
            <text x="300" y="450" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">Alt 1</text>
            <circle cx="700" cy="450" r="15" fill="#edbb99" stroke="#333" strokeWidth="2" strokeDasharray="5,3"/>
            <text x="700" y="450" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">Alt 2</text>
            <circle cx="500" cy="600" r="15" fill="#edbb99" stroke="#333" strokeWidth="2" strokeDasharray="5,3"/>
            <text x="500" y="600" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">Alt 3</text>
            <text x="500" y="320" fontFamily="Arial" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#333">DEVICE</text>
            <text x="500" y="335" fontFamily="Arial" fontSize="16" textAnchor="middle" fill="#333">TEST STATION</text>
            <path fill="#d7bde2" stroke="#333" strokeWidth="2" d="M375 600h50v30h-50z"/>
            <text x="400" y="620" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">PID</text>
            <path fill="#d7bde2" stroke="#333" strokeWidth="2" d="M450 600h50v30h-50z"/>
            <text x="475" y="620" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">GC</text>
            <path fill="#d7bde2" stroke="#333" strokeWidth="2" d="M525 600h50v30h-50z"/>
            <text x="550" y="620" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">MGS</text>
            <path fill="#3498db" stroke="#333" d="M375 630h10v10h-10zm75 0h10v10h-10zm75 0h10v10h-10z"/>
            <text x="475" y="575" fontFamily="Arial" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#333">REFERENCE</text>
            <text x="475" y="590" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#333">INSTRUMENTS</text>
            <path fill="#f8c471" stroke="#333" strokeWidth="2" d="M300 220h50v80h-50z"/>
            <text x="325" y="265" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">WOOD</text>
            <path fill="#aab7b8" stroke="#333" strokeWidth="2" d="M370 220h50v80h-50z"/>
            <text x="395" y="265" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">METAL</text>
            <path fill="#f9e79f" stroke="#333" strokeWidth="2" d="M440 220h50v80h-50z"/>
            <text x="465" y="265" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">FABRIC</text>
            <path fill="#aed6f1" stroke="#333" strokeWidth="2" d="M510 220h50v80h-50z"/>
            <text x="535" y="265" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">GLASS</text>
            <path stroke="#333" strokeDasharray="5,5" d="M300 300h260"/>
            <path stroke="#333" strokeWidth="2" d="M300 300v10m260-10v10"/>
            <text x="430" y="315" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">2.6m</text>
            <text x="400" y="205" fontFamily="Arial" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#333">RANGING</text>
            <text x="400" y="220" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#333">CALIBRATION TARGETS</text>
            <path fill="#ff9800" stroke="#333" strokeWidth="2" d="M620 220h40v40h-40z"/>
            <text x="640" y="245" fontFamily="Arial" fontSize="12" textAnchor="middle" fill="#333">PUMP</text>
            <text x="640" y="260" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">FLOW: 1.5L/min</text>
            <path d="M620 240c-40 0-70 80-120 110" stroke="#ff9800" strokeWidth="2" fill="none" strokeDasharray="5,3"/>
            <text x="640" y="205" fontFamily="Arial" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#333">MICRO</text>
            <text x="640" y="220" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#333">PUMP</text>
            <circle cx="160" r="15" fill="#e74c3c" stroke="#333" strokeWidth="2"/>
            <text x="160" y="705" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#fff">ESTOP</text>
            <circle cx="260" r="15" fill="#e74c3c" stroke="#333" strokeWidth="2"/>
            <text x="260" y="705" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#fff">ESTOP</text>
            <path fill="#e74c3c" stroke="#333" strokeWidth="2" d="M850 350h30v50h-30z"/>
            <text x="865" y="380" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#fff" transform="rotate(90 865 380)">FIRE SUPP.</text>
            <circle cx="850" r="15" fill="#f1c40f" stroke="#333" strokeWidth="2"/>
            <text x="850" y="705" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#333">GAS</text>
            <circle cx="750" r="15" fill="#f39c12" stroke="#333" strokeWidth="2"/>
            <text x="750" y="705" fontFamily="Arial" fontSize="10" fontWeight="bold" textAnchor="middle" fill="#333">LIGHT</text>
            <rect x="100" y="760" width="800" height="30" fill="#f0f5f9" stroke="#333" rx="5" ry="5"/>
            <path fill="#aed6f1" stroke="#333" d="M120 765h20v20h-20z"/>
            <text x="150" y="780" fontFamily="Arial" fontSize="12" fill="#333">Gas Delivery</text>
            <path fill="#d5f5e3" stroke="#333" d="M220 765h20v20h-20z"/>
            <text x="250" y="780" fontFamily="Arial" fontSize="12" fill="#333">Environmental</text>
            <path fill="#f9e79f" stroke="#333" d="M350 765h20v20h-20z"/>
            <text x="380" y="780" fontFamily="Arial" fontSize="12" fill="#333">Monitoring</text>
            <path fill="#edbb99" stroke="#333" d="M470 765h20v20h-20z"/>
            <text x="500" y="780" fontFamily="Arial" fontSize="12" fill="#333">Test Stations</text>
            <path fill="#d7bde2" stroke="#333" d="M590 765h20v20h-20z"/>
            <text x="620" y="780" fontFamily="Arial" fontSize="12" fill="#333">Reference Instruments</text>
            <path fill="#f8c471" stroke="#333" d="M760 765h20v20h-20z"/>
            <text x="790" y="780" fontFamily="Arial" fontSize="12" fill="#333">Calibration Targets</text>
          </svg>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-3">OdAR Testing Chamber Specifications</h3>
      
      <section className="mb-6">
        <h4 className="text-lg font-medium mb-2">Chamber Dimensions</h4>
        <ul className="list-disc pl-5 space-y-1 text-odar-gray-700">
          <li><strong>Overall Size</strong>: 5.0m x 5.0m x 5.0m (W x D x H)</li>
          <li><strong>Testing Area</strong>: 4.0m x 4.0m (central workspace)</li>
          <li><strong>Movement Area</strong>: 4.0m x 4.0m (for robotic positioning system)</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h4 className="text-lg font-medium mb-2">Systems and Components</h4>
        
        <div className="mb-4">
          <h5 className="font-medium mb-1">Gas Delivery System</h5>
          <ul className="list-disc pl-5 space-y-1 text-odar-gray-700">
            <li><strong>Gas Panel</strong>: Central control panel with pressure regulators and flow meters</li>
            <li><strong>Cylinder Storage</strong>: Secure area for gas cylinders</li>
            <li><strong>Delivery Points</strong>: Multiple labeled points throughout the chamber</li>
            <li><strong>Quick-Connect Fittings</strong>: For easy setup and connection</li>
            <li><strong>Gases Supported</strong>: N2, CO2, O2, CH4, H2, C2H4</li>
          </ul>
        </div>
        
        <div className="mb-4">
          <h5 className="font-medium mb-1">Environmental Control System</h5>
          <ul className="list-disc pl-5 space-y-1 text-odar-gray-700">
            <li><strong>HVAC Unit</strong>: Temperature and humidity control</li>
            <li><strong>Air Ducts</strong>: Distribution system throughout the chamber</li>
            <li><strong>Air Vents</strong>: Multiple vents for climate control</li>
            <li><strong>Sensors</strong>: Temperature and humidity monitoring at multiple locations</li>
          </ul>
        </div>
        
        <div className="mb-4">
          <h5 className="font-medium mb-1">Data Acquisition and Monitoring System</h5>
          <ul className="list-disc pl-5 space-y-1 text-odar-gray-700">
            <li><strong>Main Workstation</strong>: Central monitoring station with multiple displays</li>
            <li><strong>Sensor Network</strong>: Distributed sensors throughout the chamber</li>
            <li><strong>Network Connectivity</strong>: LAN connections for remote monitoring</li>
            <li><strong>Data Logging</strong>: Automated data collection capabilities</li>
          </ul>
        </div>
        
        <div className="mb-4">
          <h5 className="font-medium mb-1">Robotic Positioning System</h5>
          <ul className="list-disc pl-5 space-y-1 text-odar-gray-700">
            <li><strong>XYZ Robotic System</strong>: 3-axis positioning with 4.0m x 4.0m movement area</li>
            <li><strong>Safety Curtains</strong>: Protective barriers around the robotic area</li>
            <li><strong>Emergency Stop Buttons</strong>: Multiple access points for immediate shutdown</li>
            <li><strong>Position Indicators</strong>: Real-time display of robotic position</li>
          </ul>
        </div>
        
        <div className="mb-4">
          <h5 className="font-medium mb-1">Emergency Systems</h5>
          <ul className="list-disc pl-5 space-y-1 text-odar-gray-700">
            <li><strong>Emergency Stop Buttons</strong>: Multiple locations throughout the chamber</li>
            <li><strong>Fire Suppression System</strong>: Integrated safety feature</li>
            <li><strong>Gas Detection System</strong>: Monitors for hazardous gas leaks</li>
            <li><strong>Emergency Lighting</strong>: Provides illumination during power failures</li>
          </ul>
        </div>
        
        <div className="mb-4">
          <h5 className="font-medium mb-1">Testing Stations</h5>
          <ul className="list-disc pl-5 space-y-1 text-odar-gray-700">
            <li><strong>Main Test Station</strong>: Central position for OdAR device testing</li>
            <li><strong>Alternative Test Positions</strong>: Multiple locations for flexible testing</li>
            <li><strong>Power and Data Connections</strong>: At each testing position</li>
          </ul>
        </div>
        
        <div className="mb-4">
          <h5 className="font-medium mb-1">Reference Instruments</h5>
          <ul className="list-disc pl-5 space-y-1 text-odar-gray-700">
            <li><strong>PID Monitor</strong>: Photoionization detector</li>
            <li><strong>GC</strong>: Gas chromatograph</li>
            <li><strong>MGS</strong>: Multi-gas analyzer</li>
            <li><strong>Power Connections</strong>: For each instrument</li>
          </ul>
        </div>
        
        <div className="mb-4">
          <h5 className="font-medium mb-1">Ranging Calibration Area</h5>
          <ul className="list-disc pl-5 space-y-1 text-odar-gray-700">
            <li><strong>Calibration Targets</strong>: Multiple materials (wood, metal, fabric, glass)</li>
            <li><strong>Measurement Markings</strong>: For precise distance verification</li>
            <li><strong>Adjustable Stands</strong>: For different height configurations</li>
          </ul>
        </div>
        
        <div className="mb-4">
          <h5 className="font-medium mb-1">Entry Airlock System</h5>
          <ul className="list-disc pl-5 space-y-1 text-odar-gray-700">
            <li><strong>Airlock Door</strong>: With status indicators (open/closed/locked)</li>
            <li><strong>Pressure Equalization</strong>: For smooth operation</li>
            <li><strong>Safety Interlocks</strong>: Prevents simultaneous door opening</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-6">
        <h4 className="text-lg font-medium mb-2">Safety Features</h4>
        <ul className="list-disc pl-5 space-y-1 text-odar-gray-700">
          <li><strong>Non-slip Flooring</strong>: Throughout the chamber</li>
          <li><strong>Emergency Exits</strong>: Clearly marked evacuation routes</li>
          <li><strong>Safety Signage</strong>: Throughout the chamber</li>
          <li><strong>Collision Detection</strong>: For robotic system</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h4 className="text-lg font-medium mb-2">Additional Features</h4>
        <ul className="list-disc pl-5 space-y-1 text-odar-gray-700">
          <li><strong>Control Room</strong>: With observation windows and climate control</li>
          <li><strong>Storage Areas</strong>: For tools and equipment</li>
          <li><strong>Cable Management</strong>: Organized wiring throughout</li>
          <li><strong>Documentation Station</strong>: For recording test results</li>
        </ul>
      </section>
    </div>
  );
};

export default TestingChamberBlueprint;
