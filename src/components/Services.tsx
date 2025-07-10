
import React from 'react';
import { Home, Building2, PenTool, FileText, Compass, Calculator } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Plans",
      description: "Custom home designs, extensions, and renovations with detailed floor plans and elevations."
    },
    {
      icon: Building2,
      title: "Commercial Buildings",
      description: "Office buildings, retail spaces, and industrial facilities with compliance to building codes."
    },
    {
      icon: PenTool,
      title: "Architectural Drafting",
      description: "Professional CAD drawings, technical drawings, and construction documentation."
    },
    {
      icon: FileText,
      title: "Building Permits",
      description: "Complete documentation packages for council submissions and building approvals."
    },
    {
      icon: Compass,
      title: "Site Planning",
      description: "Site analysis, boundary surveys, and development layout planning services."
    },
    {
      icon: Calculator,
      title: "Consultations",
      description: "Project feasibility studies, design consultations, and building regulation advice."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive draughting and architectural planning services to bring your building projects from concept to reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
