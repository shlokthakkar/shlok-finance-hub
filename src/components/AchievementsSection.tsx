
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, Shield } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Bronze Plus Award – Giant Steps FY'23",
      company: "Tata AIG General Insurance",
      year: "2023",
      description: "Awarded for exemplary performance in the Financial Year 2022–2023.Commended for raising the bar through unwavering commitment to excellence and consistently achieving outstanding results.",
      icon: Award
    },
    {
      title: "Outstanding Performance – Motor Speed Fest Q2 ",
      company: "Tata AIG General Insurance",
      year: "2024",
      description: "Recognized for exceptional dedication and performance in the Motor Campaign, driving outstanding business outcomes for FY'24.",
      icon: Award
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      </div>
    </section>
  );
};

export default AchievementsSection;
