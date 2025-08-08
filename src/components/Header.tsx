import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const sections = ['hero', 'about', 'service', 'products', 'quote', 'testimonials', 'contact'];


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const scrollY = window.scrollY + window.innerHeight / 2;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pagesDropdownOpen &&
        dropdownRef.current &&
        toggleButtonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        setPagesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [pagesDropdownOpen]);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#service' },
    { name: 'Products', href: '#products' },
    { name: 'Quote', href: '#quote' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const renderLink = (item: any) => {
    const sectionId = item.href.replace('#', '');
    const isActive = activeSection === sectionId;

    return (
      <button
        key={item.name}
        onClick={() => {
          setMobileMenuOpen(false);
          if (location.pathname !== '/') {
            sessionStorage.setItem('scrollToSection', sectionId);
            navigate('/');
          } else {
            const el = document.getElementById(sectionId);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }}
        className={cn(
          'text-secondary font-medium transition-colors',
          isActive && 'text-primary font-semibold'
        )}
      >
        {item.name}
      </button>
    );
  };

  return (
    <header
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/lovable-uploads/0c304457-f71b-4d2c-be41-05d9307c31a8.png"
            alt="Astha Insight Logo"
            className="h-20 w-40 object-cover"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 relative">
          {navItems.map(renderLink)}

          {/* Pages Dropdown */}
          <div className="relative">
            <button
              ref={toggleButtonRef}
              onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
              className="text-secondary font-medium transition-colors hover:text-primary"
            >
              Pages ▾
            </button>

            {pagesDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-md z-50"
              >
                <a
                  href="/services"
                  className="block px-4 py-2 font-semibold text-md text-secondary hover:text-primary"
                >
                  Services
                </a>
                <a
                  href="/products"
                  className="block px-4 py-2 font-semibold text-md text-secondary hover:text-primary"
                >
                  Products
                </a>
                <a
                  href="/team"
                  className="block px-4 py-2 font-semibold text-md text-secondary hover:text-primary"
                >
                  Teams
                </a>
                <a
                  href="/testimonials"
                  className="block px-4 py-2 font-semibold text-md text-secondary hover:text-primary"
                >
                  Case Study
                </a>
                <a
                  href="/contact"
                  className="block px-4 py-2 font-semibold text-md text-secondary hover:text-primary"
                >
                  Contact
                </a>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <a
              href="#contact"
              className="bg-primary hover:bg-primary/90 text-white px-6"
            >
              Get a Free Consultation
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-secondary" />
          ) : (
            <Menu className="h-6 w-6 text-secondary" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="flex flex-col space-y-4 px-4 py-6">
            {navItems.map(renderLink)}
            <Button asChild className="w-full">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Free Consultation
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
