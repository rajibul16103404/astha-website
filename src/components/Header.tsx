
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/lovable-uploads/0c304457-f71b-4d2c-be41-05d9307c31a8.png" alt="Astha Insight Logo" className="h-20 w-40 object-cover" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-secondary font-medium hover:text-primary transition-colors">Home</Link>
          <Link to="/services" className="text-secondary font-medium hover:text-primary transition-colors">Services</Link>
          <Link to="/products" className="text-secondary font-medium hover:text-primary transition-colors">Products</Link>
          <Link to="/team" className="text-secondary font-medium hover:text-primary transition-colors">Team</Link>
          <Link to="/testimonials" className="text-secondary font-medium hover:text-primary transition-colors">Case Studies</Link>
          <Link to="/contact" className="text-secondary font-medium hover:text-primary transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-6">
              Get a Free Consultation
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-secondary" />
          ) : (
            <Menu className="h-6 w-6 text-secondary" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <Link to="/" className="text-secondary font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/services" className="text-secondary font-medium" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link to="/products" className="text-secondary font-medium" onClick={() => setMobileMenuOpen(false)}>Products</Link>
            <Link to="/team" className="text-secondary font-medium" onClick={() => setMobileMenuOpen(false)}>Team</Link>
            <Link to="/testimonials" className="text-secondary font-medium" onClick={() => setMobileMenuOpen(false)}>Case Studies</Link>
            <Link to="/contact" className="text-secondary font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Button asChild className="w-full">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Get a Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
