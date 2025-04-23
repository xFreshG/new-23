import React from 'react';
import Container from '../../components/ui/Container';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';

const VoiceAgentDemo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="flex-grow py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">KI Voice Agent Demo</h1>
          <p className="text-gray-600 mb-8">
            Testen Sie unseren KI-gestützten Sprachassistenten für die telefonische Kundenbetreuung. 
            Erleben Sie natürliche Gespräche und effiziente Anfragebearbeitung.
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
                <li>Natürliche Sprachverarbeitung</li>
                <li>Automatische Anrufannahme</li>
                <li>Intelligente Gesprächsführung</li>
                <li>Nahtlose Weiterleitung</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Technische Details</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Speech Recognition</li>
                <li>Voice Synthesis</li>
                <li>Dialogue Management</li>
                <li>Call Routing</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button variant="primary" onClick={() => navigate('/demos/lead-capture')}>
                Lead Capture Demo
              </Button>
              <Button variant="outline" onClick={() => navigate('/demos/support-bot')}>
                Support Bot Demo
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default VoiceAgentDemo;