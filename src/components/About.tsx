
import React from 'react';
import { Award, Users, Clock, CheckCircle } from 'lucide-react';

export const About = () => {
  const stats = [
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Clock, number: "1000+", label: "Projects Completed" },
    { icon: CheckCircle, number: "98%", label: "Approval Rate" }
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              About Blueprint Pro
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              With over 15 years of experience in architectural draughting and building design, 
              I specialize in creating detailed, accurate, and buildable plans for residential 
              and commercial projects.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              My commitment to precision, attention to detail, and understanding of building 
              regulations ensures that every project meets the highest standards and gets 
              approved by councils efficiently.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground">Qualified Building Designer</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground">AutoCAD & Revit Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground">Building Code Expert</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground">Sustainable Design Advocate</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center"
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
