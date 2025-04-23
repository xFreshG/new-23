import React from 'react';
import Container from '../../components/ui/Container';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';

const SupportBotDemo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="flex-grow py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Support Chatbot Demo</h1>
          <p className="text-gray-600 mb-8">
            Testen Sie unseren KI-gestützten Support-Chatbot. 
            Der Bot beantwortet Kundenanfragen rund um die Uhr und übergibt bei Bedarf an menschliche Mitarbeiter.
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="text-center mb-8">
              <p className="text-gray-600 mb-4">Demo wird in Kürze verfügbar sein.</p>
            </div>
            
            <div className="aspect-video rounded-lg overflow-hidden border-2 border-dashed border-gray-300 flex items-center justify-center">
              <p className="text-gray-500">Demo-Version wird vorbereitet</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Funktionen</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Automatische Anfragenbearbeitung</li>
                <li>Intelligente Eskalation</li>
                <li>Multi-Kanal Support</li>
                <li>Lernfähiges Antwortsystem</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Technische Details</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Machine Learning</li>
                <li>Intent Recognition</li>
                <li>Knowledge Base</li>
                <li>Ticket System</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button variant="primary" onClick={() => navigate('/demos/calendar-bot')}>
                Kalender Bot Demo
              </Button>
              <Button variant="outline" onClick={() => navigate('/demos/voice-agent')}>
                Voice Agent Demo
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default SupportBotDemo;