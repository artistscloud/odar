
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleDollarSign, LineChart, Shield, Target, Briefcase, Building, Globe, Microscope, FlaskConical } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';

const InvestmentOpportunity = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Investment Opportunity</h2>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Current Investment Round</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-4">Series A Funding Overview</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CircleDollarSign className="h-5 w-5 text-odar-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Raising:</span> $5.5 million
                  </div>
                </li>
                <li className="flex items-start">
                  <LineChart className="h-5 w-5 text-odar-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Pre-money valuation:</span> $14.2 million
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-odar-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Equity offered:</span> 28% (fully diluted)
                  </div>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-odar-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Minimum investment:</span> $250,000
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Use of Funds</h3>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Product Development</span>
                    <span className="text-sm font-medium">42%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Sales & Marketing</span>
                    <span className="text-sm font-medium">28%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '28%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Operations & Manufacturing</span>
                    <span className="text-sm font-medium">18%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '18%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">G&A & Working Capital</span>
                    <span className="text-sm font-medium">12%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: '12%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Blue Ocean Market Opportunity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg">
              <Globe className="h-10 w-10 text-blue-600 mb-3" />
              <h3 className="text-lg font-medium mb-2">Untapped Market</h3>
              <p className="text-sm text-odar-gray-700">
                First commercial entry into advanced olfactory detection space with minimal competition and substantial barriers to entry for followers.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-lg">
              <Building className="h-10 w-10 text-emerald-600 mb-3" />
              <h3 className="text-lg font-medium mb-2">Government Contracts</h3>
              <p className="text-sm text-odar-gray-700">
                Significant potential for U.S. government and defense contracts in security, threat detection, and military applications.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-4 rounded-lg">
              <Briefcase className="h-10 w-10 text-rose-600 mb-3" />
              <h3 className="text-lg font-medium mb-2">Cross-Industry Applications</h3>
              <p className="text-sm text-odar-gray-700">
                Versatile technology with applications spanning medical diagnostics, environmental monitoring, security, and consumer products.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Testing Infrastructure Investment</CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            ISO Class 7 (Class 10,000) Clean Room Testing Chamber
          </p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="blueprint1" className="w-full">
            <TabsList className="mb-4 w-full flex justify-start overflow-x-auto">
              <TabsTrigger value="blueprint1">Main Blueprint</TabsTrigger>
              <TabsTrigger value="blueprint2">Environmental Systems</TabsTrigger>
              <TabsTrigger value="blueprint3">Simplified Layout</TabsTrigger>
            </TabsList>
            
            <TabsContent value="blueprint1" className="space-y-4">
              <div className="bg-blue-950 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/2dbefdeb-4fb9-4044-bddc-f8cf5fb2bf13.png" 
                  alt="OdAR Testing Chamber Blueprint" 
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <Microscope className="h-5 w-5 text-blue-600 mr-2" />
                  Testing Chamber Specifications
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• ISO Class 7 (Class 10,000) clean room environment</li>
                  <li>• Dimensions: 5.0m x 5.0m main chamber with 3.0m control room</li>
                  <li>• Airlock entrance separation to maintain environmental integrity</li>
                  <li>• Environmental control systems for precision testing conditions</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="blueprint2" className="space-y-4">
              <div className="bg-blue-950 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/75abafa1-1c1b-4d36-9ee5-16cab99032b7.png" 
                  alt="OdAR Testing Chamber Environmental Systems" 
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <FlaskConical className="h-5 w-5 text-green-600 mr-2" />
                  Environmental Control Systems
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Temperature control: 10°C to 40°C with 0.5°C precision</li>
                  <li>• Humidity control: 20% to 80% with 2% precision</li>
                  <li>• Gas delivery system with precise compound control</li>
                  <li>• Analytical and mapping systems for validation</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="blueprint3" className="space-y-4">
              <div className="bg-blue-950 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/c853d4a7-61c2-4f2a-a1b0-fe5d1612dcff.png" 
                  alt="OdAR Testing Chamber Simplified Layout" 
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 flex items-center">
                  <Building className="h-5 w-5 text-purple-600 mr-2" />
                  Testing Facility Benefits
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Controlled testing environment for precise product validation</li>
                  <li>• Facilitates government/military certification processes</li>
                  <li>• Enables unparalleled R&D capabilities for sensor optimization</li>
                  <li>• Allows comprehensive environmental interference testing</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Investment Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-odar-gray-600 mb-1">Security Type</h4>
                <p className="font-medium">Preferred Equity (Series A)</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-odar-gray-600 mb-1">Board Seats</h4>
                <p className="font-medium">1 seat for lead investor with minimum $2M investment</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-odar-gray-600 mb-1">Pro-rata Rights</h4>
                <p className="font-medium">Yes, for all investors</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-odar-gray-600 mb-1">Liquidation Preference</h4>
                <p className="font-medium">1x non-participating preferred</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-odar-gray-600 mb-1">Anti-dilution Protection</h4>
                <p className="font-medium">Weighted average</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Exit Strategy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium mb-2">Projected Timeline: 5-7 Years</h4>
                <p className="text-odar-gray-700">
                  OdAR has identified multiple potential exit paths to deliver strong investor returns:
                </p>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <h4 className="font-medium mb-1">Strategic Acquisition</h4>
                <p className="text-sm text-odar-gray-700">
                  Primary exit strategy via acquisition by defense contractors, industrial technology companies, environmental monitoring corporations, or industrial IoT platforms. Comparable exits have valued companies at 5-8x revenue.
                </p>
              </div>
              
              <div className="bg-green-50 p-3 rounded-lg">
                <h4 className="font-medium mb-1">Initial Public Offering</h4>
                <p className="text-sm text-odar-gray-700">
                  Secondary exit strategy through IPO, targeting $100M+ annual revenue with strong growth trajectory. Recent IoT and sensing tech IPOs have seen valuations of 8-12x revenue.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InvestmentOpportunity;
