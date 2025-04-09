
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const InsuranceForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carModel: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date) {
      toast({
        title: "Error",
        description: "Please select your insurance expiry date.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Mock API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const completeData = {
        ...formData,
        expiryDate: date.toISOString().split('T')[0]
      };
      
      console.log('Insurance form submitted:', completeData);
      
      toast({
        title: "Success!",
        description: "We've registered your insurance details. We'll remind you before your coverage expires.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        carModel: ''
      });
      setDate(undefined);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem registering your insurance details. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Insurance Reminder Service</CardTitle>
        <CardDescription>
          Never miss your insurance renewal! We'll remind you before your policy expires.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="+91 98765 43210"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="carModel">Car Model</Label>
            <Input
              id="carModel"
              name="carModel"
              placeholder="e.g., Honda City, Maruti Swift"
              required
              value={formData.carModel}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="expiryDate">Insurance Expiry Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="expiryDate"
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Select date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-finance-primary hover:bg-finance-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Registering...' : 'Register for Reminders'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default InsuranceForm;
