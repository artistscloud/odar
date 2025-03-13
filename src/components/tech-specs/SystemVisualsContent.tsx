
import React from 'react';

interface SystemVisualsContentProps {
  tab: '3d' | 'side' | 'specs' | 'assembly';
}

const SystemVisualsContent: React.FC<SystemVisualsContentProps> = ({ tab }) => {
  if (tab === '3d') {
    return (
      <>
        <div className="overflow-auto my-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="w-full max-w-3xl mx-auto">
            {/* Title */}
            <text x="400" y="30" fontFamily="Arial" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#333">OdAR System - Visual Representation</text>
            
            {/* Main Enclosure - Isometric View */}
            <g transform="translate(400, 300) scale(1.6) rotate(30) skewX(-30) translate(-120, -80)">
              {/* Front Panel with Gradient */}
              <defs>
                <linearGradient id="frontGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:"#bfddf5",stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:"#89b4d9",stopOpacity:1}} />
                </linearGradient>
              </defs>
              <rect x="20" y="20" width="200" height="120" rx="10" ry="10" fill="url(#frontGradient)" stroke="#333" strokeWidth="1.5"/>
              
              {/* Top Panel with Gradient */}
              <defs>
                <linearGradient id="topGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:"#d5e6f3",stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:"#a7c9e5",stopOpacity:1}} />
                </linearGradient>
              </defs>
              <path d="M20,20 L70,0 L270,0 L220,20 Z" fill="url(#topGradient)" stroke="#333" strokeWidth="1.5"/>
              
              {/* Side Panel with Gradient */}
              <defs>
                <linearGradient id="sideGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:"#9abcdd",stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:"#6d9bc8",stopOpacity:1}} />
                </linearGradient>
              </defs>
              <path d="M220,20 L270,0 L270,120 L220,140 Z" fill="url(#sideGradient)" stroke="#333" strokeWidth="1.5"/>
              
              {/* Display on Front Panel */}
              <rect x="80" y="40" width="70" height="35" fill="#222" stroke="#444" strokeWidth="1"/>
              <rect x="85" y="45" width="60" height="25" fill="#111" stroke="none"/>
              <text x="115" y="60" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#4FC3F7">OdAR</text>
              <text x="115" y="70" fontFamily="Arial" fontSize="6" textAnchor="middle" fill="#4FC3F7">System</text>
              
              {/* Control Buttons */}
              <circle cx="70" cy="100" r="8" fill="#444" stroke="#333" strokeWidth="1"/>
              <text x="70" y="103" fontFamily="Arial" fontSize="6" textAnchor="middle" fill="white">M</text>
              
              <circle cx="100" cy="100" r="8" fill="#444" stroke="#333" strokeWidth="1"/>
              <text x="100" y="103" fontFamily="Arial" fontSize="6" textAnchor="middle" fill="white">S</text>
              
              <circle cx="130" cy="100" r="8" fill="#444" stroke="#333" strokeWidth="1"/>
              <text x="130" y="103" fontFamily="Arial" fontSize="6" textAnchor="middle" fill="white">B</text>
              
              {/* Power LED */}
              <circle cx="45" cy="100" r="3" fill="#2f2" stroke="#090" strokeWidth="0.5"/>
              
              {/* Front Ultrasonic Sensor */}
              <circle cx="50" cy="50" r="10" fill="#e1e1e1" stroke="#333" strokeWidth="1"/>
              <circle cx="50" cy="50" r="7" fill="#aaa" stroke="#444" strokeWidth="0.5"/>
              <circle cx="50" cy="50" r="3" fill="#666" stroke="none"/>
              
              {/* USB-C Port */}
              <rect x="175" cy="105" width="15" height="8" fill="#111" stroke="#444" strokeWidth="0.5" rx="2" ry="2"/>
              
              {/* Power Switch */}
              <rect x="195" cy="100" width="10" height="5" fill="#333" stroke="#444" strokeWidth="0.5"/>
              
              {/* Olfactory Sensor Grille */}
              <rect x="170" y="40" width="20" height="20" fill="#222" stroke="#333" strokeWidth="0.5" rx="2" ry="2"/>
              <line x1="172" y1="40" x2="172" y2="60" stroke="#555" strokeWidth="0.5"/>
              <line x1="175" y1="40" x2="175" y2="60" stroke="#555" strokeWidth="0.5"/>
              <line x1="178" y1="40" x2="178" y2="60" stroke="#555" strokeWidth="0.5"/>
              <line x1="181" y1="40" x2="181" y2="60" stroke="#555" strokeWidth="0.5"/>
              <line x1="184" y1="40" x2="184" y2="60" stroke="#555" strokeWidth="0.5"/>
              <line x1="187" y1="40" x2="187" y2="60" stroke="#555" strokeWidth="0.5"/>
              <line x1="170" y1="43" x2="190" y2="43" stroke="#555" strokeWidth="0.5"/>
              <line x1="170" y1="46" x2="190" y2="46" stroke="#555" strokeWidth="0.5"/>
              <line x1="170" y1="49" x2="190" y2="49" stroke="#555" strokeWidth="0.5"/>
              <line x1="170" y1="52" x2="190" y2="52" stroke="#555" strokeWidth="0.5"/>
              <line x1="170" y1="55" x2="190" y2="55" stroke="#555" strokeWidth="0.5"/>
              <line x1="170" y1="58" x2="190" y2="58" stroke="#555" strokeWidth="0.5"/>
              
              {/* Side Ultrasonic Sensor */}
              <circle cx="240" cy="60" r="8" fill="#e1e1e1" stroke="#333" strokeWidth="1"/>
              <circle cx="240" cy="60" r="5" fill="#aaa" stroke="#444" strokeWidth="0.5"/>
              <circle cx="240" cy="60" r="2" fill="#666" stroke="none"/>
              
              {/* Top Ultrasonic Sensor */}
              <circle cx="170" cy="10" r="8" fill="#e1e1e1" stroke="#333" strokeWidth="1"/>
              <circle cx="170" cy="10" r="5" fill="#aaa" stroke="#444" strokeWidth="0.5"/>
              <circle cx="170" cy="10" r="2" fill="#666" stroke="none"/>
              
              {/* Optional ToF Sensor */}
              <rect x="210" y="10" width="30" height="15" fill="#ffcc80" stroke="#333" strokeWidth="1" rx="2" ry="2"/>
              
              {/* Dimensions */}
              <text x="120" y="150" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">100mm</text>
              <text x="15" y="80" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333" transform="rotate(90 15,80)">60mm</text>
              <text x="250" y="60" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333" transform="rotate(-90 250,60)">30mm</text>
            </g>
            
            {/* Top View */}
            <g transform="translate(180, 450)">
              <text x="70" y="-30" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#333">Top View</text>
              
              <rect x="0" y="0" width="140" height="100" fill="#d5e6f3" stroke="#333" strokeWidth="1.5" rx="5" ry="5"/>
              
              {/* Display Outline */}
              <rect x="35" y="15" width="70" height="35" fill="#222" stroke="#444" strokeWidth="1"/>
              <text x="70" y="35" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#4FC3F7">ODAR</text>
              
              {/* Buttons */}
              <circle cx="40" y="70" r="6" fill="#555" stroke="#333" strokeWidth="1"/>
              <circle cx="70" y="70" r="6" fill="#555" stroke="#333" strokeWidth="1"/>
              <circle cx="100" y="70" r="6" fill="#555" stroke="#333" strokeWidth="1"/>
              
              {/* Sensors */}
              <circle cx="20" y="20" r="8" fill="#e1e1e1" stroke="#333" strokeWidth="1"/>
              <rect x="110" y="15" width="20" height="20" fill="#222" stroke="#333" strokeWidth="0.5" rx="2" ry="2"/>
              
              <circle cx="20" y="80" r="8" fill="#e1e1e1" stroke="#333" strokeWidth="1"/>
              <circle cx="120" y="80" r="8" fill="#e1e1e1" stroke="#333" strokeWidth="1"/>
              
              {/* Dimensions */}
              <text x="70" y="110" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">100mm</text>
              <text x="-10" y="50" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333" transform="rotate(90 -10,50)">60mm</text>
            </g>
            
            {/* Front View */}
            <g transform="translate(400, 450)">
              <text x="70" y="-30" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#333">Front View</text>
              
              <rect x="0" y="0" width="140" height="100" fill="#bfddf5" stroke="#333" strokeWidth="1.5" rx="5" ry="5"/>
              
              {/* Display */}
              <rect x="35" y="15" width="70" height="35" fill="#222" stroke="#444" strokeWidth="1.5"/>
              <rect x="40" y="20" width="60" height="25" fill="#111" stroke="none"/>
              <text x="70" y="35" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#4FC3F7">ODAR</text>
              
              {/* Buttons */}
              <circle cx="40" y="70" r="6" fill="#444" stroke="#333" strokeWidth="1"/>
              <circle cx="70" y="70" r="6" fill="#444" stroke="#333" strokeWidth="1"/>
              <circle cx="100" y="70" r="6" fill="#444" stroke="#333" strokeWidth="1"/>
              
              {/* Power LED */}
              <circle cx="25" y="70" r="3" fill="#2f2" stroke="#090" strokeWidth="0.5"/>
              
              {/* Ultrasonic Sensor */}
              <circle cx="20" y="25" r="10" fill="#e1e1e1" stroke="#333" strokeWidth="1"/>
              <circle cx="20" y="25" r="7" fill="#aaa" stroke="#444" strokeWidth="0.5"/>
              <circle cx="20" y="25" r="3" fill="#666" stroke="none"/>
              
              {/* USB-C Port */}
              <rect x="115" y="70" width="15" height="8" fill="#111" stroke="#444" strokeWidth="0.5" rx="2" ry="2"/>
              
              {/* Olfactory Sensor Grille */}
              <rect x="110" y="15" width="20" height="20" fill="#222" stroke="#333" strokeWidth="0.5" rx="2" ry="2"/>
              <line x1="112" y1="15" x2="112" y2="35" stroke="#555" strokeWidth="0.5"/>
              <line x1="115" y1="15" x2="115" y2="35" stroke="#555" strokeWidth="0.5"/>
              <line x1="118" y1="15" x2="118" y2="35" stroke="#555" strokeWidth="0.5"/>
              <line x1="121" y1="15" x2="121" y2="35" stroke="#555" strokeWidth="0.5"/>
              <line x1="124" y1="15" x2="124" y2="35" stroke="#555" strokeWidth="0.5"/>
              <line x1="127" y1="15" x2="127" y2="35" stroke="#555" strokeWidth="0.5"/>
              <line x1="110" y1="18" x2="130" y2="18" stroke="#555" strokeWidth="0.5"/>
              <line x1="110" y1="21" x2="130" y2="21" stroke="#555" strokeWidth="0.5"/>
              <line x1="110" y1="24" x2="130" y2="24" stroke="#555" strokeWidth="0.5"/>
              <line x1="110" y1="27" x2="130" y2="27" stroke="#555" strokeWidth="0.5"/>
              <line x1="110" y1="30" x2="130" y2="30" stroke="#555" strokeWidth="0.5"/>
              <line x1="110" y1="33" x2="130" y2="33" stroke="#555" strokeWidth="0.5"/>
              
              {/* Dimensions */}
              <text x="70" y="110" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">100mm</text>
              <text x="-10" y="50" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333" transform="rotate(90 -10,50)">60mm</text>
            </g>
            
            {/* Side View */}
            <g transform="translate(620, 450)">
              <text x="50" y="-30" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="#333">Side View</text>
              
              <rect x="0" y="0" width="100" height="100" fill="#9abcdd" stroke="#333" strokeWidth="1.5" rx="5" ry="5"/>
              
              {/* Battery Compartment */}
              <rect x="20" y="20" width="60" height="60" fill="#a7c9e5" stroke="#333" strokeWidth="1" rx="3" ry="3"/>
              
              {/* Side Ultrasonic Sensor */}
              <circle cx="25" y="25" r="8" fill="#e1e1e1" stroke="#333" strokeWidth="1"/>
              <circle cx="25" y="25" r="5" fill="#aaa" stroke="#444" strokeWidth="0.5"/>
              <circle cx="25" y="25" r="2" fill="#666" stroke="none"/>
              
              {/* Dimensions */}
              <text x="50" y="110" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333">100mm</text>
              <text x="-10" y="50" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333" transform="rotate(90 -10,50)">60mm</text>
              <text x="110" y="50" fontFamily="Arial" fontSize="10" textAnchor="middle" fill="#333" transform="rotate(-90 110,50)">30mm</text>
            </g>
            
            {/* Legend */}
            <rect x="150" y="570" width="500" height="20" fill="none" stroke="none"/>
            <text x="400" y="585" fontFamily="Arial" fontSize="14" textAnchor="middle" fill="#333">Dimensions: 100mm × 60mm × 30mm | IP65 Rated | Polycarbonate</text>
          </svg>
        </div>
        
        <div className="mt-6 text-odar-gray-700">
          <h4 className="text-lg font-medium mb-2">Diagram Legend</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Isometric View</strong>: 3D representation showing all major components and features</li>
            <li><strong>Top View</strong>: Display, buttons, and sensor placement from above</li>
            <li><strong>Front View</strong>: User interface elements including display, buttons, and sensors</li>
            <li><strong>Side View</strong>: Profile showing the 30mm depth and battery compartment</li>
            <li><strong>Control Buttons</strong>: M (Mode), S (Select), B (Back) for user interface navigation</li>
            <li><strong>Sensors</strong>: Ultrasonic ranging sensors on three sides for 360° spatial awareness</li>
            <li><strong>Olfactory Sensor Grille</strong>: Allows ambient air to reach the sensor array</li>
            <li><strong>Connection</strong>: USB-C port for data transfer and battery charging</li>
          </ul>
        </div>
      </>
    );
  }
  
  if (tab === 'side') {
    return (
      <>
        <div className="overflow-auto my-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" className="w-full max-w-3xl mx-auto">
            <text x="400" y="30" fontFamily="Arial" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#333">OdAR System - Side View</text>
            
            <rect x="200" y="200" width="400" height="200" fill="#9abcdd" stroke="#333" strokeWidth="2" rx="10" ry="10"/>
            
            <line x1="180" y1="200" x2="180" y2="400" stroke="#333" strokeWidth="1.5"/>
            <line x1="175" y1="200" x2="185" y2="200" stroke="#333" strokeWidth="1.5"/>
            <line x1="175" y1="400" x2="185" y2="400" stroke="#333" strokeWidth="1.5"/>
            <text x="150" y="300" fontFamily="Arial" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#333" transform="rotate(270 150,300)">30mm</text>
            
            <text x="400" y="180" fontFamily="Arial" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#333">IP65 Rubber Gasket Sealing</text>
            
            <text x="520" y="150" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="start" fill="#333">Weight: ~210g</text>
            <text x="520" y="170" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="start" fill="#333">Material: Polycarbonate</text>
            
            <rect x="240" y="225" width="30" height="30" fill="#222" stroke="#333" strokeWidth="1" rx="2" ry="2"/>
            <line x1="245" y1="225" x2="245" y2="255" stroke="#555" strokeWidth="0.5"/>
            <line x1="250" y1="225" x2="250" y2="255" stroke="#555" strokeWidth="0.5"/>
            <line x1="255" y1="225" x2="255" y2="255" stroke="#555" strokeWidth="0.5"/>
            <line x1="260" y1="225" x2="260" y2="255" stroke="#555" strokeWidth="0.5"/>
            <line x1="265" y1="225" x2="265" y2="255" stroke="#555" strokeWidth="0.5"/>
            <line x1="240" y1="230" x2="270" y2="230" stroke="#555" strokeWidth="0.5"/>
            <line x1="240" y1="235" x2="270" y2="235" stroke="#555" strokeWidth="0.5"/>
            <line x1="240" y1="240" x2="270" y2="240" stroke="#555" strokeWidth="0.5"/>
            <line x1="240" y1="245" x2="270" y2="245" stroke="#555" strokeWidth="0.5"/>
            <line x1="240" y1="250" x2="270" y2="250" stroke="#555" strokeWidth="0.5"/>
            <text x="255" y="210" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#333">MOS/CP Sensors</text>
            
            <rect x="220" y="270" width="5" height="35" fill="#222" stroke="#444" strokeWidth="1"/>
            <text x="230" y="290" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="start" fill="#333">OLED</text>
            
            <circle cx="270" cy="370" r="15" fill="#e1e1e1" stroke="#333" strokeWidth="1.5"/>
            <circle cx="270" cy="370" r="10" fill="#aaa" stroke="#444" strokeWidth="0.5"/>
            <circle cx="270" cy="370" r="5" fill="#666" stroke="none"/>
            <text x="270" y="410" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#333">HC-SR04 #2</text>
            
            <rect x="300" y="240" width="100" height="100" fill="#a7c9e5" stroke="#333" strokeWidth="1.5" rx="3" ry="3"/>
            <rect x="310" y="250" width="80" height="80" fill="#96b8d4" stroke="#555" strokeWidth="0.5" rx="2" ry="2"/>
            <text x="250" y="250" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="end" fill="#333">3.7V Li-Ion</text>
            <text x="250" y="270" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="end" fill="#333">Battery</text>
            <text x="250" y="290" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="end" fill="#333">(3000mAh)</text>
            
            <rect x="320" y="370" width="60" height="10" fill="#777" stroke="#555" strokeWidth="1.5" rx="2" ry="2"/>
            <text x="350" y="395" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#333">Battery Access Door</text>
            
            <rect x="450" y="240" width="70" height="70" fill="none" stroke="#0277bd" strokeWidth="2" rx="5" ry="5"/>
            <text x="485" y="225" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#333">Temperature</text>
            <text x="485" y="245" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#333">Control System</text>
            <text x="485" y="265" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#333">(10-40°C)</text>
            
            <rect x="530" y="240" width="30" height="40" fill="#f44336" stroke="#b71c1c" strokeWidth="1.5" rx="3" ry="3"/>
            <text x="545" y="265" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="middle" fill="white">PID</text>
            
            <circle cx="545" cy="310" r="10" fill="#03A9F4" stroke="#0277bd" strokeWidth="1.5"/>
            <text x="570" y="315" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="start" fill="#333">LM35</text>
            
            <rect x="480" y="165" width="40" height="40" fill="#ff9800" stroke="#e65100" strokeWidth="2" rx="3" ry="3"/>
            <text x="500" y="185" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="middle" fill="white">PUMP</text>
            <text x="545" y="180" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="start" fill="#333">(15x15x10mm)</text>
            
            <path d="M290 240 C350 220, 400 190, 480 185" stroke="#0288d1" strokeWidth="2" fill="none" strokeDasharray="4,2"/>
            <text x="350" y="200" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#0288d1">Airflow</text>
            <path d="M465 185 L475 185 L470 180 L465 185" fill="#0288d1"/>
          </svg>
        </div>
        
        <div className="mt-6 text-odar-gray-700">
          <h4 className="text-lg font-medium mb-2">Diagram Legend</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Main Enclosure</strong>: Polycarbonate housing (100mm × 60mm × 30mm) with IP65 rating</li>
            <li><strong>Sensor Array</strong>: MOS/CP sensors positioned for optimal sample collection</li>
            <li><strong>Battery</strong>: 3.7V Li-Ion 3000mAh battery with dedicated access door</li>
            <li><strong>Ranging System</strong>: HC-SR04 ultrasonic sensors for spatial awareness</li>
            <li><strong>Temperature Control</strong>: PID controller with LM35 precision temperature sensor</li>
            <li><strong>Micropump</strong>: 15mm × 15mm × 10mm diaphragm pump with piezoelectric actuation</li>
            <li><strong>Airflow Path</strong>: Sample delivery pathway from inlet to sensor array</li>
          </ul>
        </div>
      </>
    );
  }
  
  if (tab === 'specs') {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="glass-card p-4">
            <h4 className="text-lg font-medium mb-2">Physical Specifications</h4>
            <ul className="list-disc pl-5 space-y-1 text-odar-gray-700">
              <li><strong>Dimensions</strong>: 100mm × 60mm × 30mm (L × W × H)</li>
              <li><strong>Weight</strong>: 210g ±10g (fully assembled)</li>
              <li><strong>Material</strong>: Polycarbonate with UV-resistant coating</li>
              <li><strong>Environmental Rating</strong>: IP65 (dust-tight, water-resistant)</li>
              <li><strong>Operating Temperature</strong>: -10°C to +50°C</li>
            </ul>
          </div>
          
          <div className="glass-card p-4">
            <h4 className="text-lg font-medium mb-2">System Integration</h4>
            <ul className="list-disc pl-5 space-y-1 text-odar-gray-700">
              <li><strong>Power</strong>: 3.7V Li-Ion battery (3000mAh)</li>
              <li><strong>Sensor Array</strong>: 8 sensors (MOS and CP technologies)</li>
              <li><strong>Ranging</strong>: Ultrasonic sensors with 0.2m to 4.0m range</li>
              <li><strong>Temperature Control</strong>: Active 10-40°C with PID precision</li>
              <li><strong>Data Interface</strong>: USB-C and wireless (Wi-Fi/BLE)</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
  
  // Assembly Guide tab
  return (
    <>
      <div className="overflow-auto my-6">
        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 800 600" className="w-full max-w-3xl mx-auto">
          <text className="st4" transform="translate(353.2 52)"><tspan x="0" y="0" xmlSpace="preserve"> - Assembly Guide</tspan></text>
          <g>
            <rect className="st22" x="80" y="95" width="240" height="180" rx="5" ry="5"/>
            <text className="st2" transform="translate(119.1 115)"><tspan x="0" y="0">Step 1: Mount Main PCB</tspan></text>
            <rect className="st13" x="100" y="180" width="200" height="80" rx="3" ry="3"/>
            <rect x="120" y="190" width="160" height="50" rx="2" ry="2" fill="#0c7d3e" stroke="#064023"/>
            <text x="187.7" y="220" fontFamily="ArialMT, Arial" fontSize="12" fill="#fff"><tspan x="0" y="0">PCB</tspan></text>
            <circle className="st8" cx="130" cy="200" r="5"/>
            <line className="st10" x1="130" y1="200" x2="130" y2="170"/>
            <text className="st3" transform="translate(103.6 160)"><tspan x="0" y="0">M2.5 Screw</tspan></text>
            <circle className="st8" cx="270" cy="200" r="5"/>
            <line className="st10" x1="270" y1="200" x2="270" y2="170"/>
            <text className="st3" transform="translate(243.6 160)"><tspan x="0" y="0">M2.5 Screw</tspan></text>
            <circle className="st8" cx="130" cy="230" r="5"/>
            <line className="st10" x1="130" y1="230" x2="130" y2="260"/>
            <text className="st3" transform="translate(103.6 270)"><tspan x="0" y="0">M2.5 Screw</tspan></text>
            <circle className="st8" cx="270" cy="230" r="5"/>
            <line className="st10" x1="270" y1="230" x2="270" y2="260"/>
            <text className="st3" transform="translate(243.6 270)"><tspan x="0" y="0">M2.5 Screw</tspan></text>
          </g>
          <g>
            <rect className="st22" x="480" y="95" width="240" height="180" rx="5" ry="5"/>
            <text className="st2" transform="translate(503.7 115)"><tspan x="0" y="0">Step 2: Attach Sensor Arrays</tspan></text>
            <rect className="st17" x="500" y="180" width="200" height="80" rx="3" ry="3"/>
            <circle className="st15" cx="540" cy="200" r="15"/>
            <circle className="st21" cx="540" cy="200" r="10"/>
            <line className="st10" x1="540" y1="200" x2="540" y2="170"/>
            <text className="st3" transform="translate(511.7 160)"><tspan x="0" y="0">HC-SR04 #1</tspan></text>
            <rect className="st14" x="640" y="190" width="30" height="30" rx="2" ry="2"/>
            <line className="st10" x1="655" y1="190" x2="655" y2="170"/>
            <text className="st3" transform="translate(615.3 160)"><tspan x="0" y="0">Olfactory Sensors</tspan></text>
            <rect className="st13" x="500" y="245" width="80" height="30"/>
            <circle className="st15" cx="540" cy="260" r="10"/>
            <text className="st3" transform="translate(580 265)"><tspan x="0" y="0">Side Sensors</tspan></text>
          </g>
          <g>
            <rect className="st22" x="80" y="295" width="240" height="180" rx="5" ry="5"/>
            <text className="st2" transform="translate(120.7 315)"><tspan x="0" y="0">Step 3: Connect Battery</tspan></text>
            <rect className="st13" x="100" y="380" width="200" height="80" rx="3" ry="3"/>
            <rect x="120" y="390" width="160" height="50" rx="8" ry="8" fill="#607d8b" stroke="#455a64"/>
            <text x="150.3" y="420" fontFamily="ArialMT, Arial" fontSize="12" fill="#fff"><tspan x="0" y="0">3.7V Li-Ion Battery</tspan></text>
            <rect className="st18" x="180" y="390" width="10" height="20"/>
            <line className="st10" x1="185" y1="390" x2="185" y2="360"/>
            <text className="st3" transform="translate(144.7 350)"><tspan x="0" y="0">Battery Connector</tspan></text>
            <rect x="120" y="360" width="30" height="20" fill="#607d8b" stroke="#455a64"/>
            <text x="126.3" y="374" fontFamily="ArialMT, Arial" fontSize="8" fill="#fff"><tspan x="0" y="0">BMS</tspan></text>
            <line className="st11" x1="180" y1="400" x2="135" y2="370"/>
          </g>
          <g>
            <rect className="st22" x="480" y="295" width="240" height="180" rx="5" ry="5"/>
            <text className="st2" transform="translate(523.6 315)"><tspan x="0" y="0">Step 4: Final Assembly</tspan></text>
            <path className="st16" d="M510,385l70-30h100l-70,30h-100Z"/>
            <text className="st3" transform="translate(572.8 345)"><tspan x="0" y="0">Top Panel</tspan></text>
            <path className="st17" d="M510,385v60h100v-60h-100Z"/>
            <text className="st3" transform="translate(468.3 415)"><tspan x="0" y="0">Front</tspan></text>
            <path className="st13" d="M610,385l70-30v60l-70,30v-60Z"/>
            <text className="st3" transform="translate(680 415)"><tspan x="0" y="0">Side</tspan></text>
            <path className="st12" d="M515,387l65-27h95l-65,27h-95Z"/>
            <text className="st3" transform="translate(591.4 370)"><tspan x="0" y="0">Rubber Gasket</tspan></text>
          </g>
          <rect x="40" y="480" width="720" height="100" rx="5" ry="5" fill="#f9f9f9" fillOpacity=".8" stroke="#ddd" strokeWidth=".5"/>
          <text x="323.5" y="500" fontFamily="Arial-BoldMT, Arial" fontSize="16" fontWeight="700" fill="#333"><tspan x="0" y="0">Assembly Parts List</tspan></text>
          <text x="60" y="525" fontFamily="ArialMT, Arial" fontSize="12" fill="#333"><tspan x="0" y="0">• 1x Main PCB with ESP32-WROOM-32E</tspan></text>
          <text x="60" y="550" fontFamily="ArialMT, Arial" fontSize="12" fill="#333"><tspan x="0" y="0">• 1x Olfactory Sensor Array (8 sensors)</tspan></text>
          <text x="60" y="575" fontFamily="ArialMT, Arial" fontSize="12" fill="#333"><tspan x="0" y="0">• 3x HC-SR04 Ultrasonic Sensors</tspan></text>
          <text x="320" y="525" fontFamily="ArialMT, Arial" fontSize="12" fill="#333"><tspan x="0" y="0">• 1x 3.7V Li-Ion Battery (3000mAh)</tspan></text>
          <text x="320" y="550" fontFamily="ArialMT, Arial" fontSize="12" fill="#333"><tspan x="0" y="0">• 1x IP65 Polycarbonate Enclosure</tspan></text>
          <text x="320" y="575" fontFamily="ArialMT, Arial" fontSize="12" fill="#333"><tspan x="0" y="0">• 1x 0.96" OLED Display</tspan></text>
          <text x="580" y="525" fontFamily="ArialMT, Arial" fontSize="12" fill="#333"><tspan x="0" y="0">• 8x M2.5 Mounting Screws</tspan></text>
          <text x="580" y="550" fontFamily="ArialMT, Arial" fontSize="12" fill="#333"><tspan x="0" y="0">• 1x Rubber Gasket Seal</tspan></text>
          <text x="580" y="575" fontFamily="ArialMT, Arial" fontSize="12" fill="#333"><tspan x="0" y="0">• 3x Control Buttons</tspan></text>
          <rect x="40" y="440" width="720" height="30" rx="5" ry="5" fill="#e8f5e9" fillOpacity=".7" stroke="#2e7d32" strokeWidth=".5"/>
          <text x="42.6" y="460" fontFamily="ArialMT, Arial" fontSize="12" fill="#333"><tspan x="0" y="0">Note: Ensure temperature control system is calibrated before final assembly. Apply silicone to sensor connections for added protection.</tspan></text>
        </svg>
      </div>
      
      <div className="mt-6 text-odar-gray-700">
        <h4 className="text-lg font-medium mb-2">Assembly Instructions</h4>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Step 1</strong>: Mount the main PCB with ESP32 microcontroller to the enclosure base using the four M2.5 screws.</li>
          <li><strong>Step 2</strong>: Attach the ultrasonic sensors to the designated mounting points on the front, side, and top panels.</li>
          <li><strong>Step 3</strong>: Connect the battery to the BMS (Battery Management System) and secure it in the battery compartment.</li>
          <li><strong>Step 4</strong>: Install the rubber gasket around the edge of the enclosure before final assembly to ensure IP65 sealing.</li>
          <li><strong>Step 5</strong>: Before closing the enclosure, verify all internal connections and perform a basic power-on test.</li>
        </ol>
      </div>
    </>
  );
};

export default SystemVisualsContent;
