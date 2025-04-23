import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import CaseStudies from '../components/sections/CaseStudies';
import Team from '../components/sections/Team';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Team />
      <Contact />
    </main>
  );
};

export default Home;