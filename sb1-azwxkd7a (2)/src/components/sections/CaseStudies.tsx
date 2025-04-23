import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Bot, Brain, MessageSquare, Calendar, Code } from 'lucide-react';

type TechShowcase = {
  id: number;
  title: string;
  category: string;
  description: string;
  features: string[];
  imageUrl: string;
  technologies: string[];
  demoUrl: string;
  icon: React.ReactNode;
};

const showcases: TechShowcase[] = [
  {
    id: 1,
    title: 'Lead Capture Chatbot',
    category: 'Kundengewinnung',
    description: 'Unser intelligenter Lead-Capture Chatbot qualifiziert potenzielle Kunden und überträgt die Leads automatisch in Ihr CRM-System. Erleben Sie, wie der Bot Interessenten identifiziert und Verkaufschancen generiert.',
    features: [
      'Intelligente Leadqualifizierung',
      'Nahtlose CRM-Integration',
      '24/7 Verfügbarkeit',
      'Personalisierte Gesprächsführung'
    ],
    imageUrl: 'https://images.pexels.com/photos/8353841/pexels-photo-8353841.jpeg',
    technologies: ['Natural Language Processing', 'CRM-Integration', 'Lead Scoring', 'Conversion Tracking'],
    demoUrl: '/demos/lead-capture',
    icon: <Bot className="w-6 h-6" />
  },
  {
    id: 2,
    title: 'Support Chatbot',
    category: 'Kundenservice',
    description: 'Unser KI-gestützter Support-Chatbot beantwortet Kundenanfragen rund um die Uhr. Testen Sie, wie der Bot häufige Fragen beantwortet und bei Bedarf an menschliche Mitarbeiter übergibt.',
    features: [
      'Automatische Anfragenbearbeitung',
      'Intelligente Eskalation',
      'Multi-Kanal Support',
      'Lernfähiges Antwortsystem'
    ],
    imageUrl: 'https://images.pexels.com/photos/7709087/pexels-photo-7709087.jpeg',
    technologies: ['Machine Learning', 'Intent Recognition', 'Knowledge Base', 'Ticket System'],
    demoUrl: '/demos/support-bot',
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    id: 3,
    title: 'Termin-Buchungs Bot',
    category: 'Terminmanagement',
    description: 'Erleben Sie unseren intelligenten Terminbuchungs-Assistenten in Aktion. Der Bot koordiniert Termine, sendet Erinnerungen und synchronisiert sich mit Ihrem Kalender.',
    features: [
      'Automatische Terminkoordination',
      'Kalenderintegration',
      'Erinnerungssystem',
      'Konfliktmanagement'
    ],
    imageUrl: 'https://images.pexels.com/photos/5386754/pexels-photo-5386754.jpeg',
    technologies: ['Calendar API', 'Scheduling Algorithm', 'Email Integration', 'Reminder System'],
    demoUrl: '/demos/calendar-bot',
    icon: <Calendar className="w-6 h-6" />
  },
  {
    id: 4,
    title: 'KI Voice Agent',
    category: 'Sprachassistenz',
    description: 'Testen Sie unseren KI-gestützten Sprachassistenten für die telefonische Kundenbetreuung. Erleben Sie natürliche Gespräche und effiziente Anfragebearbeitung.',
    features: [
      'Natürliche Sprachverarbeitung',
      'Automatische Anrufannahme',
      'Intelligente Gesprächsführung',
      'Nahtlose Weiterleitung'
    ],
    imageUrl: 'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg',
    technologies: ['Speech Recognition', 'Voice Synthesis', 'Dialogue Management', 'Call Routing'],
    demoUrl: '/demos/voice-agent',
    icon: <Brain className="w-6 h-6" />
  },
  {
    id: 5,
    title: 'Professionelle Websites',
    category: 'Web Development',
    description: 'Wir entwickeln maßgeschneiderte, hochperformante Websites für Ihr Unternehmen. Von der Konzeption bis zur Umsetzung erhalten Sie eine professionelle Web-Präsenz, die Ihre Zielgruppe begeistert.',
    features: [
      'Individuelles Design',
      'Optimale Performance',
      'SEO-optimiert',
      'Mobile-First Entwicklung'
    ],
    imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
    technologies: ['React', 'Next.js', 'TailwindCSS', 'Headless CMS'],
    demoUrl: '/portfolio',
    icon: <Code className="w-6 h-6" />
  }
];

const CaseStudies: React.FC = () => {
  const [activeShowcase, setActiveShowcase] = useState<TechShowcase>(showcases[0]);
  const navigate = useNavigate();
  
  const handleDemoClick = (url: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(url);
  };
  
  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unser umfassendes Angebot an KI-Lösungen und erfahren Sie, wie wir Ihr Unternehmen digitalisieren können.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-3">Unsere Services</h3>
              <div className="space-y-4">
                {showcases.map((showcase) => (
                  <button
                    key={showcase.id}
                    onClick={() => setActiveShowcase(showcase)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      activeShowcase.id === showcase.id
                        ? 'bg-indigo-50 border-l-4 border-indigo-600'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-indigo-600">
                        {showcase.icon}
                      </div>
                      <div>
                        <p className="font-medium text-lg">{showcase.title}</p>
                        <p className="text-sm text-gray-500">{showcase.category}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div 
                className="h-64 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${activeShowcase.imageUrl})` }}
              ></div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {activeShowcase.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{activeShowcase.title}</h3>
                <p className="text-indigo-600 mb-4">{activeShowcase.category}</p>
                <p className="text-gray-600 mb-6">{activeShowcase.description}</p>
                
                <h4 className="font-semibold text-lg mb-3">Kernfunktionen:</h4>
                <ul className="list-disc list-inside mb-6 space-y-2 text-gray-600">
                  {activeShowcase.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                <Button 
                  variant="primary"
                  onClick={() => handleDemoClick(activeShowcase.demoUrl)}
                >
                  Demo testen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CaseStudies;