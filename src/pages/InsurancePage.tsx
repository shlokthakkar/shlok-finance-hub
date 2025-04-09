
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import InsuranceForm from '@/components/InsuranceForm';
import { Bell, Shield, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

const InsurancePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-finance-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Insurance Reminder Service</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Never miss an insurance renewal again. Our free reminder service keeps you protected.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our insurance reminder service is designed to ensure you're always covered. Here's how it works:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center service-card">
              <CardContent className="pt-6">
                <div className="h-16 w-16 rounded-full bg-finance-accent flex items-center justify-center mx-auto mb-4">
                  <Bell className="h-8 w-8 text-finance-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Register</h3>
                <p className="text-gray-600">
                  Fill out the simple form with your details and insurance expiry date.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center service-card">
              <CardContent className="pt-6">
                <div className="h-16 w-16 rounded-full bg-finance-accent flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-finance-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Reminded</h3>
                <p className="text-gray-600">
                  Receive timely reminders before your insurance policy expires.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center service-card">
              <CardContent className="pt-6">
                <div className="h-16 w-16 rounded-full bg-finance-accent flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-finance-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Stay Protected</h3>
                <p className="text-gray-600">
                  Renew your insurance on time and stay protected without interruption.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <InsuranceForm />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Our Reminder Service</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Why you should register for our free insurance reminder service:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="mt-1">
                <CheckCircle className="h-6 w-6 text-finance-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Never Miss a Renewal</h3>
                <p className="text-gray-600">
                  Our system automatically tracks your insurance expiry dates and sends timely reminders.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1">
                <CheckCircle className="h-6 w-6 text-finance-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Multiple Reminder Options</h3>
                <p className="text-gray-600">
                  Receive reminders via email, ensuring you're notified through your preferred channel.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1">
                <CheckCircle className="h-6 w-6 text-finance-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Insurance Recommendations</h3>
                <p className="text-gray-600">
                  Get personalized insurance recommendations based on your vehicle and requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1">
                <CheckCircle className="h-6 w-6 text-finance-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Completely Free</h3>
                <p className="text-gray-600">
                  Our reminder service is completely free of charge—just our way of helping you stay protected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Insurance Matters */}
      <section className="py-16 bg-finance-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Insurance Matters</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Understanding the importance of keeping your vehicle insurance active:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <AlertTriangle className="h-6 w-6 text-yellow-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Legal Requirement</h3>
                  <p className="text-gray-100">
                    Driving without valid insurance is illegal in India and can result in fines, license suspension, or even imprisonment.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <AlertTriangle className="h-6 w-6 text-yellow-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Financial Protection</h3>
                  <p className="text-gray-100">
                    Insurance protects you from significant financial losses in case of accidents, theft, or damage to your vehicle.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <AlertTriangle className="h-6 w-6 text-yellow-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Third-Party Liability</h3>
                  <p className="text-gray-100">
                    Insurance covers damages or injuries you might cause to others, protecting you from potential lawsuits.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 p-6 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="mt-1">
                  <AlertTriangle className="h-6 w-6 text-yellow-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">No Claim Bonus Loss</h3>
                  <p className="text-gray-100">
                    Letting your insurance lapse means losing the accumulated No Claim Bonus, which can be up to 50% of your premium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common questions about our insurance reminder service and insurance in general.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">How early will I receive reminders?</h3>
              <p className="text-gray-600">
                We'll send you reminder notifications 30 days, 15 days, and 5 days before your insurance expires, 
                giving you plenty of time to arrange for renewal.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Is my data secure with your service?</h3>
              <p className="text-gray-600">
                Yes, we take data security very seriously. Your information is encrypted and stored securely, 
                and is only used for sending you reminders and related insurance information.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Can I update my insurance details later?</h3>
              <p className="text-gray-600">
                Absolutely. If you change your vehicle or insurance provider, or if your expiry date changes, 
                you can easily update your information by contacting us.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Do you help with the renewal process?</h3>
              <p className="text-gray-600">
                Yes, we can assist you with the renewal process. When we send you a reminder, we'll also include 
                options for renewing your insurance, and our team is available to help if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help With Insurance?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team can help you find the best insurance policy for your vehicle at competitive rates.
          </p>
          <Button asChild className="bg-finance-primary hover:bg-finance-primary/90">
            <Link to="/contact">Contact Our Insurance Experts</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default InsurancePage;
