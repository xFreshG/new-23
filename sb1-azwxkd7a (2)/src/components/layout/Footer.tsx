import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import Container from '../ui/Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text mb-4">
              M&E AI
            </h3>
            <p className="text-gray-400 mb-6">
              Wir transformieren Unternehmen durch innovative KI-Lösungen für mehr Effizienz und Wachstum.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">KI-Beratung</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Prozessautomatisierung</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Predictive Maintenance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Computer Vision</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Datenanalyse</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Über uns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Referenzen</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Karriere</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-indigo-400 mr-2 mt-0.5" />
                <span className="text-gray-400">Technologiepark 1, 12345 Musterstadt</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-indigo-400 mr-2" />
                <span className="text-gray-400">+49 (0) 123 456789</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-indigo-400 mr-2" />
                <span className="text-gray-400">info@me-ai.de</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} M&E AI Automation Systems. Alle Rechte vorbehalten.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;