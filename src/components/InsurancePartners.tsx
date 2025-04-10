
import React from 'react';

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
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {insuranceCompanies.map((company, index) => (
            <div 
              key={index} 
              className={`px-6 py-3 rounded-full font-medium shadow-sm ${
                company.primary 
                  ? 'bg-finance-primary text-white font-bold text-lg px-8 py-4' 
                  : 'bg-gray-50 text-gray-800'
              }`}
            >
              {company.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsurancePartners;
