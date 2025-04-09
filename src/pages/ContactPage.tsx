
import React from 'react';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-finance-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Have a question or need assistance? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-finance-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-finance-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Office</h3>
                    <p className="text-gray-600">
                      Dev Prime, Makarba, Ahmedabad,<br />
                      Gujarat – 380015, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-finance-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-finance-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <p className="text-gray-600">
                      +91 9979916000 / +91 9825014189
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-finance-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-finance-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:shlokmfin@gmail.com" className="hover:text-finance-primary transition-colors">
                        shlokmfin@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-full bg-finance-accent flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-finance-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 10:00 AM - 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4">Our Location</h3>
                <Card>
                  <CardContent className="p-0">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.2580087201486!2d72.50103771541613!3d22.78760288507316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5bd0123a1735%3A0xa6ad29fb2bb7c643!2sDev%20Prime%2C%20Makarba%2C%20Ahmedabad%2C%20Gujarat%20380051!5e0!3m2!1sen!2sin!4v1649236152319!5m2!1sen!2sin" 
                      width="100%" 
                      height="400" 
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Shlok Motors & Finance Office Location"
                    ></iframe>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <ContactForm type="contact" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some common questions about contacting us and our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">How quickly can I expect a response?</h3>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 24 hours during business days. For urgent matters, 
                please call us directly.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Do I need to make an appointment to visit your office?</h3>
              <p className="text-gray-600">
                While walk-ins are welcome, we recommend scheduling an appointment to ensure that our 
                team can dedicate sufficient time to address your needs.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Can I request information about multiple services at once?</h3>
              <p className="text-gray-600">
                Yes, you can inquire about multiple services in a single contact form submission. Our team will 
                provide comprehensive information on all the services you're interested in.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Is there a customer support team for existing clients?</h3>
              <p className="text-gray-600">
                Yes, we have a dedicated customer support team for our existing clients. You can reach them through 
                the same contact information provided on this page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
