import React from 'react';
import Container from '../../components/ui/Container';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';

const CalendarBotDemo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="flex-grow py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Termin-Buchungs Bot Demo</h1>
          <p className="text-gray-600 mb-8">
            Erleben Sie unseren intelligenten Terminbuchungs-Assistenten in Aktion. 
            Der Bot koordiniert Termine, sendet Erinnerungen und synchronisiert sich mit Ihrem Kalender.
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
                <li>Automatische Terminkoordination</li>
                <li>Kalenderintegration</li>
                <li>Erinnerungssystem</li>
                <li>Konfliktmanagement</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Technische Details</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Calendar API</li>
                <li>Scheduling Algorithm</li>
                <li>Email Integration</li>
                <li>Reminder System</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button variant="primary" onClick={() => navigate('/demos/voice-agent')}>
                Voice Agent Demo
              </Button>
              <Button variant="outline" onClick={() => navigate('/demos/lead-capture')}>
                Lead Capture Demo
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default CalendarBotDemo;