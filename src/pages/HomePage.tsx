
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ReviewCard from '@/components/ReviewCard';
import { ChevronLeft, ChevronRight, Car, Calculator, Shield, Award, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const reviewsRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (reviewsRef.current) {
      reviewsRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (reviewsRef.current) {
      reviewsRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const reviews = [
    {
      name: 'Rajesh Sharma',
      position: 'Business Owner',
      review: 'Shlok Motors helped me finance my dream car at amazing interest rates. Their team was extremely helpful throughout the process.',
      rating: 5,
    },
    {
      name: 'Priya Patel',
      position: 'Software Engineer',
      review: 'I was looking for a used car and their finance options were the best in the market. Quick processing and minimum documentation.',
      rating: 5,
    },
    {
      name: 'Amit Singh',
      position: 'Doctor',
      review: 'Their insurance advisory saved me thousands of rupees. Highly recommended for anyone looking for car insurance solutions.',
      rating: 4,
    },
    {
      name: 'Meera Desai',
      position: 'Teacher',
      review: 'As a first-time car buyer, I was nervous about financing. Shlok made it incredibly easy and stress-free for me.',
      rating: 5,
    },
    {
      name: 'Vikram Joshi',
      position: 'Sales Executive',
      review: 'Excellent EMI options tailored to my budget. Their team is very knowledgeable and friendly.',
      rating: 4,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-finance-primary text-white">
        <div className="container mx-auto py-20 px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Drive Your Dreams with Flexible Financing
            </h1>
            <p className="text-xl mb-8 text-gray-100 max-w-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Shlok Motors & Finance offers tailored car loans and insurance solutions to make your automotive journey smooth and affordable.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" className="bg-white text-finance-primary hover:bg-gray-100">
                <Link to="/inquiry">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=1000" 
              alt="Finance Services" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Financial Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of financial services to help you with car purchases, 
              insurance, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="service-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-finance-accent flex items-center justify-center mb-4">
                  <Car className="h-8 w-8 text-finance-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Car Loans</h3>
                <p className="text-gray-600">
                  Get competitive interest rates on new and used car financing with flexible repayment options.
                </p>
              </CardContent>
            </Card>

            <Card className="service-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-finance-accent flex items-center justify-center mb-4">
                  <Calculator className="h-8 w-8 text-finance-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">EMI Options</h3>
                <p className="text-gray-600">
                  Customize your EMI plans based on your budget and financial goals.
                </p>
              </CardContent>
            </Card>

            <Card className="service-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-finance-accent flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-finance-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Insurance Advisory</h3>
                <p className="text-gray-600">
                  Professional guidance for choosing the right insurance coverage for your vehicle.
                </p>
              </CardContent>
            </Card>

            <Card className="service-card">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-finance-accent flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-finance-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Support</h3>
                <p className="text-gray-600">
                  Dedicated customer support and guidance throughout your financing journey.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-finance-primary hover:bg-finance-primary/90">
              <Link to="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Shlok Motors & Finance</h2>
              <p className="text-gray-700 mb-6">
                Founded with a vision to make car ownership accessible and affordable, Shlok Motors & Finance 
                has been serving clients across Gujarat with transparent and customer-friendly financial solutions.
              </p>
              <p className="text-gray-700 mb-6">
                Our team of experienced financial advisors works closely with clients to understand their needs 
                and provide tailored solutions that fit their budget and requirements.
              </p>
              <Button asChild className="bg-finance-primary hover:bg-finance-primary/90">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000" 
                alt="Shlok Motors Office" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say.
            </p>
          </div>

          <div className="relative">
            <button 
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="h-6 w-6 text-finance-primary" />
            </button>
            
            <div 
              ref={reviewsRef}
              className="flex overflow-x-auto space-x-6 py-8 px-4 hide-scrollbar snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="snap-center">
                  <ReviewCard {...review} />
                </div>
              ))}
            </div>
            
            <button 
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg"
              aria-label="Next reviews"
            >
              <ChevronRight className="h-6 w-6 text-finance-primary" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-finance-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Finance Your Dream Car?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Speak with our finance experts today and discover the best options available for you.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button asChild size="lg" className="bg-white text-finance-primary hover:bg-gray-100">
              <Link to="/inquiry">Get a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
