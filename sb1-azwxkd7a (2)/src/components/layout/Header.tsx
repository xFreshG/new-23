import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    if (path.startsWith('#') && location.pathname === '/') {
      const element = document.getElementById(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(path.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsMenuOpen(false);
        }
      }, 100);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-white/90 backdrop-blur-md py-3'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between relative z-50">
          <button 
            onClick={handleLogoClick}
            className="flex items-center"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              M&E AI
            </span>
          </button>
          
          <nav className="hidden md:flex items-center space-x-8">
            {[
              ['#services', 'Leistungen'],
              ['#case-studies', 'Projekte'],
              ['#team', 'Team'],
              ['#testimonials', 'Referenzen'],
              ['#contact', 'Kontakt']
            ].map(([path, label]) => (
              <button
                key={path}
                onClick={() => handleNavigation(path)}
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
              >
                {label}
              </button>
            ))}
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => handleNavigation('#contact')}
            >
              Kontakt aufnehmen
            </Button>
          </nav>
          
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-lg pb-6 pt-2">
          <Container>
            <div className="flex flex-col space-y-4">
              {[
                ['#services', 'Leistungen'],
                ['#case-studies', 'Projekte'],
                ['#team', 'Team'],
                ['#testimonials', 'Referenzen'],
                ['#contact', 'Kontakt']
              ].map(([path, label]) => (
                <button
                  key={path}
                  onClick={() => handleNavigation(path)}
                  className="py-2 text-gray-700 hover:text-indigo-600 font-medium"
                >
                  {label}
                </button>
              ))}
              <Button 
                variant="primary"
                onClick={() => handleNavigation('#contact')}
              >
                Kontakt aufnehmen
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;