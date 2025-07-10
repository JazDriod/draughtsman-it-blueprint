
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Portfolio = () => {
  const projects = [
    {
      title: "Modern Family Home",
      category: "Residential",
      description: "4-bedroom contemporary design with open-plan living and sustainable features.",
      image: "/placeholder.svg"
    },
    {
      title: "Commercial Office Complex",
      category: "Commercial",
      description: "Multi-story office building with modern amenities and energy-efficient design.",
      image: "/placeholder.svg"
    },
    {
      title: "Heritage Renovation",
      category: "Renovation",
      description: "Careful restoration and extension of a heritage-listed property.",
      image: "/placeholder.svg"
    },
    {
      title: "Townhouse Development",
      category: "Multi-Residential",
      description: "Six-unit townhouse complex with shared amenities and private courtyards.",
      image: "/placeholder.svg"
    },
    {
      title: "Retail Shopping Center",
      category: "Commercial",
      description: "Mixed-use development with retail spaces and residential apartments above.",
      image: "/placeholder.svg"
    },
    {
      title: "Luxury Custom Home",
      category: "Residential",
      description: "High-end custom home with premium finishes and smart home integration.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore a selection of our completed projects showcasing diverse architectural styles and building types.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-video bg-muted flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary font-medium">
                    {project.category}
                  </span>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
