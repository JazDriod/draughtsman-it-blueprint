
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Ruler, Building } from 'lucide-react';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Professional
              <span className="text-primary block">Building Plans</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Expert draughtsman services for residential and commercial building projects. 
              From concept to construction-ready plans, I bring your vision to life with precision and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" onClick={scrollToContact} className="text-lg px-8 py-3">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                View Portfolio
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="bg-primary/10 p-6 rounded-lg flex flex-col items-center text-center">
                <Building className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold text-foreground">Residential</h3>
                <p className="text-sm text-muted-foreground mt-2">Custom home designs</p>
              </div>
              <div className="bg-primary/10 p-6 rounded-lg flex flex-col items-center text-center">
                <Ruler className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold text-foreground">Precision</h3>
                <p className="text-sm text-muted-foreground mt-2">Accurate measurements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
