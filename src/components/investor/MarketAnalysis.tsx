
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const MarketAnalysis = () => {
  // Sample market data
  const marketSegments = [
    { name: 'Industrial Safety & Monitoring', size: '4.8', growth: '12.6', opportunity: 'High', priority: 1 },
    { name: 'Environmental Monitoring', size: '3.2', growth: '9.8', opportunity: 'Medium', priority: 3 },
    { name: 'Smart Home Applications', size: '7.5', growth: '18.3', opportunity: 'High', priority: 2 },
    { name: 'Food Safety & Quality Control', size: '2.9', growth: '11.2', opportunity: 'Medium', priority: 4 },
    { name: 'Healthcare & Diagnostics', size: '6.3', growth: '22.5', opportunity: 'Very High', priority: 5 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Market Analysis</h2>

      <div className="grid gap-6 md:grid-cols-2 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Addressable Market</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="relative w-48 h-48 mb-4">
                <div className="absolute inset-0 rounded-full bg-blue-100"></div>
                <div className="absolute inset-[15%] rounded-full bg-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-odar-blue">$24.7B</div>
                    <div className="text-sm text-odar-gray-600">Global Market</div>
                  </div>
                </div>
              </div>
              <div className="text-center text-odar-gray-700 max-w-md">
                <p>The global olfactory sensing and detection market is expected to reach <strong>$24.7 billion</strong> by 2028, with a CAGR of 14.2% from 2023-2028.</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Competitive Landscape</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-64 w-full">
              <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
                <div className="border border-dashed border-gray-300 rounded-lg p-2 relative bg-red-50">
                  <div className="text-xs font-medium text-gray-600 absolute top-2 left-2">High Performance</div>
                  <div className="text-xs font-medium text-gray-600 absolute bottom-2 right-2">High Cost</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-red-100 p-2 rounded-full inline-block">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      </div>
                      <p className="text-xs mt-1">Enterprise Solutions</p>
                    </div>
                  </div>
                </div>
                
                <div className="border border-dashed border-gray-300 rounded-lg p-2 relative bg-yellow-50">
                  <div className="text-xs font-medium text-gray-600 absolute top-2 left-2">High Performance</div>
                  <div className="text-xs font-medium text-gray-600 absolute bottom-2 right-2">Low Cost</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-blue-100 p-2 rounded-full inline-block">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                      </div>
                      <p className="text-xs mt-1 font-bold">OdAR</p>
                    </div>
                  </div>
                </div>
                
                <div className="border border-dashed border-gray-300 rounded-lg p-2 relative bg-green-50">
                  <div className="text-xs font-medium text-gray-600 absolute top-2 left-2">Low Performance</div>
                  <div className="text-xs font-medium text-gray-600 absolute bottom-2 right-2">High Cost</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-green-100 p-1 rounded-full inline-block">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <p className="text-xs mt-1">Legacy Systems</p>
                    </div>
                  </div>
                </div>
                
                <div className="border border-dashed border-gray-300 rounded-lg p-2 relative bg-purple-50">
                  <div className="text-xs font-medium text-gray-600 absolute top-2 left-2">Low Performance</div>
                  <div className="text-xs font-medium text-gray-600 absolute bottom-2 right-2">Low Cost</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-purple-100 p-1 rounded-full inline-block">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      </div>
                      <p className="text-xs mt-1">Consumer Devices</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-full bg-gray-300"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gray-300"></div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Target Market Segments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Market Segment</TableHead>
                <TableHead className="text-right">Market Size ($B)</TableHead>
                <TableHead className="text-right">Growth Rate (%)</TableHead>
                <TableHead>Opportunity</TableHead>
                <TableHead className="text-center">Entry Priority</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {marketSegments.map((segment) => (
                <TableRow key={segment.name}>
                  <TableCell className="font-medium">{segment.name}</TableCell>
                  <TableCell className="text-right">{segment.size}</TableCell>
                  <TableCell className="text-right">{segment.growth}%</TableCell>
                  <TableCell>{segment.opportunity}</TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-center">
                      {Array(5).fill(0).map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-2 mx-0.5 rounded-full ${
                            i < segment.priority ? 'bg-odar-blue' : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketAnalysis;
