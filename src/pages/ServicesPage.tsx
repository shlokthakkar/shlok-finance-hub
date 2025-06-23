
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import { Car, Calculator, CreditCard, ShieldCheck, BadgePercent, Clock, FileCheck, UserCheck, Home, BarChart4 } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: 'Car Loans',
      description: 'Minimum interest rates starting from 9% for new cars and competitive rates for used cars with flexible repayment options.',
      icon: Car,
      benefits: [
        'Low interest rates starting from 9% for new cars',
        'Quick approval process',
        'Minimal documentation',
        'Flexible repayment terms up to 7 years'
      ]
    },
    {
      title: 'Used Car Finance',
      description: 'Special financing options for trusted used cars to fit your budget.',
      icon: CreditCard,
      benefits: [
        'Financing for vehicles up to 10 years old',
        'Competitive rates for pre-owned cars',
        'Quick valuation and approval',
        'Customized EMI plans'
      ]
    },
    {
      title: 'Mortgage Loan Solutions',
      description: 'Comprehensive mortgage loan solutions up to ₹50 crore for residential and commercial properties.',
      icon: Home,
      benefits: [
        'Loans up to ₹50 crore available',
        'Competitive interest rates',
        'Flexible repayment options',
        'Quick approval process'
      ]
    },
    {
      title: 'EMI Options',
      description: 'Customized EMI plans tailored to your financial situation and comfort.',
      icon: Calculator,
      benefits: [
        'Flexible EMI durations from 1-20 years depending on the type of loan',
        'Step-up and step-down EMI options',
        'No prepayment* penalties (*T&C apply)',
        'Competitive processing fees'
      ]
    },
    {
      title: 'Insurance Advisory',
      description: 'Expert guidance on choosing the right insurance coverage for your vehicle and other needs.',
      icon: ShieldCheck,
      benefits: [
        'Vehicle insurance',
        'Mediclaim insurance',
        'Personal Accident Insurance',
        'Travel insurance',
        'Marine Insurance'
      ]
    },
    {
      title: 'Used Car Buy/Sell',
      description: 'Complete assistance in buying or selling trusted used cars with transparent valuation and paperwork support.',
      icon: BarChart4,
      benefits: [
        'Fair market valuation',
        'Paperwork assistance',
        'Seamless ownership transfer'
      ]
    },
    {
      title: 'Refinancing Solutions',
      description: 'Restructure your existing car loan for better terms and lower rates.',
      icon: BadgePercent,
      benefits: [
        'Up to 200% of the asset value as loan',
        'Best possible interest rates',
        'Consolidate multiple car loans',
        'Improve cash flow with extended terms'
      ]
    },
    {
      title: 'Documentation Assistance',
      description: 'Complete support with paperwork and registration for a hassle-free experience.',
      icon: FileCheck,
      benefits: [
        'Assistance with RTO formalities',
        'Help with insurance paperwork',
        'Guidance on loan documentation',
        'Support for vehicle registration'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-finance-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Comprehensive financial solutions for all your automotive needs.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From car loans to insurance solutions, we provide a wide range of services to meet all your automotive financial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                benefits={service.benefits}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button asChild size="lg" className="bg-finance-primary hover:bg-finance-primary/90 text-white">
              <Link to="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Simple Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've streamlined our process to make getting car finance quick and hassle-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-finance-accent flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-finance-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Apply</h3>
              <p className="text-gray-600">
                Fill out our simple application form with your details and requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-finance-accent flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-finance-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Approved</h3>
              <p className="text-gray-600">
                Our team reviews your application and provides quick approval.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-finance-accent flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-finance-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Drive Away</h3>
              <p className="text-gray-600">
                Complete the paperwork and drive away in your new car with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Documents Required</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here's what you'll need to provide for a smooth application process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-finance-primary">For Salaried Individuals</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FileCheck className="h-5 w-5 text-finance-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Identity Proof (Aadhar Card, PAN Card, Passport, Driving License)</span>
                </li>
                <li className="flex items-start">
                  <FileCheck className="h-5 w-5 text-finance-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Address Proof (Utility Bills, Rental Agreement)</span>
                </li>
                <li className="flex items-start">
                  <FileCheck className="h-5 w-5 text-finance-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Income Proof (Latest 3 months' Salary Slips)</span>
                </li>
                <li className="flex items-start">
                  <FileCheck className="h-5 w-5 text-finance-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Bank Statements (Last 6 months)</span>
                </li>
                <li className="flex items-start">
                  <FileCheck className="h-5 w-5 text-finance-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Form 16 or IT Returns (Last 2 years)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 text-finance-primary">For Self-Employed Individuals</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FileCheck className="h-5 w-5 text-finance-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Identity Proof (Aadhar Card, PAN Card, Passport, Driving License)</span>
                </li>
                <li className="flex items-start">
                  <FileCheck className="h-5 w-5 text-finance-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Address Proof (Utility Bills, Property Documents)</span>
                </li>
                <li className="flex items-start">
                  <FileCheck className="h-5 w-5 text-finance-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Business Proof (GST Registration, Shop Act License)</span>
                </li>
                <li className="flex items-start">
                  <FileCheck className="h-5 w-5 text-finance-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Bank Statements (Last 12 months)</span>
                </li>
                <li className="flex items-start">
                  <FileCheck className="h-5 w-5 text-finance-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>IT Returns (Last 3 years)</span>
                </li>
                <li className="flex items-start">
                  <FileCheck className="h-5 w-5 text-finance-primary mt-0.5 mr-2 flex-shrink-0" />
                  <span>Profit & Loss Account and Balance Sheet</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Additional documents may be required based on specific circumstances and lender requirements.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and processes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">What documents do I need for a car loan?</h3>
              <p className="text-gray-600">
                Typically, you'll need your identity proof, address proof, income proof (salary slips or IT returns), 
                bank statements for the last 3 months, and a copy of your Driving License.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">How long does the loan approval process take?</h3>
              <p className="text-gray-600">
                Our loan approval process is quick and efficient. In most cases, we can provide approval within 24-48 hours 
                after receiving all required documents.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Can I get a loan for a second-hand car?</h3>
              <p className="text-gray-600">
                Yes, we offer financing options for trusted used cars. The car should not be more than 10 years old 
                by the end of the loan tenure, and we'll need to assess the vehicle's condition and value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-finance-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and find the perfect financing solution for your needs.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button asChild size="lg" className="bg-white text-finance-primary hover:bg-gray-100">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-finance-primary hover:bg-gray-100">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
