import React from 'react';
import { useStaggeredAnimation } from '@/utils/animation';
import { Link } from 'react-router-dom';
import { FileText, Home, ClipboardList } from 'lucide-react';
const Header: React.FC = () => {
  const [logoVisible, titleVisible] = useStaggeredAnimation(2, 200, 300);
  return <header className="w-full py-6 px-8 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-odar-blue to-odar-accent flex items-center justify-center transform transition-all duration-700 ${logoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
            <path d="M19.071 4.929C15.166 1.024 8.834 1.024 4.929 4.929C1.024 8.834 1.024 15.166 4.929 19.071C8.834 22.976 15.166 22.976 19.071 19.071C22.976 15.166 22.976 8.834 19.071 4.929ZM10 17C9.481 17 8.941 16.904 8.401 16.718C4.671 15.55 3.45 11.12 6.39 8.18C9.33 5.24 13.76 6.46 14.93 10.19C15.57 12.27 14.54 14.54 12.65 15.65C12.006 16.023 11.273 16.221 10.52 16.22C10.349 16.22 10.173 16.21 10 16.19V17Z" fill="currentColor" />
          </svg>
        </div>
        <div className={`transform transition-all duration-700 delay-100 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <h1 className="text-2xl font-medium tracking-tight">
            <img alt="OdAR System Logo" src="/lovable-uploads/99b38f1d-1de0-432b-80a9-26fcba0c6e6c.png" className="h-20 object-cover" />
          </h1>
          <div className="flex items-center">
            <span className="text-xs uppercase tracking-wider text-odar-gray-500 font-medium">OLFACTORY DETECTION & RANGING</span>
            <span className="ml-3 px-2 py-0.5 bg-odar-gray-100 rounded-full text-xs font-medium text-odar-blue">
              v1.0
            </span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex items-center glass-card px-3 py-1.5 space-x-2 hover:bg-odar-gray-100 transition-colors duration-200">
          <Home size={16} className="text-odar-gray-600" />
          <span className="text-sm font-medium">Home</span>
        </Link>
        <Link to="/processes" className="flex items-center glass-card px-3 py-1.5 space-x-2 hover:bg-odar-gray-100 transition-colors duration-200">
          <ClipboardList size={16} className="text-odar-gray-600" />
          <span className="text-sm font-medium">Processes</span>
        </Link>
        <Link to="/tech-specs" className="flex items-center glass-card px-3 py-1.5 space-x-2 hover:bg-odar-gray-100 transition-colors duration-200">
          <FileText size={16} className="text-odar-gray-600" />
          <span className="text-sm font-medium">Tech Specs</span>
        </Link>
        <div className="flex items-center glass-card px-3 py-1.5 space-x-2">
          <div className="w-2 h-2 rounded-full bg-odar-success animate-pulse"></div>
          <span className="text-sm font-medium">System Active</span>
        </div>
      </div>
    </header>;
};
export default Header;