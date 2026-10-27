import React from 'react';
import { Building2, Hammer, Fence, Shovel, Truck, Construction, WrenchIcon, Lightbulb, Waves, Hammer as HammerCustom } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Building2 className="h-12 w-12 text-construction-orange" />,
      title: "Commercial Construction",
      description: "From office buildings to retail spaces, we deliver high-quality commercial construction tailored to your business needs."
    },
    {
      icon: <Hammer className="h-12 w-12 text-construction-orange" />,
      title: "Residential Construction",
      description: "Creating beautiful, functional homes with attention to detail and quality craftsmanship."
    },
    {
      icon: <Fence className="h-12 w-12 text-construction-orange" />,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with our comprehensive renovation and remodeling services."
    },
    {
      icon: <Shovel className="h-12 w-12 text-construction-orange" />,
      title: "Site Development",
      description: "Complete site preparation including excavation, grading, and infrastructure development."
    },
    {
      icon: <Truck className="h-12 w-12 text-construction-orange" />,
      title: "Construction Management",
      description: "Expert oversight of your construction project from planning to completion."
    },
    {
      icon: <Construction className="h-12 w-12 text-construction-orange" />,
      title: "Design-Build Services",
      description: "Streamlined process combining design and construction phases for efficient project delivery."
    },
    {
      icon: <HammerCustom className="h-12 w-12 text-construction-orange" />,
      title: "Woodwork & Fabrication",
      description: "Expert craftsmanship in custom woodwork and fabrication, creating unique and durable solutions for your space."
    },
    {
      icon: <WrenchIcon className="h-12 w-12 text-construction-orange" />,
      title: "Plumbing Services",
      description: "Comprehensive plumbing solutions for both residential and commercial projects, ensuring reliable and efficient systems."
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-construction-orange" />,
      title: "Electrical Work",
      description: "Professional electrical installations and maintenance, prioritizing safety and efficiency in every project."
    },
    {
      icon: <Waves className="h-12 w-12 text-construction-orange" />,
      title: "Swimming Pool Installation",
      description: "Custom swimming pool design and installation, creating luxurious outdoor spaces for your enjoyment."
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 text-construction-navy">Our Services</h2>
          <p className="text-gray-600 text-lg">
            Dod Developers offers a comprehensive range of construction services 
            to meet diverse client needs. From initial concept to project completion, 
            we provide expert solutions at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-construction-navy">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Button 
                variant="link" 
                className="p-0 text-construction-orange hover:text-construction-orange/80 font-medium"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            className="bg-construction-orange hover:bg-construction-orange/90 text-white text-lg py-6 px-8"
            asChild
          >
            <a href="#contact">Request a Service</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
