
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { MessageSquare, Mail, SendHorizontal } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const WhatsAppContact = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  // This is the business phone number to contact (with country code)
  const businessPhone = "919979916000"; // +91 9979916000
  const businessEmail = "shlokmfin@gmail.com";
  
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
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
    setEmail("");
    setMessage("");
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast({
        title: "Missing Information",
        description: "Please provide your name and email address.",
        variant: "destructive",
      });
      return;
    }
    
    // Create email with user details
    const emailSubject = "Inquiry from Website";
    const emailBody = `Hello, I'm ${name} (${email}). ${phone ? `My phone number is ${phone}. ` : ''}${message}`;
    const mailtoURL = `mailto:${businessEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoURL;
    
    toast({
      title: "Email Client Opening",
      description: "Opening your email client to send the message.",
    });
    
    // Reset the form
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };
  
  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-finance-primary text-white rounded-t-lg">
        <div className="flex items-center">
          <CardTitle>Contact Us</CardTitle>
        </div>
        <CardDescription className="text-white/90">
          Reach us instantly through WhatsApp or Email
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs defaultValue="whatsapp" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="whatsapp" className="flex items-center">
              <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp
            </TabsTrigger>
            <TabsTrigger value="email" className="flex items-center">
              <Mail className="mr-2 h-4 w-4" /> Email
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="whatsapp">
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
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
          </TabsContent>
          
          <TabsContent value="email">
            <form onSubmit={handleEmailSubmit} className="space-y-4">
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
                  placeholder="Your Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  placeholder="Your Phone Number (Optional)"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <Input
                  placeholder="Your Message (Optional)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                <Mail className="mr-2 h-4 w-4" /> Send Email
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default WhatsAppContact;
