
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

type NavItem = {
  id: string;
  label: string;
  subsections?: { id: string; label: string }[];
};

const navItems: NavItem[] = [
  {
    id: 'pump',
    label: 'Pump Mechanism',
    subsections: [
      { id: 'pump-overview', label: 'Overview' },
      { id: 'pump-mechanical', label: 'Mechanical Specs' },
      { id: 'pump-electrical', label: 'Electrical Specs' },
      { id: 'pump-performance', label: 'Performance' }
    ]
  },
  {
    id: 'ranging',
    label: 'Ranging System',
    subsections: [
      { id: 'ranging-overview', label: 'Overview' },
      { id: 'ranging-hardware', label: 'Hardware Components' },
      { id: 'ranging-software', label: 'Software' },
      { id: 'ranging-performance', label: 'Performance' }
    ]
  },
  {
    id: 'enclosure',
    label: 'Enclosure Design',
    subsections: [
      { id: 'enclosure-overview', label: 'General Specs' },
      { id: 'enclosure-construction', label: 'Construction' },
      { id: 'enclosure-features', label: 'Features' },
      { id: 'enclosure-manufacturing', label: 'Manufacturing' }
    ]
  },
  {
    id: 'microcontroller',
    label: 'Microcontroller System',
    subsections: [
      { id: 'mc-core', label: 'Core Specs' },
      { id: 'mc-pcb', label: 'PCB Design' },
      { id: 'mc-power', label: 'Power System' },
      { id: 'mc-memory', label: 'Memory Architecture' },
      { id: 'mc-software', label: 'Software Architecture' },
      { id: 'mc-peripherals', label: 'Peripherals' }
    ]
  },
  {
    id: 'sensorarray',
    label: 'Sensor Array',
    subsections: [
      { id: 'sensor-overview', label: 'Overview' },
      { id: 'sensor-configuration', label: 'Configuration' },
      { id: 'sensor-specs', label: 'Sensor Specifications' },
      { id: 'sensor-temperature', label: 'Temperature Cycling' },
      { id: 'sensor-integration', label: 'Integration' }
    ]
  }
];

const TechSpecsNav: React.FC = () => {
  const location = useLocation();
  const hash = location.hash.substring(1); // Remove # from the hash

  return (
    <div className="w-64 h-full border-r border-odar-gray-200 p-4 overflow-y-auto bg-white/50 backdrop-blur-sm">
      <h2 className="text-lg font-semibold mb-4 text-odar-gray-800">Technical Specifications</h2>
      <div className="space-y-4">
        {navItems.map((item) => (
          <div key={item.id} className="space-y-2">
            <div className="font-medium text-odar-gray-700">{item.label}</div>
            <div className="pl-3 border-l-2 border-odar-gray-200 space-y-1">
              {item.subsections?.map((subsection) => (
                <Link
                  key={subsection.id}
                  to={`/tech-specs#${subsection.id}`}
                  className={`block py-1 px-2 text-sm rounded transition-colors ${
                    hash === subsection.id 
                      ? 'bg-odar-blue text-white' 
                      : 'text-odar-gray-600 hover:bg-odar-gray-100'
                  }`}
                >
                  {subsection.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-odar-gray-200">
        <Link 
          to="/" 
          className="flex items-center justify-center py-2 px-4 rounded bg-odar-gray-100 text-odar-gray-700 hover:bg-odar-gray-200 transition-colors text-sm"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default TechSpecsNav;
