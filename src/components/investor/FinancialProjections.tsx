
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const FinancialProjections = () => {
  const [viewType, setViewType] = useState('annual');

  // Sample financial projection data
  const revenueData = [
    { year: 'Year 1', revenue: 1.2, expenses: 1.8, profit: -0.6 },
    { year: 'Year 2', revenue: 3.8, expenses: 2.9, profit: 0.9 },
    { year: 'Year 3', revenue: 8.5, expenses: 5.2, profit: 3.3 },
    { year: 'Year 4', revenue: 15.3, expenses: 8.7, profit: 6.6 },
    { year: 'Year 5', revenue: 27.6, expenses: 14.1, profit: 13.5 },
  ];

  const cashFlowData = [
    { year: 'Year 1', cashflow: -2.1, investment: 3.5, balance: 1.4 },
    { year: 'Year 2', cashflow: -0.4, investment: 0, balance: 1.0 },
    { year: 'Year 3', cashflow: 2.8, investment: 0, balance: 3.8 },
    { year: 'Year 4', cashflow: 5.9, investment: 0, balance: 9.7 },
    { year: 'Year 5', cashflow: 12.8, investment: 0, balance: 22.5 },
  ];

  const quarterlyData = [
    { quarter: 'Y1-Q1', revenue: 0.2, expenses: 0.4 },
    { quarter: 'Y1-Q2', revenue: 0.3, expenses: 0.5 },
    { quarter: 'Y1-Q3', revenue: 0.3, expenses: 0.4 },
    { quarter: 'Y1-Q4', revenue: 0.4, expenses: 0.5 },
    { quarter: 'Y2-Q1', revenue: 0.7, expenses: 0.7 },
    { quarter: 'Y2-Q2', revenue: 0.9, expenses: 0.7 },
    { quarter: 'Y2-Q3', revenue: 1.0, expenses: 0.7 },
    { quarter: 'Y2-Q4', revenue: 1.2, expenses: 0.8 },
  ];

  const metrics = [
    { name: 'Initial Investment', value: '$5.5M', description: 'Series A funding required' },
    { name: 'Break-Even Point', value: 'Year 2, Q3', description: 'Projected operational profitability' },
    { name: 'Year 5 Revenue', value: '$27.6M', description: 'Projected annual revenue' },
    { name: 'Gross Margin', value: '68%', description: 'At scale (Year 5)' },
    { name: 'EBITDA (Year 5)', value: '49%', description: 'Projected Year 5 EBITDA' },
    { name: 'ROI Multiple', value: '9.3x', description: 'Projected 5-year return' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Financial Projections</h2>
      
      <Tabs defaultValue="revenue" className="mb-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="revenue">Revenue & Profit</TabsTrigger>
          <TabsTrigger value="cashflow">Cash Flow</TabsTrigger>
          <TabsTrigger value="metrics">Key Metrics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="revenue">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Revenue & Profit Projection</CardTitle>
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => setViewType('annual')}
                    className={`px-3 py-1 text-sm rounded-md ${viewType === 'annual' ? 'bg-odar-blue text-white' : 'bg-gray-100'}`}>
                    Annual
                  </button>
                  <button 
                    onClick={() => setViewType('quarterly')}
                    className={`px-3 py-1 text-sm rounded-md ${viewType === 'quarterly' ? 'bg-odar-blue text-white' : 'bg-gray-100'}`}>
                    Quarterly
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                {viewType === 'annual' ? (
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis label={{ value: 'USD (Millions)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip formatter={(value) => [`$${value}M`]} />
                    <Legend />
                    <Bar dataKey="revenue" name="Revenue" fill="#3B82F6" />
                    <Bar dataKey="expenses" name="Expenses" fill="#EF4444" />
                    <Bar dataKey="profit" name="Net Profit" fill="#10B981" />
                  </BarChart>
                ) : (
                  <BarChart data={quarterlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="quarter" />
                    <YAxis label={{ value: 'USD (Millions)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip formatter={(value) => [`$${value}M`]} />
                    <Legend />
                    <Bar dataKey="revenue" name="Revenue" fill="#3B82F6" />
                    <Bar dataKey="expenses" name="Expenses" fill="#EF4444" />
                  </BarChart>
                )}
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="cashflow">
          <Card>
            <CardHeader>
              <CardTitle>Cash Flow Projection</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={cashFlowData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis label={{ value: 'USD (Millions)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => [`$${value}M`]} />
                  <Legend />
                  <Line type="monotone" dataKey="cashflow" name="Operating Cash Flow" stroke="#3B82F6" strokeWidth={2} />
                  <Line type="monotone" dataKey="investment" name="Investment" stroke="#8B5CF6" strokeWidth={2} />
                  <Line type="monotone" dataKey="balance" name="Cash Balance" stroke="#10B981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="metrics">
          <Card>
            <CardHeader>
              <CardTitle>Financial Key Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {metrics.map((metric) => (
                  <div key={metric.name} className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-odar-gray-600">{metric.name}</h3>
                    <p className="text-2xl font-bold text-odar-blue mt-1">{metric.value}</p>
                    <p className="text-xs text-odar-gray-500 mt-1">{metric.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Revenue Streams Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Hardware Sales</h3>
              <div className="flex items-end space-x-2">
                <div className="text-3xl font-bold text-odar-blue">58%</div>
                <div className="text-sm text-odar-gray-600 mb-1">of revenue</div>
              </div>
              <p className="text-sm text-odar-gray-600 mt-2">
                Device sales with margins of 45-60% depending on configuration
              </p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">SaaS Platform</h3>
              <div className="flex items-end space-x-2">
                <div className="text-3xl font-bold text-green-600">22%</div>
                <div className="text-sm text-odar-gray-600 mb-1">of revenue</div>
              </div>
              <p className="text-sm text-odar-gray-600 mt-2">
                Annual subscription plans with 85% gross margin
              </p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Data Services</h3>
              <div className="flex items-end space-x-2">
                <div className="text-3xl font-bold text-purple-600">14%</div>
                <div className="text-sm text-odar-gray-600 mb-1">of revenue</div>
              </div>
              <p className="text-sm text-odar-gray-600 mt-2">
                Premium analytics and API access with 90% gross margin
              </p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Maintenance</h3>
              <div className="flex items-end space-x-2">
                <div className="text-3xl font-bold text-yellow-600">6%</div>
                <div className="text-sm text-odar-gray-600 mb-1">of revenue</div>
              </div>
              <p className="text-sm text-odar-gray-600 mt-2">
                Service contracts and extended warranty programs
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialProjections;
