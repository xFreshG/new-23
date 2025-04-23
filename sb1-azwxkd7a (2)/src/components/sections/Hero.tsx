import React, { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import TypewriterEffect from '../ui/TypewriterEffect';

const Hero: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const firstLineRef = useRef<HTMLSpanElement>(null);
  const secondLineRef = useRef<HTMLSpanElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initially hide all content
    const content = contentRef.current;
    if (content) {
      content.style.opacity = '0';
    }

    // Start showing content after 3D animation (approximately 2.5s)
    setTimeout(() => {
      if (content) {
        content.style.transition = 'opacity 1s ease';
        content.style.opacity = '1';
      }

      // First line animation
      const firstLine = firstLineRef.current;
      if (firstLine) {
        firstLine.style.opacity = '0';
        firstLine.style.transform = 'translateY(20px)';
        setTimeout(() => {
          firstLine.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          firstLine.style.opacity = '1';
          firstLine.style.transform = 'translateY(0)';
        }, 200);
      }

      // Second line animation
      const secondLine = secondLineRef.current;
      if (secondLine) {
        secondLine.style.opacity = '0';
        secondLine.style.transform = 'translateY(20px)';
        setTimeout(() => {
          secondLine.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          secondLine.style.opacity = '1';
          secondLine.style.transform = 'translateY(0)';
        }, 800);
      }
      
      // Paragraph animation
      const paragraph = paragraphRef.current;
      if (paragraph) {
        paragraph.style.opacity = '0';
        paragraph.style.transform = 'translateY(20px)';
        setTimeout(() => {
          paragraph.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          paragraph.style.opacity = '1';
          paragraph.style.transform = 'translateY(0)';
        }, 1400);
      }
      
      // Buttons animation
      const buttons = buttonsRef.current;
      if (buttons) {
        buttons.style.opacity = '0';
        buttons.style.transform = 'translateY(20px)';
        setTimeout(() => {
          buttons.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          buttons.style.opacity = '1';
          buttons.style.transform = 'translateY(0)';
        }, 2000);
      }
    }, 2500);
  }, []);
  
  return (
    <section className="relative min-h-[120vh] flex items-center justify-center overflow-hidden">
      {/* Spline Animation Container */}
      <div className="absolute inset-0 w-full h-full">
        <spline-viewer 
          url="https://prod.spline.design/gPQHVPiogYcv2nI4/scene.splinecode"
          loading-anim="true"
          loading-style="dark"
          hide-watermark="true"
          events-target="global"
        ></spline-viewer>
      </div>
      
      {/* Content overlay */}
      <Container className="relative z-10">
        <div ref={contentRef} className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-mobile-heading md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-sharp">
            <span ref={firstLineRef} className="block bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              <TypewriterEffect text="Automatisierung & KI" delay={100} startDelay={2700} />
            </span>
            <span ref={secondLineRef} className="block bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              <TypewriterEffect 
                text="für die digitale Transformation" 
                delay={100} 
                startDelay={3300}
              />
            </span>
          </h1>
          
          <p 
            ref={paragraphRef}
            className="text-mobile-text md:text-lg lg:text-xl text-gray-700 mb-10 max-w-2xl mx-auto text-sharp"
          >
            Steigern Sie Ihre Conversion-Rate mit KI-gestützten Chatbots und professionellen Websites. 
            Automatisieren Sie Lead-Generierung, Kundenservice und Terminbuchungen.
          </p>
          
          <div ref={buttonsRef} className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">Chatbot Demo</Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">Beratungsgespräch</Button>
          </div>
        </div>
      </Container>

      {/* Wave transition */}
      <div className="absolute -bottom-1 left-0 right-0 w-full">
        <svg 
          viewBox="0 0 1440 200" 
          preserveAspectRatio="none" 
          className="w-full h-[200px]"
        >
          <path 
            d="M0,128L48,133.3C96,139,192,149,288,144C384,139,480,117,576,112C672,107,768,117,864,128C960,139,1056,149,1152,144C1248,139,1344,117,1392,106.7L1440,96L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;