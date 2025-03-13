
import React from 'react';
import SensorArrayContent from './SensorArrayContent';
import { Link } from 'react-router-dom';
import { ArrowLeftCircle } from 'lucide-react';

const SensorArraySection: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sensor Array</h2>
      <div className="mb-4">
        <Link 
          to="/tech-specs" 
          className="inline-flex items-center text-odar-blue hover:text-odar-accent transition-colors"
          onClick={(e) => {
            e.preventDefault();
            // This will navigate to the tech specs page with the visuals section active
            window.history.pushState({}, '', '/tech-specs');
            const event = new CustomEvent('navigate-to-section', { 
              detail: { section: 'visuals', tab: 'active' } 
            });
            window.dispatchEvent(event);
          }}
        >
          <ArrowLeftCircle size={18} className="mr-1" />
          <span>View Active Sampling Diagram</span>
        </Link>
      </div>
      <SensorArrayContent />
    </div>
  );
};

export default SensorArraySection;
