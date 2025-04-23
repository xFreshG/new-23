import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import LeadCaptureDemo from './pages/demos/LeadCaptureDemo';
import SupportBotDemo from './pages/demos/SupportBotDemo';
import CalendarBotDemo from './pages/demos/CalendarBotDemo';
import VoiceAgentDemo from './pages/demos/VoiceAgentDemo';
import Portfolio from './pages/Portfolio';

function App() {
  useEffect(() => {
    document.title = 'M&E AI - Intelligente Automatisierung für Ihr Unternehmen';
    
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      
      if (link) {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };
    
    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);
  
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demos/lead-capture" element={<LeadCaptureDemo />} />
          <Route path="/demos/support-bot" element={<SupportBotDemo />} />
          <Route path="/demos/calendar-bot" element={<CalendarBotDemo />} />
          <Route path="/demos/voice-agent" element={<VoiceAgentDemo />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;