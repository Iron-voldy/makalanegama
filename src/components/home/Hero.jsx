// src/components/home/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../common/AnimatedSection';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background image with overlay gradient */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/placeholder/hero.jpg')" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-maroon-900/80 to-black/50"></div>
        </div>
      </div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-maroon-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-maroon-600/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto z-10 px-4 md:px-8">
        <div className="max-w-3xl">
          <AnimatedSection className="translate-y-0">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Building <span className="text-maroon-300">Tomorrow's</span> Leaders Today
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl">
              Nurturing minds, building character, and shaping the future leaders of Sri Lanka through excellence in education since 1965.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="px-8 py-4 bg-maroon-600 text-white font-semibold rounded-lg hover:bg-maroon-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center">
                Discover More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-maroon-600 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl">
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      {/* Stats banner at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-maroon-800 to-maroon-900 py-4 bg-opacity-90 backdrop-blur-sm z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-auto px-4 py-2 text-center md:text-left">
              <span className="block text-3xl font-bold text-white">60+</span>
              <span className="text-gray-300 text-sm">Years of Excellence</span>
            </div>
            <div className="w-full md:w-auto px-4 py-2 text-center md:text-left">
              <span className="block text-3xl font-bold text-white">100+</span>
              <span className="text-gray-300 text-sm">Qualified Teachers</span>
            </div>
            <div className="w-full md:w-auto px-4 py-2 text-center md:text-left">
              <span className="block text-3xl font-bold text-white">2,500+</span>
              <span className="text-gray-300 text-sm">Happy Students</span>
            </div>
            <div className="w-full md:w-auto px-4 py-2 text-center md:text-left">
              <span className="block text-3xl font-bold text-white">95%</span>
              <span className="text-gray-300 text-sm">Success Rate</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated scroll down indicator */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="p-2 bg-white bg-opacity-30 rounded-full backdrop-blur-sm">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;