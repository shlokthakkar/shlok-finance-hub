import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import InsuranceForm from '@/components/InsuranceForm';
import { Bell, Shield, Clock, CheckCircle, AlertTriangle, Car, Heart, Plane, Ship, User, Crown, Star } from 'lucide-react';

const InsurancePage = () => {
  // Array of insurance types offered
  const insuranceTypes = [
    {
      title: "Vehicle Insurance",
      description: "Comprehensive coverage for cars, bikes, and commercial vehicles at competitive rates.",
      icon: <Car className="h-8 w-8 text-finance-primary" />
    },
    {
      title: "Mediclaim Insurance",
      description: "Health insurance covering medical expenses with a wide network of hospitals and cashless claims.",
      icon: <Heart className="h-8 w-8 text-finance-primary" />
    },
    {
      title: "Personal Accident Insurance",
      description: "Financial protection against accidental injuries, disability, and death with 24x7 coverage.",
      icon: <User className="h-8 w-8 text-finance-primary" />
    },
    {
      title: "Travel Insurance",
      description: "Coverage for domestic and international travel including medical emergencies and trip cancellations.",
      icon: <Plane className="h-8 w-8 text-finance-primary" />
    },
    {
      title: "Marine Insurance",
      description: "Protection for cargo and vessels against damages during transport over water bodies.",
      icon: <Ship className="h-8 w-8 text-finance-primary" />
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-finance-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Insurance Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Comprehensive insurance services for all your needs with free reminders to ensure you're always covered.
          </p>
        </div>
      </section>

      {/* Insurance Types Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Insurance Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of insurance products to protect what matters most to you:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceTypes.map((insurance, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 border-t-4 border-finance-primary">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="h-16 w-16 rounded-full bg-finance-accent flex items-center justify-center mx-auto mb-4">
                    {insurance.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{insurance.title}</h3>
                  <p className="text-gray-600 text-center mb-4 flex-grow">
                    {insurance.description}
                  </p>
                  <Button asChild className="w-full mt-auto">
                    <Link to="/contact">Get a Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Insurance Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We collaborate with leading insurance providers to ensure you get the best coverage at competitive rates.
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
                  <h3 className="text-2xl font-bold text-finance-primary mb-2">Tata AIG General Insurance Co Ltd</h3>
                  <p className="text-gray-600 text-center">
                    Our trusted primary insurance partner, providing excellent coverage and superior customer service.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Other Partners */}
            {["ICICI Lombard", "Bajaj Allianz", "HDFC ERGO", "Reliance General Insurance"].map((company, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{company}</h3>
                <p className="text-gray-600">
                  Trusted insurance partner offering quality coverage options.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reminder Service */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Insurance Reminder Service</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Never miss an insurance renewal again with our free reminder service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
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

          <div className="max-w-xl mx-auto">
            <InsuranceForm />
          </div>
        </div>
      </section>

      {/* Why Insurance Matters */}
      <section className="py-16 bg-finance-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Insurance Matters</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Understanding the importance of keeping your insurance active:
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

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help With Insurance?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team can help you find the best insurance policy for your specific needs at competitive rates.
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
