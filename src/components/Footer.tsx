
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold text-primary mb-4">
              Blueprint Pro
            </div>
            <p className="text-muted-foreground mb-4">
              Professional draughting services for residential and commercial building projects. 
              Turning your vision into reality with precision and expertise.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>info@blueprintpro.com</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Residential Plans</li>
              <li>Commercial Buildings</li>
              <li>Architectural Drafting</li>
              <li>Building Permits</li>
              <li>Site Planning</li>
              <li>Consultations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-4">
              Contact
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Melbourne, Australia</span>
              </div>
              <div>
                <strong>Hours:</strong> Mon-Fri 8AM-6PM
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Blueprint Pro. All rights reserved. | Professional Building Design Services</p>
        </div>
      </div>
    </footer>
  );
};
