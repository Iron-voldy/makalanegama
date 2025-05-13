import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../common/AnimatedSection';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/placeholder/hero.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto z-10 text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Welcome to Sri Lanka School</h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">Nurturing minds, building character, and shaping the future leaders of Sri Lanka.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about" className="bg-maroon-700 hover:bg-maroon-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">Learn More</Link>
            <Link to="/contact" className="bg-transparent hover:bg-white text-white hover:text-maroon-700 font-bold py-3 px-6 rounded-lg border-2 border-white transition-colors duration-300">Contact Us</Link>
          </div>
        </AnimatedSection>
      </div>
      
      {/* Animated arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;