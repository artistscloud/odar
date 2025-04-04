
import React from 'react';

const SystemVisualsSideContent: React.FC = () => {
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
};

export default SystemVisualsSideContent;
