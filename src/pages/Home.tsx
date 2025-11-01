import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { 
  Wrench, 
  Paintbrush, 
  Stethoscope, 
  Cog, 
  Phone,
  ShoppingBag,
  ArrowRight 
} from 'lucide-react';

const Home = () => {
  const featuredProducts = products.slice(0, 6);

  const services = [
    {
      icon: Wrench,
      title: 'Panel Beating',
      description: 'Expert collision repair and bodywork restoration',
      path: '/panel-beating',
    },
    {
      icon: Paintbrush,
      title: 'Spray Painting',
      description: 'Professional automotive painting and refinishing',
      path: '/spray-painting',
    },
    {
      icon: Stethoscope,
      title: 'Diagnostics',
      description: 'Advanced OBD scanning and vehicle diagnostics',
      path: '/diagnostics',
    },
    {
      icon: Cog,
      title: 'Engine Services',
      description: 'Complete engine repair and maintenance',
      path: '/engine-services',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              We Fix, We Paint, We Supply
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Your trusted partner for automotive services and genuine spare parts
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild className="gap-2">
                <Link to="/parts/omoda">
                  <ShoppingBag className="h-5 w-5" />
                  Browse Spare Parts
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="gap-2 bg-white/10 hover:bg-white/20 text-white border-white/30">
                <a href="tel:+27123456789">
                  <Phone className="h-5 w-5" />
                  Book a Service
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional automotive services with expert technicians and state-of-the-art equipment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className="group hover:shadow-automotive transition-all duration-300 animate-scale-in border-0 bg-gradient-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Link to={service.path}>
                    <Button variant="ghost" className="gap-2 group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Featured Spare Parts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Genuine parts for Chinese and mainstream brands
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild className="gap-2">
              <Link to="/parts/omoda">
                View All Parts
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Expert Automotive Service?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Contact us today for professional repairs, quality parts, and excellent service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="gap-2">
              <a href="tel:+27123456789">
                <Phone className="h-5 w-5" />
                Call: +27 12 345 6789
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2 bg-white/10 hover:bg-white/20 text-white border-white/30">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
