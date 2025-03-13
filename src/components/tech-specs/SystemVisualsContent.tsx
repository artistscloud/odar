
import React from 'react';
import SystemVisuals3DContent from './system-visuals/SystemVisuals3DContent';
import SystemVisualsSideContent from './system-visuals/SystemVisualsSideContent';
import SystemVisualsSpecsContent from './system-visuals/SystemVisualsSpecsContent';
import SystemVisualsActiveContent from './system-visuals/SystemVisualsActiveContent';
import SystemVisualsAssemblyContent from './system-visuals/SystemVisualsAssemblyContent';

interface SystemVisualsContentProps {
  tab: '3d' | 'side' | 'specs' | 'assembly' | 'active';
}

const SystemVisualsContent: React.FC<SystemVisualsContentProps> = ({ tab }) => {
  if (tab === '3d') {
    return <SystemVisuals3DContent />;
  }
  
  if (tab === 'side') {
    return <SystemVisualsSideContent />;
  }
  
  if (tab === 'specs') {
    return <SystemVisualsSpecsContent />;
  }
  
  if (tab === 'active') {
    return <SystemVisualsActiveContent />;
  }
  
  if (tab === 'assembly') {
    return <SystemVisualsAssemblyContent />;
  }
  
  return null;
};

export default SystemVisualsContent;
