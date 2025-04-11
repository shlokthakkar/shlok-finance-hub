import React from 'react';
import { Crown, Star } from 'lucide-react';

const InsurancePartners = () => {
  const insuranceCompanies = [
    { name: "Tata AIG General Insurance Co Ltd", primary: true },
    { name: "ICICI Lombard", primary: false },
    { name: "Bajaj Allianz", primary: false },
    { name: "HDFC ERGO", primary: false },
    { name: "Reliance General Insurance", primary: false }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Insurance Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We work with leading insurance providers to offer you the best coverage options at competitive rates.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Primary Partner */}
          <div className="md:col-span-3 mb-8">
            <div className="bg-finance-accent rounded-lg p-6 relative overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 bg-finance-primary text-white py-1 px-4 rounded-bl-lg">
                <div className="flex items-center">
                  <Crown className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">Primary Partner</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Star className="h-12 w-12 text-yellow-500 mb-4" />
                <h3 className="text-2xl font-bold text-finance-primary mb-2">{insuranceCompanies[0].name}</h3>
                <p className="text-gray-600 text-center">
                  Our trusted primary insurance partner, providing excellent coverage and superior customer service.
                </p>
              </div>
            </div>
          </div>
          
          {/* Other Partners */}
          {insuranceCompanies.slice(1).map((company, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{company.name}</h3>
              <p className="text-gray-600">
                Trusted insurance partner offering quality coverage options.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsurancePartners;
