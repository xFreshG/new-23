import React from 'react';
import Container from '../components/ui/Container';
import { Code, Globe, Zap } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Moderne E-Commerce-Plattform mit headless CMS und optimierter Performance',
    image: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Next.js', 'TailwindCSS', 'Stripe', 'Sanity.io'],
    features: [
      'Headless CMS Integration',
      'Optimierte Performance',
      'Responsive Design',
      'SEO-Optimierung'
    ]
  },
  {
    title: 'SaaS Dashboard',
    description: 'Benutzerfreundliches Dashboard für SaaS-Anwendung mit Echtzeit-Daten',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'TailwindCSS', 'Chart.js', 'WebSocket'],
    features: [
      'Echtzeit-Updates',
      'Interaktive Grafiken',
      'Benutzerfreundliche UI',
      'Responsive Design'
    ]
  },
  {
    title: 'Corporate Website',
    description: 'Professionelle Unternehmenswebsite mit modernem Design',
    image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'TailwindCSS', 'Framer Motion', 'Contentful'],
    features: [
      'Animationen',
      'Blog-System',
      'Mehrsprachigkeit',
      'Performance-Optimierung'
    ]
  }
];

const Portfolio: React.FC = () => {
  return (
    <main className="flex-grow py-20">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Unsere Webentwicklungs-Projekte</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unsere maßgeschneiderten Weblösungen, die Performance, Design und Benutzerfreundlichkeit vereinen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div 
                className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <ul className="space-y-2 text-gray-600">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-indigo-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Unsere Entwicklungsphilosophie</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wir entwickeln nicht nur Websites, sondern schaffen digitale Erlebnisse, die Ihre Zielgruppe begeistern.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg">
                <Code className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Clean Code</h3>
              <p className="text-gray-600">
                Wartbarer und skalierbarer Code nach modernsten Standards
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg">
                <Zap className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Performance</h3>
              <p className="text-gray-600">
                Optimierte Ladezeiten und effiziente Ressourcennutzung
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-4 shadow-lg">
                <Globe className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">SEO</h3>
              <p className="text-gray-600">
                Optimale Sichtbarkeit in Suchmaschinen durch SEO-Best-Practices
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Portfolio;