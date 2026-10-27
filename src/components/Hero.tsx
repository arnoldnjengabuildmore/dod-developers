
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="bg-hero-pattern bg-cover bg-center min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-2xl text-white">
          <h1 className="heading-xl mb-4">
            Building Tomorrow's Vision Today
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Dod Developers brings expertise, innovation, and reliability to every construction project, 
            from concept to completion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-construction-orange hover:bg-construction-orange/90 text-white text-lg py-6 px-8"
            >
              <a href="#contact" className="w-full h-full flex items-center">
                Get a Free Quote
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-black hover:bg-white/11 text-lg py-6 px-8"
            >
              <a href="#projects" className="w-full h-full flex items-center gap-2">
                Our Projects <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
