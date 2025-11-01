import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cog, Wrench, Droplet, Zap, Phone } from 'lucide-react';

const EngineServices = () => {
  const services = [
    {
      icon: Cog,
      title: 'Engine Overhaul',
      description: 'Complete engine rebuild and restoration services',
      price: 'From R15,000',
    },
    {
      icon: Wrench,
      title: 'Timing Belt Replacement',
      description: 'Expert timing belt and chain replacement',
      price: 'From R2,500',
    },
    {
      icon: Droplet,
      title: 'Oil & Filter Service',
      description: 'Regular maintenance with quality oils and filters',
      price: 'From R850',
    },
    {
      icon: Zap,
      title: 'Spark Plug Replacement',
      description: 'Professional ignition system servicing',
      price: 'From R650',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Engine Services</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Complete engine repair, maintenance, and performance services
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Our Engine Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From routine maintenance to complete engine rebuilds, our certified technicians 
              have the expertise to keep your vehicle running smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-automotive transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">{service.description}</p>
                      <p className="text-lg font-bold text-primary">{service.price}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/30 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Additional Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-background rounded-lg">
                <p className="font-semibold text-card-foreground mb-1">Cooling System</p>
                <p className="text-sm text-muted-foreground">Radiator repair & replacement</p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <p className="font-semibold text-card-foreground mb-1">Fuel System</p>
                <p className="text-sm text-muted-foreground">Injector cleaning & repair</p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <p className="font-semibold text-card-foreground mb-1">Exhaust System</p>
                <p className="text-sm text-muted-foreground">Muffler & pipe replacement</p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <p className="font-semibold text-card-foreground mb-1">Belt Replacement</p>
                <p className="text-sm text-muted-foreground">Serpentine & drive belts</p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <p className="font-semibold text-card-foreground mb-1">Valve Adjustments</p>
                <p className="text-sm text-muted-foreground">Precision valve timing</p>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <p className="font-semibold text-card-foreground mb-1">Engine Tuning</p>
                <p className="text-sm text-muted-foreground">Performance optimization</p>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-hero text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Schedule Your Service Today</h3>
              <p className="mb-6 text-white/90 max-w-2xl mx-auto">
                Contact our expert technicians for a consultation and quote
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

export default EngineServices;
