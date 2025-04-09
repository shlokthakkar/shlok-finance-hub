
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, benefits }) => {
  return (
    <Card className="h-full card-hover">
      <CardHeader>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-finance-accent mb-4">
          <Icon className="text-finance-primary w-6 h-6" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h4 className="text-sm font-medium mb-2">Benefits:</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-finance-primary hover:bg-finance-primary/90">
          <Link to="/inquiry">Inquire Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
