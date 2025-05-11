
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
import emailjs from '@emailjs/browser';

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


  const generateGoogleCalendarLink = (eventTitle: string, start: Date, end: Date, description: string) => {
    const format = (date: Date) =>
      date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${format(start)}/${format(end)}&details=${encodeURIComponent(description)}&sf=true&output=xml`;
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
    // Mock delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const reminderDate = new Date(date);
    reminderDate.setMonth(reminderDate.getMonth() - 1); // 1 month before

    const startTime = new Date(reminderDate.setHours(10, 0));
    const endTime = new Date(reminderDate.setHours(11, 0));

    const calendarLink = generateGoogleCalendarLink(
      `Insurance Renewal: ${formData.name} Mobile: ${formData.phone} `,
      startTime,
      endTime,
      `Reminder to renew insurance for ${formData.carModel} for ${formData.name} Mobile: ${formData.phone}`
    );

    // Send email with EmailJS
    await emailjs.send(
      'service_q06x9te',
      'template_2tqgk66',
      {
        name: formData.name,
        email: formData.email,
        expiry_date: date.toDateString(),
        phone: formData.phone,
        car_model: formData.carModel,
        calendar_link: calendarLink,
      },
      'mIUMFonpQ4kWWZf5k'
    );

    toast({
      title: "Success!",
      description: (
        <span>
          We've registered your insurance.{" "}
          <a href={calendarLink} target="_blank" className="underline text-blue-600">
            Add to Google Calendar
          </a>
        </span>
      ),
      duration: 8000,
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
