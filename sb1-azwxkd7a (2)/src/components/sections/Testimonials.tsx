import React, { useState, useEffect, useRef } from 'react';
import Container from '../ui/Container';
import { Star, Quote, Calendar, CheckCircle, Building2 } from 'lucide-react';

type Testimonial = {
  id: number;
  content: string;
  position: string;
  industry: string;
  companySize: string;
  rating: number;
  projectType: string;
  date: string;
  region: string;
  verificationBadge: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Der Chatbot entlastet unser Kundenservice-Team erheblich. Nach einer kurzen Einarbeitungsphase konnten wir die Antwortzeit für Standardanfragen von durchschnittlich 2 Stunden auf wenige Sekunden reduzieren.",
    position: "Leiter Kundenservice",
    industry: "Maschinenbau",
    companySize: "250+ Mitarbeiter",
    rating: 4,
    projectType: "KI-Kundenservice",
    date: "Q4/2023",
    region: "Süddeutschland",
    verificationBadge: "Verifizierter Kunde"
  },
  {
    id: 2,
    content: "Die automatisierte Terminbuchung hat unseren Verwaltungsaufwand deutlich reduziert. Besonders wertvoll sind die automatischen Erinnerungen, die die No-Show-Rate um 60% gesenkt haben.",
    position: "Praxismanagement",
    industry: "Gesundheitswesen",
    companySize: "15+ Mitarbeiter",
    rating: 4,
    projectType: "Terminbuchungssystem",
    date: "Q1/2024",
    region: "Westdeutschland",
    verificationBadge: "Verifizierter Kunde"
  },
  {
    id: 3,
    content: "Die neue Unternehmenswebsite hat unsere Erwartungen übertroffen. Seit dem Launch haben sich die Conversion-Rates verdoppelt und die Bounce-Rate ist um 40% gesunken.",
    position: "Marketing-Leitung",
    industry: "Einzelhandel",
    companySize: "100+ Mitarbeiter",
    rating: 5,
    projectType: "Webentwicklung",
    date: "Q4/2023",
    region: "Mitteldeutschland",
    verificationBadge: "Verifizierter Kunde"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  
  const resetTimeout = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };
  
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(
      () => setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length),
      8000
    );
    
    return () => {
      resetTimeout();
    };
  }, [activeIndex]);
  
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Kundenstimmen</h2>
          <p className="text-indigo-200 max-w-3xl mx-auto">
            Erfahrungsberichte unserer Kunden mit messbaren Ergebnissen
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
                    <div className="flex flex-col gap-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-indigo-600/20 rounded-lg p-3">
                          <Quote className="w-6 h-6 text-indigo-300" />
                        </div>
                        <div>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-500/20 rounded-full text-sm">
                              <Building2 className="w-4 h-4" />
                              {testimonial.industry}
                            </span>
                            <span className="inline-block px-3 py-1 bg-indigo-500/20 rounded-full text-sm">
                              {testimonial.region}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-indigo-300 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{testimonial.date}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-lg italic mb-6 leading-relaxed">"{testimonial.content}"</p>
                        <div className="flex items-center gap-4 mb-2">
                          <div className="flex items-center gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <div className="flex items-center gap-2 text-indigo-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>{testimonial.verificationBadge}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t border-indigo-800/30 pt-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">{testimonial.position}</p>
                            <p className="text-indigo-300 text-sm">{testimonial.companySize}</p>
                          </div>
                          <span className="px-3 py-1 bg-indigo-500/20 rounded-full text-sm">
                            {testimonial.projectType}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-12 h-1 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-white w-16' 
                    : 'bg-indigo-300/50 hover:bg-indigo-300'
                }`}
                onClick={() => setActiveIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;