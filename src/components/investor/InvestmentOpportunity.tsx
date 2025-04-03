
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CircleDollarSign, LineChart, Shield, Target } from 'lucide-react';

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
                  Primary exit strategy via acquisition by industrial technology companies, environmental monitoring corporations, or industrial IoT platforms. Comparable exits have valued companies at 5-8x revenue.
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
