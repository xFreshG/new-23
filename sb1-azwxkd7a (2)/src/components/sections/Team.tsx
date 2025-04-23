import React from 'react';
import { Target, Zap, Users, Award } from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';

type ValueCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <Card className="flex flex-col items-center text-center p-6">
    <div className="p-3 rounded-full bg-indigo-100 text-indigo-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </Card>
);

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Über Uns</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Als KI-begeisterte Experten haben wir es uns zur Aufgabe gemacht, Unternehmen durch 
            innovative KI-Lösungen bei ihren täglichen Herausforderungen zu unterstützen.
          </p>
        </div>

        {/* Mission und Werte */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Target size={24} />}
              title="Unsere Mission"
              description="Wir machen KI-Technologie zugänglich und nutzbar für Unternehmen jeder Größe, um echten Mehrwert zu schaffen."
            />
            <ValueCard
              icon={<Zap size={24} />}
              title="Unsere Vision"
              description="Eine Zukunft, in der KI-gestützte Automatisierung Unternehmen effizienter und erfolgreicher macht."
            />
            <ValueCard
              icon={<Users size={24} />}
              title="Unser Ansatz"
              description="Persönliche Beratung und maßgeschneiderte Lösungen, die genau auf Ihre Bedürfnisse zugeschnitten sind."
            />
          </div>
        </div>

        {/* Warum uns wählen */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center mb-8">Warum M&E AI?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Award className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Expertise</h4>
                <p className="text-gray-600">Langjährige Erfahrung in der Entwicklung und Integration von KI-Lösungen.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Persönliche Betreuung</h4>
                <p className="text-gray-600">Direkter Kontakt zu den Experten und individuelle Beratung.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Target className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Maßgeschneiderte Lösungen</h4>
                <p className="text-gray-600">Keine Standard-Lösungen, sondern auf Ihre Bedürfnisse zugeschnittene Systeme.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Team;