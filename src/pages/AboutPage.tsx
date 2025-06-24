import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AchievementsSection from '@/components/AchievementsSection';
import { Users, Target, Shield, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-finance-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About Shlok Motors & Finance</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Dedicated to providing excellent car financing and insurance solutions since 1996.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Office" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Shlok Motors & Finance was established in 1996 by Chirag Thakkar with a vision to simplify
                the car financing process for customers in Ahmedabad and across Gujarat.
              </p>
              <p className="text-gray-700 mb-4">
                Over the years, we've grown to become a trusted name in the automotive finance industry, 
                known for our transparent processes, competitive rates, and exceptional customer service.
              </p>
              <p className="text-gray-700 mb-4">
                We take pride in helping thousands of customers drive home their dream cars with financing 
                solutions that fit their budget and requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet the Founder</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The driving force behind Shlok Motors & Finance
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
            <div className="md:w-1/3">
              <img 
                src="/chiragthakkar.jpg?auto=format&fit=crop&q=80&w=400"
                alt="Chirag Thakkar - Founder" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-2">Chirag Thakkar</h3>
              <p className="text-finance-primary font-medium mb-4">Founder & CEO</p>
              <p className="text-gray-700 mb-4">
                With over 15 years of experience in the automotive and finance industry, Chirag Thakkar 
                founded Shlok Motors & Finance with a mission to make car ownership accessible to everyone.
              </p>
              <p className="text-gray-700 mb-4">
                His approach to business is centered around customer satisfaction, transparency, and building 
                long-term relationships. Under his leadership, the company has grown to become one of the 
                most trusted names in car financing in Gujarat.
              </p>
              <p className="text-gray-700">
                "Our goal is not just to provide financing, but to create a seamless experience that makes the 
                journey to car ownership enjoyable and stress-free." - Chirag Thakkar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section - Moved from HomePage */}
      <AchievementsSection />

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at Shlok Motors & Finance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="service-card">
              <CardContent className="p-6 flex">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-finance-accent flex items-center justify-center">
                    <Users className="h-6 w-6 text-finance-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                  <p className="text-gray-600">
                    We believe in putting our customers' needs first. Every service and solution we offer is 
                    designed with your best interests in mind.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="service-card">
              <CardContent className="p-6 flex">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-finance-accent flex items-center justify-center">
                    <Shield className="h-6 w-6 text-finance-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Integrity & Transparency</h3>
                  <p className="text-gray-600">
                    We maintain complete transparency in our operations and communications. No hidden fees, 
                    no surprises—just honest service.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="service-card">
              <CardContent className="p-6 flex">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-finance-accent flex items-center justify-center">
                    <Target className="h-6 w-6 text-finance-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                  <p className="text-gray-600">
                    We strive for excellence in everything we do, continuously improving our services to 
                    deliver the best possible experience to our clients.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="service-card">
              <CardContent className="p-6 flex">
                <div className="mr-4">
                  <div className="h-12 w-12 rounded-full bg-finance-accent flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-finance-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    We embrace innovation to stay ahead in the financial services industry, constantly 
                    adapting to changing customer needs and market trends.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-finance-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <p className="text-xl">
                To empower our clients with flexible, transparent, and affordable car financing solutions that
                make their automotive dreams a reality.
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <p className="text-xl">
                To be the most trusted and customer-centric car finance company in Gujarat, known for our 
                exceptional service and innovative financial solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Service?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us help you find the perfect financing solution for your next car purchase.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button asChild className="bg-finance-primary hover:bg-finance-primary/90">
              <Link to="/inquiry">Get a Quote</Link>
            </Button>
            <Button asChild className="bg-finance-primary hover:bg-finance-primary/90">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
