import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Wrench } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  const brands = [
    'Omoda', 'Chery', 'Jetour', 'Baic', 'Haval', 'Geely', 'Changan', 'GWM',
    'Toyota', 'VW', 'Hyundai'
  ];

  const services = [
    { name: 'Panel Beating', path: '/panel-beating' },
    { name: 'Spray Painting', path: '/spray-painting' },
    { name: 'Diagnostics', path: '/diagnostics' },
    { name: 'Engine Services', path: '/engine-services' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Wrench className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground leading-tight">DynamicGen</span>
              <span className="text-xs text-muted-foreground leading-tight">AutoFix</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            
            <div className="relative group">
              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Spare Parts
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {brands.map(brand => (
                    <Link
                      key={brand}
                      to={`/parts/${brand.toLowerCase()}`}
                      className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted transition-colors"
                    >
                      {brand}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Services
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {services.map(service => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-card-foreground hover:bg-muted transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </Link>

            <Link to="/cart" className="relative">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4 animate-slide-in">
            <div className="space-y-4">
              <Link
                to="/"
                className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-2">Spare Parts</p>
                <div className="pl-4 space-y-2">
                  {brands.map(brand => (
                    <Link
                      key={brand}
                      to={`/parts/${brand.toLowerCase()}`}
                      className="block text-sm text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {brand}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-2">Services</p>
                <div className="pl-4 space-y-2">
                  {services.map(service => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block text-sm text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/about"
                className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
