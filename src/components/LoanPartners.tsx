
import React from 'react';

const LoanPartners = () => {
  const loanPartners = [
    { name: "ICICI Bank", primary: true },
    { name: "HDFC Bank", primary: false },
    { name: "Nationalized Banks", primary: false },
    { name: "Many More", primary: false }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Car Loan Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with trusted financial institutions to provide you with the best car loan options.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {loanPartners.map((partner, index) => (
            <div 
              key={index} 
              className={`px-6 py-3 rounded-full font-medium shadow-sm ${
                partner.primary 
                  ? 'bg-finance-primary text-white font-bold text-lg px-8 py-4' 
                  : 'bg-gray-50 text-gray-800'
              }`}
            >
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanPartners;
