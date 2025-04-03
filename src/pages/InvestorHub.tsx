
import React from 'react';
import Header from '@/components/Header';
import InvestorOverview from '@/components/investor/InvestorOverview';
import MarketAnalysis from '@/components/investor/MarketAnalysis';
import FinancialProjections from '@/components/investor/FinancialProjections';
import InvestmentOpportunity from '@/components/investor/InvestmentOpportunity';
import RoadmapTimeline from '@/components/investor/RoadmapTimeline';
import TeamShowcase from '@/components/investor/TeamShowcase';
import { Card, CardContent } from '@/components/ui/card';

const InvestorHub = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#eff6ff]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        <Header />
        
        <main className="mt-8">
          <div className="flex flex-col space-y-2 mb-8">
            <h1 className="text-3xl font-bold">Investor Hub</h1>
            <p className="text-odar-gray-600">
              Comprehensive information for potential investors in the OdAR technology platform
            </p>
          </div>
          
          <div className="flex flex-col gap-12">
            <InvestorOverview />
            <MarketAnalysis />
            <FinancialProjections />
            <InvestmentOpportunity />
            <RoadmapTimeline />
            <TeamShowcase />
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Investment Team</h3>
                <p className="mb-4 text-odar-gray-700">
                  Interested in investing in OdAR? Our investment relations team is ready to provide additional details, answer questions, and discuss opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-odar-blue text-white px-4 py-2 rounded-md hover:bg-odar-blue/90 transition-colors">
                    Request Investor Package
                  </button>
                  <button className="bg-white border border-odar-blue text-odar-blue px-4 py-2 rounded-md hover:bg-odar-gray-50 transition-colors">
                    Schedule a Call
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InvestorHub;
