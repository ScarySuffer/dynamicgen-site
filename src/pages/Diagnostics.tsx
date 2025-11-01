import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, CheckCircle } from 'lucide-react';

const Diagnostics = () => {
  const services = [
    'OBD-II Scanning',
    'Engine Diagnostics',
    'Transmission Analysis',
    'ABS & Brake System',
    'Airbag System Check',
    'Electrical System Testing',
    'Emission Testing',
    'Performance Analysis',
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Vehicle Diagnostics</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Advanced diagnostic services using state-of-the-art OBD tools and software
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Comprehensive Vehicle Analysis</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our advanced diagnostic equipment can read and interpret error codes from all major vehicle 
              systems. We identify issues quickly and accurately, saving you time and money on repairs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {services.map(service => (
                <div key={service} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="font-medium text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-gradient-card border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Basic Diagnostic Scan</h3>
                <p className="text-3xl font-bold text-primary mb-2">R350</p>
                <p className="text-muted-foreground mb-4">Complete OBD-II scan with error code reading</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Engine code reading</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Error code interpretation</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Diagnostic report</span>
                  </li>
                </ul>
                <Button className="w-full">Book Now</Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Full System Analysis</h3>
                <p className="text-3xl font-bold text-primary mb-2">R850</p>
                <p className="text-muted-foreground mb-4">Comprehensive multi-system diagnostic check</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>All system scanning</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Performance analysis</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Detailed recommendations</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Free follow-up scan</span>
                  </li>
                </ul>
                <Button className="w-full">Book Now</Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Need Diagnostic Services?</h3>
              <p className="mb-6 text-primary-foreground/90">
                Call us today to schedule your vehicle diagnostic appointment
              </p>
              <Button variant="secondary" size="lg" className="gap-2">
                <Phone className="h-5 w-5" />
                Call +27 12 345 6789
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Diagnostics;
