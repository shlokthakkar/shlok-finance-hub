import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import ReviewCard from '@/components/ReviewCard';
import { ChevronLeft, ChevronRight, Car, Calculator, Shield, Award, ArrowRight, Send } from 'lucide-react';

const HomePage = () => {
  const { toast } = useToast();
  const reviewsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleInquirySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real app, this would send data to your backend
    toast({
      title: "Inquiry Submitted",
      description: "We've received your inquiry and will contact you soon.",
    });
    
    // Reset form
    if (formRef.current) {
      formRef.current.reset();
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

  const insuranceCompanies = [
    "ICICI Lombard", 
    "Bajaj Allianz",
    "HDFC ERGO",
    "Tata AIG",
    "New India Assurance",
    "Reliance General Insurance",
    "Oriental Insurance",
    "National Insurance"
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="shlok-gradient">
        <div className="container mx-auto py-20 px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Drive Your Dreams with Flexible Financing
            </h1>
            <p className="text-xl mb-8 text-white max-w-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Shlok Motors & Finance offers tailored car loans and insurance solutions to make your automotive journey smooth and affordable.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" className="bg-white text-finance-primary hover:bg-gray-100 font-bold">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 font-bold">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <img 
              src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Family with new car" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services Overview - Improved Layout */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Financial Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of financial services to help you with car purchases, 
              insurance, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="service-card flex flex-col h-full border-t-4 border-t-finance-primary hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start mb-6">
                  <div className="h-14 w-14 rounded-full bg-finance-accent flex items-center justify-center mr-4 flex-shrink-0">
                    <Car className="h-7 w-7 text-finance-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Car Loans</h3>
                    <p className="text-gray-600">
                      Get competitive interest rates on new and used car financing with flexible repayment options tailored to your financial situation.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <Button asChild className="w-full bg-finance-primary hover:bg-finance-primary/90 text-white">
                    <Link to="/services">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="service-card flex flex-col h-full border-t-4 border-t-finance-primary hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start mb-6">
                  <div className="h-14 w-14 rounded-full bg-finance-accent flex items-center justify-center mr-4 flex-shrink-0">
                    <Calculator className="h-7 w-7 text-finance-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">EMI Options</h3>
                    <p className="text-gray-600">
                      Customize your EMI plans based on your budget and financial goals with our flexible options designed for your convenience.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <Button asChild className="w-full bg-finance-primary hover:bg-finance-primary/90 text-white">
                    <Link to="/services">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="service-card flex flex-col h-full border-t-4 border-t-finance-primary hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start mb-6">
                  <div className="h-14 w-14 rounded-full bg-finance-accent flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="h-7 w-7 text-finance-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Insurance Advisory</h3>
                    <p className="text-gray-600">
                      Professional guidance for choosing the right insurance coverage for your vehicle with expert advice from our experienced team.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <Button asChild className="w-full bg-finance-primary hover:bg-finance-primary/90 text-white">
                    <Link to="/insurance">Learn More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="service-card flex flex-col h-full border-t-4 border-t-finance-primary hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start mb-6">
                  <div className="h-14 w-14 rounded-full bg-finance-accent flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="h-7 w-7 text-finance-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Premium Support</h3>
                    <p className="text-gray-600">
                      Dedicated customer support and guidance throughout your financing journey to ensure your satisfaction and peace of mind.
                    </p>
                  </div>
                </div>
                <div className="mt-auto">
                  <Button asChild className="w-full bg-finance-primary hover:bg-finance-primary/90 text-white">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-finance-primary hover:bg-finance-primary/90 text-white">
              <Link to="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Insurance Companies */}
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
              <div key={index} className="bg-gray-50 px-6 py-3 rounded-full text-gray-800 font-medium shadow-sm">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Inquiry Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-primary p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="mb-6">
                  Fill out this form to inquire about our services. We'll get back to you as soon as possible.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Car className="h-5 w-5" />
                    <span>New & Used Car Financing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calculator className="h-5 w-5" />
                    <span>Customized EMI Plans</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5" />
                    <span>Comprehensive Insurance Solutions</span>
                  </div>
                </div>
              </div>
              <div className="md:w-3/5 p-8">
                <h3 className="text-xl font-semibold mb-4">Quick Inquiry</h3>
                <form ref={formRef} onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="w-full"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="w-full"
                      required
                    />
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <select 
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" 
                      required
                    >
                      <option value="">Select Service</option>
                      <option value="car-loan">Car Loan</option>
                      <option value="used-car">Used Car Finance</option>
                      <option value="insurance">Insurance</option>
                      <option value="emi">EMI Options</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      className="w-full"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    <Send className="mr-2 h-4 w-4" /> Send Inquiry
                  </Button>
                </form>
              </div>
            </div>
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
              <Button asChild className="bg-primary hover:bg-primary/90">
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
              <ChevronLeft className="h-6 w-6 text-primary" />
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
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 shlok-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Finance Your Dream Car?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Speak with our finance experts today and discover the best options available for you.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button asChild size="lg" className="bg-white text-finance-primary hover:bg-gray-100 font-bold">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
