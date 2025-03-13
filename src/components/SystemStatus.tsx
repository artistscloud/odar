
import React from 'react';
import { useCountUp } from '@/utils/animation';

type StatusItemProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  status: 'normal' | 'warning' | 'error';
  delay?: number;
  additionalInfo?: string;
};

const StatusItem: React.FC<StatusItemProps> = ({ 
  title, 
  value, 
  icon, 
  status, 
  delay = 0,
  additionalInfo
}) => {
  const [visible, setVisible] = React.useState(false);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  const statusColors = {
    normal: 'bg-odar-success',
    warning: 'bg-odar-warning',
    error: 'bg-odar-error'
  };
  
  return (
    <div 
      className={`glass-card p-4 overflow-hidden transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex items-center mb-3">
        <div className="text-odar-gray-600">{icon}</div>
        <div className="ml-2 font-medium">{title}</div>
        <div className={`ml-auto h-2 w-2 rounded-full ${statusColors[status]}`}></div>
      </div>
      <div className="flex items-end">
        <div className="text-2xl font-semibold">{value}</div>
        {additionalInfo && (
          <div className="ml-2 text-sm text-odar-gray-500 mb-0.5">{additionalInfo}</div>
        )}
      </div>
    </div>
  );
};

const SystemStatus: React.FC = () => {
  const pumpFlow = useCountUp(450, 2000, 800);
  const batteryLevel = useCountUp(87, 2000, 1200);
  const ambientTemp = useCountUp(23, 2000, 1000);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatusItem 
        title="Pump Flow Rate" 
        value={pumpFlow}
        additionalInfo="mL/min"
        icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        } 
        status="normal"
        delay={200}
      />
      <StatusItem 
        title="Ranging System" 
        value="Active"
        icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H2M12 22C6.47715 22 2 17.5228 2 12M12 22C12 22 16 18 16 12C16 6 12 2 12 2M12 22C12 22 8 18 8 12C8 6 12 2 12 2M2 12C2 6.47715 6.47715 2 12 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        } 
        status="normal"
        delay={400}
      />
      <StatusItem 
        title="Battery" 
        value={batteryLevel}
        additionalInfo="%"
        icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 10H22C22.5523 10 23 10.4477 23 11V13C23 13.5523 22.5523 14 22 14H20V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 10L12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        } 
        status="normal"
        delay={600}
      />
      <StatusItem 
        title="Ambient Temperature" 
        value={ambientTemp}
        additionalInfo="°C"
        icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 14.76V3.5C14 2.12 12.88 1 11.5 1C10.12 1 9 2.12 9 3.5V14.76C7.19 15.83 6 17.81 6 20C6 23.31 8.69 26 12 26C15.31 26 18 23.31 18 20C18 17.81 16.81 15.83 14 14.76Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20C10 21.1046 10.8954 22 12 22Z" fill="currentColor"/>
          </svg>
        } 
        status="normal"
        delay={800}
      />
    </div>
  );
};

export default SystemStatus;
