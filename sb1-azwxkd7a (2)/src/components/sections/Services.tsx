import React from 'react';
import { MessageSquare, Calendar, Code, Bot, Users, Globe, Mic } from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="h-full group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="flex flex-col items-center text-center relative z-10">
        <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
          <div className="transform transition-transform duration-500 group-hover:scale-110">
            <div className="text-indigo-600">{icon}</div>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-indigo-600">{title}</h3>
        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">{description}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-purple-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </Card>
  );
};

const services = [
  {
    icon: <Bot className="w-8 h-8" />,
    title: 'Lead Capture Bots',
    description: 'Intelligente Chatbots, die potenzielle Kunden qualifizieren und Leads automatisch in Ihr CRM-System übertragen.'
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Customer Support Bots',
    description: 'KI-gestützte Support-Bots, die 24/7 Kundenanfragen beantworten und den Kundenservice entlasten.'
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: 'Termin-Buchungs Bots',
    description: 'Automatisierte Terminvereinbarung mit intelligenter Kalenderintegration und Erinnerungsfunktion.'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Website Entwicklung',
    description: 'Professionelle, moderne Websites mit optimaler Performance und benutzerfreundlichem Design.'
  },
  {
    icon: <Mic className="w-8 h-8" />,
    title: 'KI Voice Agenten',
    description: 'Natürlich klingende Sprachassistenten für telefonische Kundenbetreuung und automatisierte Anrufdienste.'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'KI-Beratung',
    description: 'Strategische Beratung zur optimalen Nutzung von Chatbots und KI-Lösungen in Ihrem Unternehmen.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Leistungen</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Von intelligenten Chatbots bis zur Website-Entwicklung - wir bieten alle Lösungen für Ihre digitale Präsenz.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;