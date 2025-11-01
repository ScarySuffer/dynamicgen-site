import { Card, CardContent } from '@/components/ui/card';
import { Wrench, Paintbrush, ShoppingBag, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-hero text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About DynamicGen AutoFix</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Your trusted partner in automotive excellence since 2008
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
              DynamicGen Holdings is a multidisciplinary company dedicated to providing exceptional 
              automotive services and quality spare parts. We specialize in panel beating, spray painting, 
              diagnostics, and engine services, while also supplying genuine parts for both Chinese 
              automotive brands and mainstream manufacturers.
            </p>
            <p className="text-lg text-muted-foreground">
              Our commitment to excellence, combined with our extensive experience and state-of-the-art 
              equipment, ensures that every vehicle we service receives the highest standard of care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center">
              <CardContent className="p-6">
                <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-card-foreground">Expert Repairs</h3>
                <p className="text-sm text-muted-foreground">Professional panel beating and bodywork</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Paintbrush className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-card-foreground">Quality Painting</h3>
                <p className="text-sm text-muted-foreground">Premium spray painting services</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <ShoppingBag className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-card-foreground">Spare Parts</h3>
                <p className="text-sm text-muted-foreground">Genuine parts for all brands</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-card-foreground">15+ Years</h3>
                <p className="text-sm text-muted-foreground">Industry experience</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Brands We Support</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Omoda', 'Chery', 'Jetour', 'Baic', 'Haval', 'Geely', 'Changan', 'GWM', 
                'Toyota', 'VW', 'Hyundai', 'More...'].map(brand => (
                <div key={brand} className="p-4 bg-muted/30 rounded-lg text-center font-semibold text-foreground">
                  {brand}
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-card border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-card-foreground">Why Choose Us?</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Experienced technicians with extensive training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>State-of-the-art diagnostic and repair equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Genuine OEM and quality aftermarket parts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Competitive pricing and transparent quotes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Fast turnaround times without compromising quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">✓</span>
                  <span>Insurance claims assistance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
