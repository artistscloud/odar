
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SystemIntroduction: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="glass-card p-6 transition-all duration-300">
      <h1 className="text-3xl font-bold text-odar-blue mb-4">OdAR System: Revolutionizing Environmental Sensing with Molecular Detection and Spatial Awareness</h1>
      
      <div className={`prose prose-lg max-w-none ${expanded ? '' : 'line-clamp-3'}`}>
        <p className="my-4">
          The Olfactory Detection and Ranging (OdAR) system represents a significant advancement in environmental sensing technology, 
          combining chemical detection capabilities with precise spatial awareness. At its core, OdAR employs an array of specialized 
          gas sensors—including Metal Oxide Semiconductor (MOS) sensors and Conducting Polymer (CP) sensors—that work in concert to 
          detect volatile compounds with remarkable sensitivity, often at parts-per-billion concentrations.
        </p>
        
        {expanded && (
          <>
            <p className="my-4">
              What truly distinguishes the OdAR system is its innovative temperature cycling methodology. Unlike conventional gas sensors 
              that operate at static temperatures, OdAR's sensors are systematically cycled through multiple temperature points (10°C to 40°C), 
              generating unique response patterns for various compounds. This temperature-dependent behavior creates multi-dimensional "fingerprints" 
              for different odors, dramatically enhancing both sensitivity and selectivity compared to traditional fixed-temperature approaches. 
              The system's PID temperature controller maintains precise thermal conditions within ±1°C, ensuring consistent and reliable 
              measurements across varying environmental conditions.
            </p>
            
            <p className="my-4">
              The integration of ultrasonic ranging technology elevates OdAR beyond mere detection to true spatial awareness. By incorporating 
              strategically positioned HC-SR04 ultrasonic sensors with triangulation algorithms, the system can pinpoint odor sources with 
              accuracy of ±10cm at distances up to 3 meters. This spatial mapping capability transforms environmental monitoring from simple 
              detection to comprehensive localization, enabling users to trace emissions to their source. For environments with challenging 
              acoustic properties, the system can be equipped with optional Time-of-Flight (ToF) sensors to further enhance precision and reliability.
            </p>
            
            <p className="my-4">
              Advanced machine learning algorithms form the analytical foundation of the OdAR system, processing multi-dimensional data that 
              combines temperature-cycled sensor responses with spatial information. This integration creates powerful detection and classification 
              capabilities that conventional systems cannot match. Neural networks and support vector machines analyze these complex patterns, 
              allowing OdAR to distinguish between similar compounds and identify specific odors even in mixed environments. The system's adaptive 
              learning capabilities enable continuous improvement through model updates, allowing it to recognize new compounds and adjust to 
              changing environmental conditions over time.
            </p>
            
            <p className="my-4">
              The OdAR system's practical applications span multiple industries and environmental contexts. In industrial settings, it provides 
              early detection of hazardous gas leaks, enhancing workplace safety protocols. Environmental monitoring agencies can deploy OdAR 
              units to identify and localize pollution sources in urban or industrial zones with unprecedented precision. Quality control 
              processes in manufacturing benefit from the system's ability to detect subtle changes in production environments that might 
              affect product consistency or safety. Food and beverage industries can utilize OdAR to verify product authenticity and detect 
              contamination before products reach consumers.
            </p>
            
            <p className="my-4">
              The hardware design of the OdAR system complements its technological sophistication with practical durability. Housed in an 
              IP65-rated polycarbonate enclosure, the system withstands dust, water, and other environmental challenges while maintaining 
              operational integrity. The modular architecture allows for easy maintenance and sensor replacement, reducing downtime and 
              extending the system's useful life. Power management systems optimize the rechargeable lithium-ion battery, providing up to 
              8 hours of continuous operation in field conditions.
            </p>
            
            <p className="my-4">
              Integration capabilities further extend the OdAR system's utility in networked environments. Standard communication protocols 
              enable seamless connection with existing IoT infrastructure and environmental monitoring networks. This connectivity allows 
              for distributed sensing applications, where multiple OdAR units work in concert to create comprehensive monitoring coverage 
              across large areas. Data from these networks can be centralized for analysis, enabling pattern recognition at scales ranging 
              from individual facilities to entire urban centers.
            </p>
            
            <p className="my-4">
              This comprehensive approach to environmental sensing—combining molecular detection with spatial awareness and network integration—establishes 
              OdAR as an unparalleled solution for applications requiring both detection precision and source localization. As environmental 
              monitoring needs become increasingly sophisticated, the OdAR system's multifaceted capabilities position it at the forefront 
              of sensing technology innovation.
            </p>
          </>
        )}
      </div>
      
      <button 
        onClick={() => setExpanded(!expanded)} 
        className="flex items-center justify-center gap-2 mt-2 text-odar-blue hover:text-odar-accent transition-colors w-full"
      >
        {expanded ? (
          <>
            <span>Show Less</span>
            <ChevronUp size={18} />
          </>
        ) : (
          <>
            <span>Read More</span>
            <ChevronDown size={18} />
          </>
        )}
      </button>
    </div>
  );
};

export default SystemIntroduction;
