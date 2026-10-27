import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Projects: React.FC = () => {
  const categories = ['All', 'Commercial', 'Residential', 'Industrial', 'Renovation'];
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Modern Housing Development',
      category: 'Residential',
      image: '/pictures/IMG_1.jpg',
      description: 'Luxurious residential development featuring modern architecture and premium finishes.'
    },
    {
      id: 2,
      title: 'Commercial Complex',
      category: 'Commercial',
      image: '/pictures/IMG_2.jpg',
      description: 'State-of-the-art commercial complex with modern amenities and sustainable design features.'
    },
    {
      id: 3,
      title: 'Industrial Facility',
      category: 'Industrial',
      image: '/pictures/IMG_3.jpg',
      description: 'Large-scale industrial facility with advanced infrastructure and efficient workspace design.'
    },
    {
      id: 4,
      title: 'Executive Office Building',
      category: 'Commercial',
      image: '/pictures/IMG_4.jpg',
      description: 'Premium office building featuring contemporary design and state-of-the-art facilities.'
    },
    {
      id: 5,
      title: 'Mixed-Use Development',
      category: 'Commercial',
      image: '/pictures/IMG_5.jpg',
      description: 'Innovative mixed-use development combining retail, office, and residential spaces.'
    },
    {
      id: 6,
      title: 'Luxury Estate',
      category: 'Residential',
      image: '/pictures/IMG_6.jpg',
      description: 'Custom-designed luxury estate with premium finishes and exclusive amenities.'
    },
    {
      id: 7,
      title: 'Retail Complex Renovation',
      category: 'Renovation',
      image: '/pictures/IMG_7.jpg',
      description: 'Complete renovation and modernization of an existing retail complex.'
    },
    {
      id: 8,
      title: 'Modern Warehouse Facility',
      category: 'Industrial',
      image: '/pictures/IMG_9.jpg',
      description: 'Advanced warehouse facility with cutting-edge logistics infrastructure.'
    },
    {
      id: 9,
      title: 'Corporate Center Renovation',
      category: 'Renovation',
      image: '/pictures/IMG_10.jpg',
      description: 'Comprehensive renovation transforming an existing building into a modern corporate center.'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 text-construction-navy">Our Projects</h2>
          <p className="text-gray-600 text-lg">
            Explore our portfolio of completed projects showcasing our expertise 
            across different construction sectors and our commitment to quality and innovation.
          </p>
        </div>

        <Tabs defaultValue="All" className="mb-12">
          <TabsList className="flex flex-wrap justify-center mb-8">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                onClick={() => setActiveCategory(category)}
                className="text-base px-6 py-2 data-[state=active]:bg-construction-orange data-[state=active]:text-white"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all border border-gray-200">
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="text-sm text-gray-200">{project.category}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-construction-navy">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Button 
                      variant="outline" 
                      className="border-construction-orange text-construction-orange hover:bg-construction-orange hover:text-white transition-colors"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Button 
            className="bg-construction-orange hover:bg-construction-orange/90 text-white text-lg py-6 px-8"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
