
import React from 'react';

const DeviceInterface: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="auto" className="max-w-xl">
      {/* Device frame */}
      <rect x="0" y="0" width="400" height="300" rx="20" ry="20" fill="#2C3E50" />
      <rect x="10" y="10" width="380" height="280" rx="15" ry="15" fill="#34495E" />
      
      {/* Screen area */}
      <rect x="20" y="20" width="360" height="260" rx="5" ry="5" fill="#ECF0F1" />
      
      {/* Status bar */}
      <rect x="20" y="20" width="360" height="25" fill="#1976D2" />
      
      {/* Status icons */}
      <circle cx="350" cy="32" r="8" fill="#ECF0F1" /> {/* Battery */}
      <rect x="346" y="28" width="8" height="4" fill="#1976D2" />
      <text x="325" y="36" fontFamily="Arial" fontSize="12" fill="#ECF0F1">12:45</text>
      <circle cx="295" cy="32" r="6" fill="none" stroke="#ECF0F1" strokeWidth="2" /> {/* Wifi */}
      <path d="M295,29 L295,35 M292,32 L298,32" stroke="#ECF0F1" strokeWidth="2" /> {/* Signal */}
      
      {/* Title */}
      <text x="30" y="38" fontFamily="Arial" fontWeight="bold" fontSize="16" fill="#ECF0F1">Active Detection</text>
      
      {/* Main content area */}
      <g>
        {/* Visualization section */}
        <rect x="30" y="55" width="340" height="110" rx="5" ry="5" fill="#FFF" stroke="#BDC3C7" strokeWidth="1" />
        
        {/* Chart visualization */}
        <rect x="40" y="65" width="320" height="90" fill="#F8F9F9" />
        <text x="50" y="80" fontFamily="Arial" fontSize="12" fill="#7F8C8D">Real-time Sensor Response</text>
        
        {/* Chart elements */}
        <path d="M50,135 L50,115 L70,125 L90,110 L110,128 L130,95 L150,90 L170,80 L190,65 L210,70 L230,75 L250,83 L270,100 L290,88 L310,120 L330,125 L350,130" 
              fill="none" stroke="#E53935" strokeWidth="2" />
              
        {/* Y axis */}
        <line x1="50" y1="65" x2="50" y2="135" stroke="#BDC3C7" strokeWidth="1" />
        {/* X axis */}
        <line x1="50" y1="135" x2="350" y2="135" stroke="#BDC3C7" strokeWidth="1" />
        
        {/* Alert indicators */}
        <circle cx="170" cy="80" r="5" fill="#E53935" />
        <circle cx="190" cy="65" r="5" fill="#E53935" />
        
        {/* Threshold line */}
        <line x1="50" y1="90" x2="350" y2="90" stroke="#FFB300" strokeWidth="1" strokeDasharray="5,5" />
        <text x="55" y="88" fontFamily="Arial" fontSize="10" fill="#FFB300">Warning Threshold</text>
      </g>
      
      {/* Natural Language Display section */}
      <rect x="30" y="175" width="340" height="60" rx="5" ry="5" fill="#FFF" stroke="#BDC3C7" strokeWidth="1" />
      <rect x="30" y="175" width="340" height="22" rx="5" ry="5" fill="#E53935" />
      <text x="40" y="191" fontFamily="Arial" fontWeight="bold" fontSize="14" fill="#FFF">ALERT: Acetone Detected</text>
      
      <foreignObject x="30" y="197" width="340" height="38">
        <div style={{fontFamily: 'Arial', fontSize: '12px', color: '#2C3E50', padding: '8px', lineHeight: 1.2}}>
          <span style={{fontWeight: 'bold'}}>High level of Acetone (310ppm) detected.</span> This exceeds the 15-min exposure limit (250ppm). <span style={{color: '#E53935', fontWeight: 'bold'}}>Ventilate area immediately. Use respiratory protection.</span>
        </div>
      </foreignObject>
      
      {/* Compound Details Box */}
      <rect x="30" y="245" width="165" height="25" rx="5" ry="5" fill="#1976D2" />
      <text x="45" y="262" fontFamily="Arial" fontWeight="bold" fontSize="12" fill="#FFF">COMPOUND DETAILS</text>
      
      {/* Source Direction Box */}
      <rect x="205" y="245" width="165" height="25" rx="5" ry="5" fill="#1976D2" />
      <text x="225" y="262" fontFamily="Arial" fontWeight="bold" fontSize="12" fill="#FFF">SOURCE: 2M NORTHWEST</text>
      
      {/* Bottom navigation */}
      <rect x="20" y="255" width="360" height="25" rx="0" ry="0" fill="#34495E" />
      
      {/* Navigation icons */}
      <circle cx="70" cy="267" r="8" fill="#ECF0F1" />
      <text x="70" y="271" fontFamily="Arial" fontWeight="bold" fontSize="12" fill="#34495E" textAnchor="middle">D</text>
      
      <circle cx="150" cy="267" r="8" fill="#7F8C8D" />
      <text x="150" y="271" fontFamily="Arial" fontWeight="bold" fontSize="12" fill="#34495E" textAnchor="middle">H</text>
      
      <circle cx="230" cy="267" r="8" fill="#7F8C8D" />
      <text x="230" y="271" fontFamily="Arial" fontWeight="bold" fontSize="12" fill="#34495E" textAnchor="middle">S</text>
      
      <circle cx="310" cy="267" r="8" fill="#7F8C8D" />
      <text x="310" y="271" fontFamily="Arial" fontWeight="bold" fontSize="12" fill="#34495E" textAnchor="middle">C</text>
      
      {/* Navigation labels */}
      <text x="70" y="285" fontFamily="Arial" fontSize="8" fill="#ECF0F1" textAnchor="middle">Detect</text>
      <text x="150" y="285" fontFamily="Arial" fontSize="8" fill="#7F8C8D" textAnchor="middle">History</text>
      <text x="230" y="285" fontFamily="Arial" fontSize="8" fill="#7F8C8D" textAnchor="middle">Status</text>
      <text x="310" y="285" fontFamily="Arial" fontSize="8" fill="#7F8C8D" textAnchor="middle">Config</text>
    </svg>
  );
};

export default DeviceInterface;
