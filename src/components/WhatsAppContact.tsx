
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { MessageSquare, SendHorizontal } from 'lucide-react';

const WhatsAppContact = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  
  // This is the business phone number to contact (with country code)
  const businessPhone = "919979916000"; // +91 9979916000
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone) {
      toast({
        title: "Missing Information",
        description: "Please provide your name and phone number.",
        variant: "destructive",
      });
      return;
    }
    
    // Create WhatsApp message with user details
    const whatsappMessage = `Hello, I'm ${name} (${phone}). ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${businessPhone}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new window
    window.open(whatsappURL, '_blank');
    
    toast({
      title: "WhatsApp Opening",
      description: "Redirecting you to WhatsApp to continue the conversation.",
    });
    
    // Reset the form
    setName("");
    setPhone("");
    setMessage("");
  };
  
  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-finance-primary text-white rounded-t-lg">
        <div className="flex items-center">
          <MessageSquare className="mr-2 h-6 w-6" />
          <CardTitle>Contact via WhatsApp</CardTitle>
        </div>
        <CardDescription className="text-white/90">
          Reach us instantly through WhatsApp
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <Input
              placeholder="Your Phone Number"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div>
            <Input
              placeholder="Your Message (Optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full bg-[#25D366] hover:bg-[#20bd5a]">
            <SendHorizontal className="mr-2 h-4 w-4" /> Contact on WhatsApp
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default WhatsAppContact;
