
import React, { useState } from 'react';
import { FileText, Download } from 'lucide-react';
import { Button } from './ui/button';

const PDFViewer: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // PDF URL (hosted on Google Drive with direct download link format)
  const pdfUrl = "https://drive.google.com/uc?export=download&id=1CJpNaWBeEWwx-X3mPW29hpodAIIiediI";
  // For embedding, we need a different URL format
  const embedUrl = "https://drive.google.com/file/d/1CJpNaWBeEWwx-X3mPW29hpodAIIiediI/preview";

  // Handle loading state
  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4 border-b pb-2">
        <div className="flex items-center gap-2">
          <FileText className="text-odar-blue h-5 w-5" />
          <h2 className="text-lg font-medium text-odar-blue">OdAR System Documentation</h2>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center gap-2"
          onClick={() => window.open(pdfUrl, '_blank')}
        >
          <Download className="h-4 w-4" />
          <span>Download</span>
        </Button>
      </div>
      
      <div className="relative flex-grow bg-gray-100 rounded-md overflow-hidden">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 border-2 border-odar-blue border-t-transparent rounded-full animate-spin"></div>
              <p className="text-sm text-odar-gray-600 mt-2">Loading PDF...</p>
            </div>
          </div>
        )}
        
        <iframe 
          src={embedUrl}
          className="w-full h-full min-h-[500px] border-0"
          onLoad={handleLoad}
          title="OdAR System Documentation"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default PDFViewer;
