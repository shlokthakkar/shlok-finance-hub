
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Car, FileCheck, DollarSign } from 'lucide-react';

const UsedCarsSection = () => {
  return (
    <section id="used-car-services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Used Car Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete assistance for buying and selling trusted used cars with transparent valuation and financing options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="mb-6 flex items-center">
                <div className="h-12 w-12 rounded-full bg-finance-accent flex items-center justify-center mr-4">
                  <Car className="h-6 w-6 text-finance-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Buy a Used Car</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Find your perfect pre-owned vehicle with our comprehensive buying assistance. We help you:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FileCheck className="h-5 w-5 text-finance-primary mr-2 mt-0.5" />
                  <span>Access a wide network of trusted used cars</span>
                </li>
                <li className="flex items-start">
                  <FileCheck className="h-5 w-5 text-finance-primary mr-2 mt-0.5" />
                  <span>Secure the best deal based on your budget and preferences</span>
                </li>
                <li className="flex items-start">
                  <FileCheck className="h-5 w-5 text-finance-primary mr-2 mt-0.5" />
                  <span>Handle all paperwork and transfer formalities</span>
                </li>
                <li className="flex items-start">
                  <FileCheck className="h-5 w-5 text-finance-primary mr-2 mt-0.5" />
                  <span>Arrange competitive financing options</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-finance-primary hover:bg-finance-primary/90">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="mb-6 flex items-center">
                <div className="h-12 w-12 rounded-full bg-finance-accent flex items-center justify-center mr-4">
                  <DollarSign className="h-6 w-6 text-finance-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Sell Your Car</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Get the best value for your vehicle with our hassle-free selling process. We offer:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FileCheck className="h-5 w-5 text-finance-primary mr-2 mt-0.5" />
                  <span>Fair market valuation based on condition</span>
                </li>
                <li className="flex items-start">
                  <FileCheck className="h-5 w-5 text-finance-primary mr-2 mt-0.5" />
                  <span>Quick documentation process</span>
                </li>
                <li className="flex items-start">
                  <FileCheck className="h-5 w-5 text-finance-primary mr-2 mt-0.5" />
                  <span>Assistance with RTO transfer and paperwork</span>
                </li>
                <li className="flex items-start">
                  <FileCheck className="h-5 w-5 text-finance-primary mr-2 mt-0.5" />
                  <span>Network of potential buyers for quick sale</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-finance-primary hover:bg-finance-primary/90">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UsedCarsSection;
