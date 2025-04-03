
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Circle } from 'lucide-react';

const RoadmapTimeline = () => {
  const milestones = [
    {
      phase: 'Completed',
      items: [
        { title: 'Proof of Concept', date: 'Q3 2023', complete: true, highlight: true },
        { title: 'Sensor Array Design', date: 'Q4 2023', complete: true, highlight: false },
        { title: 'AI Algorithm Development', date: 'Q4 2023', complete: true, highlight: false },
        { title: 'Prototype Build & Testing', date: 'Q1 2024', complete: true, highlight: true },
        { title: 'Patent Applications Filed', date: 'Q1 2024', complete: true, highlight: false },
      ]
    },
    {
      phase: 'Current Focus',
      items: [
        { title: 'Series A Funding Round', date: 'Q2 2024', complete: false, highlight: true },
        { title: 'Expand Engineering Team', date: 'Q2 2024', complete: false, highlight: false },
        { title: 'Production Design Finalization', date: 'Q3 2024', complete: false, highlight: false },
        { title: 'Beta Testing Program', date: 'Q3 2024', complete: false, highlight: true },
      ]
    },
    {
      phase: 'Next 12 Months',
      items: [
        { title: 'Manufacturing Scale-up', date: 'Q4 2024', complete: false, highlight: false },
        { title: 'Commercial Product Launch', date: 'Q4 2024', complete: false, highlight: true },
        { title: 'Software Platform Release', date: 'Q1 2025', complete: false, highlight: false },
        { title: 'First Enterprise Deployments', date: 'Q1 2025', complete: false, highlight: true },
        { title: 'Channel Partner Program', date: 'Q2 2025', complete: false, highlight: false },
      ]
    },
    {
      phase: 'Years 2-3',
      items: [
        { title: 'International Expansion', date: '2025', complete: false, highlight: false },
        { title: 'Version 2.0 Hardware Release', date: '2025', complete: false, highlight: true },
        { title: 'Data Marketplace Launch', date: '2025', complete: false, highlight: false },
        { title: 'Series B Funding Round', date: 'Q1 2026', complete: false, highlight: true },
        { title: 'Industry-Specific Solutions', date: '2026', complete: false, highlight: false },
      ]
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Product & Company Roadmap</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>Development Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {milestones.map((phase, index) => (
              <div key={phase.phase} className="relative">
                <h3 className="text-center text-lg font-semibold mb-6 bg-gradient-to-r from-odar-blue to-blue-400 text-white py-2 rounded-md">
                  {phase.phase}
                </h3>
                
                <div className="relative">
                  {/* Vertical timeline line */}
                  <div className="absolute left-3.5 top-0 h-full w-0.5 bg-gray-200"></div>
                  
                  <div className="space-y-8">
                    {phase.items.map((item, i) => (
                      <div key={`${phase.phase}-${i}`} className="relative flex items-start">
                        {/* Timeline dot */}
                        <div className={`absolute left-0 mt-1.5 w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                          item.complete ? 'border-green-500 bg-green-50' : 
                          item.highlight ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
                        }`}>
                          {item.complete ? (
                            <Check size={16} className="text-green-500" />
                          ) : (
                            <Circle size={16} className={item.highlight ? "text-blue-500" : "text-gray-300"} />
                          )}
                        </div>
                        
                        {/* Content */}
                        <div className="ml-12">
                          <h4 className={`font-medium ${item.highlight ? 'text-odar-blue' : ''}`}>{item.title}</h4>
                          <p className="text-sm text-odar-gray-600">{item.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Key Performance Targets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium mb-2">Year 1</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-odar-blue rounded-full mr-2"></div>
                    <span>First 50 enterprise customers onboarded</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-odar-blue rounded-full mr-2"></div>
                    <span>$1.2M annual revenue run rate</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-odar-blue rounded-full mr-2"></div>
                    <span>3 industry verticals penetration</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2">Year 3</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-odar-blue rounded-full mr-2"></div>
                    <span>500+ enterprise customers</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-odar-blue rounded-full mr-2"></div>
                    <span>$8.5M annual revenue</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-odar-blue rounded-full mr-2"></div>
                    <span>International expansion to EU and APAC</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2">Year 5</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-odar-blue rounded-full mr-2"></div>
                    <span>2,000+ enterprise customers</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-odar-blue rounded-full mr-2"></div>
                    <span>$27.6M annual revenue</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-odar-blue rounded-full mr-2"></div>
                    <span>Market leadership in 3+ verticals</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Risk Mitigation Strategy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-red-50 p-3 rounded-lg">
                <h4 className="font-medium mb-1">Technical Risk</h4>
                <p className="text-sm text-odar-gray-700 mb-2">
                  Risk of sensor reliability issues in varied environments
                </p>
                <p className="text-sm text-odar-gray-700">
                  <span className="font-medium">Mitigation:</span> Extensive environmental testing program, staged deployment, redundant sensor arrays, and robust calibration algorithms
                </p>
              </div>
              
              <div className="bg-yellow-50 p-3 rounded-lg">
                <h4 className="font-medium mb-1">Market Adoption Risk</h4>
                <p className="text-sm text-odar-gray-700 mb-2">
                  Risk of slow enterprise adoption and long sales cycles
                </p>
                <p className="text-sm text-odar-gray-700">
                  <span className="font-medium">Mitigation:</span> Pilot program with early adopters, ROI-focused case studies, channel partnerships with established providers
                </p>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <h4 className="font-medium mb-1">Manufacturing Risk</h4>
                <p className="text-sm text-odar-gray-700 mb-2">
                  Risk of production delays and quality control issues
                </p>
                <p className="text-sm text-odar-gray-700">
                  <span className="font-medium">Mitigation:</span> Dual-sourcing strategy, phased manufacturing ramp-up, comprehensive QA program, strategic component inventory
                </p>
              </div>
              
              <div className="bg-green-50 p-3 rounded-lg">
                <h4 className="font-medium mb-1">Competitive Risk</h4>
                <p className="text-sm text-odar-gray-700 mb-2">
                  Risk of new entrants or existing player expansion
                </p>
                <p className="text-sm text-odar-gray-700">
                  <span className="font-medium">Mitigation:</span> Aggressive IP protection strategy, accelerated development timeline, focus on data network effects
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RoadmapTimeline;
