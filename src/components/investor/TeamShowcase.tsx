import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Trophy, GraduationCap, Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const TeamShowcase = () => {
  const executiveTeam = [
    {
      name: "Mathew Riexinger",
      title: "CEO & Founder",
      background: "Bachelors in Multimedia Animation and Design",
      experience: "Non Verbal Communications Expert, Former Tesla Employee (3 Years)",
      achievements: "Worked on FSD and Optimus Projects, Experience with SOE, Eleven Labs, Adobe",
      imageUrl: "/lovable-uploads/99b38f1d-1de0-432b-80a9-26fcba0c6e6c.png"
    },
    {
      name: "TBD",
      title: "CTO",
      background: "Advanced Technical Degree",
      experience: "Sensor technology and AI experience",
      achievements: "Technical leadership in related fields",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "TBD",
      title: "Chief Scientist",
      background: "Ph.D. in relevant scientific field",
      experience: "Expertise in olfactory detection technology",
      achievements: "Patents and research in sensor technology",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "TBD",
      title: "CFO",
      background: "Financial expertise",
      experience: "Fundraising and financial management",
      achievements: "Track record in startup financing",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const advisors = [
    {
      name: "TBD",
      title: "Scientific Advisor",
      affiliation: "Position open",
      specialty: "Environmental sensing systems",
      imageUrl: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "TBD",
      title: "Industry Advisor",
      affiliation: "Position open",
      specialty: "IoT product strategy",
      imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "TBD",
      title: "Strategic Advisor",
      affiliation: "Position open",
      specialty: "Manufacturing scale & distribution",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const partners = [
    {
      name: "TechGrowth Ventures",
      type: "Lead Investor (Seed Round)",
      contribution: "$1.8M investment in seed round",
      logo: "https://placehold.co/200x80/e2e8f0/64748b?text=TechGrowth+Ventures"
    },
    {
      name: "NanoMaterials Inc.",
      type: "Manufacturing Partner",
      contribution: "Advanced materials fabrication",
      logo: "https://placehold.co/200x80/e2e8f0/64748b?text=NanoMaterials+Inc."
    },
    {
      name: "CloudSense Analytics",
      type: "Technology Partner",
      contribution: "Cloud infrastructure and analytics",
      logo: "https://placehold.co/200x80/e2e8f0/64748b?text=CloudSense+Analytics"
    },
    {
      name: "Horizon Research Institute",
      type: "Research Partner",
      contribution: "Advanced sensor research collaboration",
      logo: "https://placehold.co/200x80/e2e8f0/64748b?text=Horizon+Research"
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Team & Partners</h2>
      
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Users className="h-6 w-6 text-odar-blue" />
            <CardTitle>Executive Leadership</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {executiveTeam.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-4 rounded-full overflow-hidden">
                  {member.name === "Mathew Riexinger" ? (
                    <img 
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Avatar className="w-full h-full">
                      <AvatarFallback className="bg-slate-200 text-slate-600 text-xl">
                        {member.title[0]}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-odar-blue font-medium text-sm mb-2">{member.title}</p>
                
                <div className="mt-2 space-y-1 text-left w-full">
                  <div className="flex items-start">
                    <GraduationCap className="h-4 w-4 text-odar-gray-500 mr-1.5 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{member.background}</p>
                  </div>
                  <div className="flex items-start">
                    <Briefcase className="h-4 w-4 text-odar-gray-500 mr-1.5 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{member.experience}</p>
                  </div>
                  <div className="flex items-start">
                    <Trophy className="h-4 w-4 text-odar-gray-500 mr-1.5 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{member.achievements}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-5 w-5 text-odar-blue" />
              <CardTitle>Advisory Board</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {advisors.map((advisor) => (
                <div key={advisor.name} className="flex space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <Avatar className="w-full h-full">
                      <AvatarFallback className="bg-slate-200 text-slate-600 text-lg">
                        {advisor.title[0]}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <h3 className="font-semibold">{advisor.name}</h3>
                    <p className="text-odar-blue text-sm mb-1">{advisor.title}</p>
                    <p className="text-sm text-odar-gray-700">{advisor.affiliation}</p>
                    <p className="text-sm text-odar-gray-600">Specialty: {advisor.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-odar-blue" />
              <CardTitle>Team Highlights</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-slate-50 p-3 rounded-lg">
                <h4 className="font-medium mb-1">Leadership Vision</h4>
                <ul className="text-sm space-y-1">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-odar-blue rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                    <span>Tesla FSD and Optimus project experience</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-odar-blue rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                    <span>Non-verbal communication expertise applied to sensor technology</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-3 rounded-lg">
                <h4 className="font-medium mb-1">Blue Ocean Strategy</h4>
                <ul className="text-sm space-y-1">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-odar-blue rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                    <span>Creating an entirely new market space with limited competition</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-odar-blue rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                    <span>Patentable technology across multiple verticals</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-3 rounded-lg">
                <h4 className="font-medium mb-1">Team Growth Plans</h4>
                <ul className="text-sm space-y-1">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-odar-blue rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                    <span>Currently recruiting top-tier technical and scientific talent</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-odar-blue rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                    <span>Expanding to 30+ within 12 months post-funding</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-odar-blue rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                    <span>Key hires in engineering, sales, and product management</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Strategic Partners</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <div key={partner.name} className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="h-20 flex items-center justify-center mb-4">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full"
                  />
                </div>
                <h3 className="font-semibold text-center mb-1">{partner.name}</h3>
                <p className="text-xs text-odar-blue text-center mb-2">{partner.type}</p>
                <p className="text-sm text-center text-odar-gray-700">{partner.contribution}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamShowcase;
