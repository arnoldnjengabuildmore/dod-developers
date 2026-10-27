
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Building className="h-6 w-6 text-construction-orange" />,
      title: "Our Office",
      details: "Along "
    },
    {
      icon: <Phone className="h-6 w-6 text-construction-orange" />,
      title: "Phone",
      details: "(+254)722 492 440"
    },
    {
      icon: <Mail className="h-6 w-6 text-construction-orange" />,
      title: "Email",
      details: "info@doddevelopers.com"
    },
    {
      icon: <Clock className="h-6 w-6 text-construction-orange" />,
      title: "Working Hours",
      details: "Mon - Fri: 8AM - 5PM"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 text-construction-navy">Contact Us</h2>
          <p className="text-gray-600 text-lg">
            Have a construction project in mind? Get in touch with our team to discuss 
            how Dod Developers can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="heading-md mb-6 text-construction-navy">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="John Doe" 
                        required 
                        className="border-gray-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="john@example.com" 
                        required 
                        className="border-gray-300"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        placeholder="(123) 456-7890" 
                        className="border-gray-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleChange} 
                        placeholder="Project Inquiry" 
                        required 
                        className="border-gray-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      placeholder="Tell us about your project..." 
                      required 
                      className="min-h-[150px] border-gray-300"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-construction-orange hover:bg-construction-orange/90 text-white py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-construction-navy">{item.title}</h4>
                    <p className="text-gray-600">{item.details}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
{/*             
            <Card className="border-0 shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-300">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjciTiAxMjLCsDI1JzEwLjAiVw!5e0!3m2!1sen!2sus!4v1620841112345!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy"
                    title="Office Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
 */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
