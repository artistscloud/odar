
import React from 'react';

const SystemVisualsAssemblyContent: React.FC = () => {
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

export default SystemVisualsAssemblyContent;
