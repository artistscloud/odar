
import React from 'react';

const SystemVisuals3DContent: React.FC = () => {
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
            <line x1="187" y1="40" x2="187" y2="60" strokeWidth="0.5"/>
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
};

export default SystemVisuals3DContent;
