
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, Shield } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Best Insurance Advisor",
      company: "Tata AIG General Insurance",
      year: "2023",
      description: "Recognized for outstanding performance in vehicle insurance sales and customer service.",
      icon: Trophy
    },
    {
      title: "Top Performer Award",
      company: "ICICI Bank Car Loans",
      year: "2022",
      description: "Achieved highest car loan disbursement in the western region.",
      icon: Award
    },
    {
      title: "Customer Excellence",
      company: "HDFC Bank",
      year: "2021",
      description: "Acknowledged for maintaining exceptional customer satisfaction ratings.",
      icon: Shield
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Achievements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Recognition of our commitment to excellence and customer satisfaction in the financial services industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  {React.createElement(achievement.icon, { 
                    className: "h-12 w-12 text-finance-primary" 
                  })}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{achievement.title}</h3>
                <div className="text-sm text-center font-medium text-finance-primary mb-4">
                  {achievement.company} • {achievement.year}
                </div>
                <p className="text-gray-600 text-center">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1559024094-4a1e4495c3c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Award Ceremony" 
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Receiving Award from Tata AIG</h3>
            <p className="text-gray-600">Recognition ceremony for outstanding performance in insurance advisory services.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Certificate Presentation" 
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Excellence Certificate from ICICI Bank</h3>
            <p className="text-gray-600">Presented for achieving highest car loan disbursement in the region.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
