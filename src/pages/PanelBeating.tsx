import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const PanelBeating = () => {
  const services = [
    'Collision Repair',
    'Dent Removal',
    'Frame Straightening',
    'Rust Repair',
    'Body Panel Replacement',
    'Welding Services',
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Panel Beating Services</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Expert collision repair and bodywork restoration for all vehicle makes and models
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Professional Bodywork</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our experienced panel beaters use state-of-the-art equipment and techniques to restore 
              your vehicle to its pre-accident condition. We handle everything from minor dents to 
              major collision repairs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {services.map(service => (
                <Card key={service} className="border-l-4 border-l-primary">
                  <CardContent className="p-4">
                    <p className="font-semibold text-card-foreground">{service}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-card border-0">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">Contact Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a href="tel:+27123456789" className="font-semibold text-card-foreground hover:text-primary">
                        +27 12 345 6789
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:info@dynamicgen.co.za" className="font-semibold text-card-foreground hover:text-primary">
                        info@dynamicgen.co.za
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold text-card-foreground">Pretoria, South Africa</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Hours</p>
                      <p className="font-semibold text-card-foreground">Mon-Fri: 8AM - 5PM</p>
                      <p className="font-semibold text-card-foreground">Sat: 8AM - 1PM</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-6" size="lg">
                  Book an Appointment
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-accent text-accent-foreground">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Insurance Claims Welcome</h4>
                <p>
                  We work with all major insurance companies and can assist with the claims process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <p className="text-muted-foreground">Vehicles Repaired</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelBeating;
