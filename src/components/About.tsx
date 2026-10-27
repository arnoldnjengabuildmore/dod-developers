
import React from 'react';
import { HardHat, Building, Wrench, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  const features = [
    {
      icon: <HardHat className="h-10 w-10 text-construction-orange" />,
      title: "Expert Team",
      description: "Our certified professionals bring decades of combined experience to every project."
    },
    {
      icon: <Building className="h-10 w-10 text-construction-orange" />,
      title: "Quality Construction",
      description: "We use premium materials and advanced techniques to deliver exceptional results."
    },
    {
      icon: <Wrench className="h-10 w-10 text-construction-orange" />,
      title: "Innovative Solutions",
      description: "Creative approaches to complex construction challenges, delivering efficient outcomes."
    },
    {
      icon: <Truck className="h-10 w-10 text-construction-orange" />,
      title: "On-time Delivery",
      description: "We pride ourselves on completing projects within schedule and budget constraints."
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 text-construction-navy">About Dod Developers</h2>
          <p className="text-gray-600 text-lg">
            With over 15 years of experience in the construction industry, Dod Developers has established 
            a reputation for excellence, reliability, and innovative solutions. We specialize in both residential 
            and commercial construction, bringing our expertise to every project we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-construction-navy">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-construction-lightGray p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-md mb-4 text-construction-navy">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                At Dod Developers, our mission is to deliver exceptional construction services that exceed client 
                expectations, while maintaining the highest standards of safety, quality, and sustainability in everything we do.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <h4 className="text-3xl font-bold text-construction-orange">500+</h4>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <h4 className="text-3xl font-bold text-construction-orange">15+</h4>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="bg-construction-navy p-6 rounded-lg text-white">
              <h3 className="heading-md mb-4">Why Choose Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-construction-orange rounded-full p-1">
                    <svg className="h-3 w-3 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Proven track record of successful projects</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-construction-orange rounded-full p-1">
                    <svg className="h-3 w-3 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Transparent communication throughout the process</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-construction-orange rounded-full p-1">
                    <svg className="h-3 w-3 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Commitment to safety and quality standards</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 bg-construction-orange rounded-full p-1">
                    <svg className="h-3 w-3 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Customized solutions for unique requirements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
