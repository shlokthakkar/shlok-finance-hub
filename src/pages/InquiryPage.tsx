
import React from 'react';
import ContactForm from '@/components/ContactForm';
import { CheckCircle } from 'lucide-react';

const InquiryPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-finance-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Get a Quote</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Tell us what you're looking for, and we'll help you find the perfect financing solution.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Request Information</h2>
              <p className="text-gray-700 mb-6">
                Fill out the form with your requirements, and our team will get back to you with 
                tailored financing options that meet your needs.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-finance-primary mt-0.5" />
                  <p className="text-gray-700">Quick response within 24 hours</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-finance-primary mt-0.5" />
                  <p className="text-gray-700">Personalized financing options</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-finance-primary mt-0.5" />
                  <p className="text-gray-700">Competitive interest rates and terms</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-finance-primary mt-0.5" />
                  <p className="text-gray-700">Free consultation with our experts</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-finance-primary mt-0.5" />
                  <p className="text-gray-700">No obligation quotation</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4">What happens next?</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Our team will review your inquiry.</li>
                  <li>We'll prepare personalized financing options based on your requirements.</li>
                  <li>A finance expert will contact you to discuss the options in detail.</li>
                  <li>Once you select an option, we'll guide you through the application process.</li>
                  <li>Quick approval and disbursement to help you get your car faster.</li>
                </ol>
              </div>
            </div>

            <div>
              <ContactForm type="inquiry" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Shlok Motors & Finance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We go the extra mile to ensure you get the best financing experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 rounded-full bg-finance-accent flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-finance-primary">10+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Years of Experience</h3>
              <p className="text-gray-600">
                Over a decade of experience in providing automotive financial services.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 rounded-full bg-finance-accent flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-finance-primary">5K+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Happy Customers</h3>
              <p className="text-gray-600">
                Thousands of satisfied customers who've financed their cars through us.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 rounded-full bg-finance-accent flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-finance-primary">20+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Financial Partners</h3>
              <p className="text-gray-600">
                Partnerships with leading banks and financial institutions for the best rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Documents Required</h2>
            <p className="text-gray-600 mb-8 text-center">
              To speed up your application process, you'll need to provide the following documents:
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Identity Proof (Any one)</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Aadhar Card</li>
                  <li>PAN Card</li>
                  <li>Passport</li>
                  <li>Voter ID</li>
                  <li>Driving License</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Address Proof (Any one)</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Aadhar Card</li>
                  <li>Utility Bills (not older than 3 months)</li>
                  <li>Passport</li>
                  <li>Rental Agreement</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Income Proof</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Last 3 months' salary slips (for salaried individuals)</li>
                  <li>Last 2 years' Income Tax Returns (for self-employed)</li>
                  <li>Bank statements for the last 6 months</li>
                  <li>Business proof for self-employed individuals</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Additional Documents</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Passport-sized photographs</li>
                  <li>Existing loan statements (if any)</li>
                  <li>Quotation of the vehicle you intend to purchase</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InquiryPage;
