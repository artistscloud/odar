
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Briefcase, TrendingUp } from 'lucide-react';

const InvestorOverview = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">OdAR Investment Overview</h2>
      
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50">
              <Award className="h-12 w-12 text-odar-blue mb-2" />
              <h3 className="text-lg font-semibold">Market Innovation Leader</h3>
              <p className="text-sm text-odar-gray-600 mt-2">
                Pioneering olfactory detection technology with proprietary sensor architecture
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-gradient-to-br from-green-50 to-teal-50">
              <TrendingUp className="h-12 w-12 text-green-600 mb-2" />
              <h3 className="text-lg font-semibold">High Growth Potential</h3>
              <p className="text-sm text-odar-gray-600 mt-2">
                Projected CAGR of 34% with expanding applications across multiple industries
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50">
              <Briefcase className="h-12 w-12 text-purple-600 mb-2" />
              <h3 className="text-lg font-semibold">IP-Protected Platform</h3>
              <p className="text-sm text-odar-gray-600 mt-2">
                7 patents pending across sensor technology, algorithms, and application methodologies
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Value Proposition</CardTitle>
            <CardDescription>Why OdAR represents a compelling investment</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-odar-gray-700">
              <li className="flex items-start">
                <span className="bg-odar-blue/10 text-odar-blue p-1 rounded-full mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span><strong>First-to-market advantage</strong> in advanced olfactory sensing</span>
              </li>
              <li className="flex items-start">
                <span className="bg-odar-blue/10 text-odar-blue p-1 rounded-full mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span><strong>Scalable technology platform</strong> across multiple vertical markets</span>
              </li>
              <li className="flex items-start">
                <span className="bg-odar-blue/10 text-odar-blue p-1 rounded-full mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span><strong>Recurring revenue model</strong> through hardware, software and data analytics</span>
              </li>
              <li className="flex items-start">
                <span className="bg-odar-blue/10 text-odar-blue p-1 rounded-full mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span><strong>Experienced leadership team</strong> with domain expertise and previous exits</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Investment Highlights</CardTitle>
            <CardDescription>Key financial and business metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-slate-50 rounded-lg">
                <p className="text-sm text-odar-gray-600">Current Valuation</p>
                <p className="text-2xl font-bold text-odar-blue">$14.2M</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <p className="text-sm text-odar-gray-600">Funding Stage</p>
                <p className="text-2xl font-bold text-odar-blue">Series A</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <p className="text-sm text-odar-gray-600">Seeking</p>
                <p className="text-2xl font-bold text-odar-blue">$5.5M</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <p className="text-sm text-odar-gray-600">5-Year Target ROI</p>
                <p className="text-2xl font-bold text-odar-blue">9.3x</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InvestorOverview;
