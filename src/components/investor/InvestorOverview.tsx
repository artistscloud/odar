
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Briefcase, TrendingUp, Shield, Globe, Blocks } from 'lucide-react';

const InvestorOverview = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">OdAR Investment Overview</h2>
      
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50">
              <Globe className="h-12 w-12 text-odar-blue mb-2" />
              <h3 className="text-lg font-semibold">Blue Ocean Market</h3>
              <p className="text-sm text-odar-gray-600 mt-2">
                First-to-market with revolutionary olfactory detection technology in an untapped space
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
              <Blocks className="h-12 w-12 text-purple-600 mb-2" />
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
                <span><strong>Blue ocean opportunity</strong> with no direct competitors in advanced olfactory sensing</span>
              </li>
              <li className="flex items-start">
                <span className="bg-odar-blue/10 text-odar-blue p-1 rounded-full mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span><strong>Multi-industry applications</strong> from medical to security to environmental monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="bg-odar-blue/10 text-odar-blue p-1 rounded-full mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span><strong>Government & defense potential</strong> for security, search & rescue, and threat detection</span>
              </li>
              <li className="flex items-start">
                <span className="bg-odar-blue/10 text-odar-blue p-1 rounded-full mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span><strong>Led by former Tesla engineer</strong> with experience in cutting-edge technology</span>
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

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Cross-Industry Applications</CardTitle>
          <CardDescription>Versatile technology with wide-ranging potential</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <Shield className="h-8 w-8 text-blue-600 mb-2" />
              <h3 className="font-semibold mb-1">Defense & Security</h3>
              <ul className="text-sm space-y-1">
                <li>• Explosive detection</li>
                <li>• Border security</li>
                <li>• Naval vessel protection</li>
              </ul>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <Award className="h-8 w-8 text-green-600 mb-2" />
              <h3 className="font-semibold mb-1">Medical & Healthcare</h3>
              <ul className="text-sm space-y-1">
                <li>• Disease detection</li>
                <li>• Patient monitoring</li>
                <li>• Medical diagnostics</li>
              </ul>
            </div>
            
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
              <Briefcase className="h-8 w-8 text-amber-600 mb-2" />
              <h3 className="font-semibold mb-1">Search & Rescue</h3>
              <ul className="text-sm space-y-1">
                <li>• Missing person location</li>
                <li>• Disaster response</li>
                <li>• Cadaver detection</li>
              </ul>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
              <Globe className="h-8 w-8 text-purple-600 mb-2" />
              <h3 className="font-semibold mb-1">Environmental</h3>
              <ul className="text-sm space-y-1">
                <li>• Air quality monitoring</li>
                <li>• Gas leak detection</li>
                <li>• Pollution tracking</li>
              </ul>
            </div>
            
            <div className="p-4 bg-rose-50 rounded-lg border border-rose-100">
              <TrendingUp className="h-8 w-8 text-rose-600 mb-2" />
              <h3 className="font-semibold mb-1">Industrial</h3>
              <ul className="text-sm space-y-1">
                <li>• Quality control</li>
                <li>• Food spoilage detection</li>
                <li>• Early fire warning systems</li>
              </ul>
            </div>
            
            <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-100">
              <Blocks className="h-8 w-8 text-cyan-600 mb-2" />
              <h3 className="font-semibold mb-1">Smart Cities</h3>
              <ul className="text-sm space-y-1">
                <li>• Infrastructure monitoring</li>
                <li>• Public safety</li>
                <li>• Emergency response</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvestorOverview;
