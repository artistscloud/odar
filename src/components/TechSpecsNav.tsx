
import React from 'react';
import { FileCode } from 'lucide-react';

interface Section {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface TechSpecsNavProps {
  sections: Section[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const TechSpecsNav: React.FC<TechSpecsNavProps> = ({ 
  sections, 
  activeSection, 
  onSectionChange 
}) => {
  return (
    <div className="w-full md:w-64 flex-shrink-0">
      <div className="glass-card p-4 sticky top-4">
        <h3 className="font-medium text-lg mb-3">Documentation</h3>
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => onSectionChange(section.id)}
                className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm flex items-center gap-2 ${
                  activeSection === section.id 
                    ? 'bg-odar-blue text-white' 
                    : 'hover:bg-odar-gray-100'
                }`}
              >
                {section.icon && section.icon}
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechSpecsNav;
