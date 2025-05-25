import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../common/AnimatedSection';
import CountingStats from '../common/CountingStats';
import schoolInfo from '../../data/schoolInfo';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-800/90 to-black/95"></div>
        
        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-red-500/10 to-red-700/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-40 w-72 h-72 bg-gradient-to-r from-red-600/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-red-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${10 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <AnimatedSection>
              {/* School Badge */}
              <div className="mb-8">
                <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-red-600/20 border border-red-500/30 text-red-300 backdrop-blur-sm">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L3.09 8.26L12 14L20.91 8.26L12 2Z"/>
                    <path d="M3.09 15.74L12 22L20.91 15.74L17.39 13.8L12 17L6.61 13.8L3.09 15.74Z"/>
                  </svg>
                  {schoolInfo.details.type} • Established {schoolInfo.established}
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                <span className="block text-white mb-4">{schoolInfo.name}</span>
                <span className="block bg-gradient-to-r from-red-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
                  Excellence in Education
                </span>
              </h1>

              {/* Location */}
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                {schoolInfo.location.district}, {schoolInfo.location.province}
              </p>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
                Nurturing minds and building character through quality education in {schoolInfo.details.medium} medium, 
                serving <span className="text-red-400 font-semibold">{schoolInfo.details.students} students</span> from 
                Grade 1-11 in our co-educational environment.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
                <div className="bg-red-600/10 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:bg-red-600/20 transition-all duration-300">
                  <div className="text-3xl font-bold text-red-400 mb-2">{schoolInfo.details.students}</div>
                  <div className="text-sm text-gray-400">Active Students</div>
                </div>
                <div className="bg-red-600/10 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:bg-red-600/20 transition-all duration-300">
                  <div className="text-3xl font-bold text-red-400 mb-2">1-11</div>
                  <div className="text-sm text-gray-400">Grade Levels</div>
                </div>
                <div className="bg-red-600/10 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:bg-red-600/20 transition-all duration-300">
                  <div className="text-3xl font-bold text-red-400 mb-2">65+</div>
                  <div className="text-sm text-gray-400">Years</div>
                </div>
                <div className="bg-red-600/10 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:bg-red-600/20 transition-all duration-300">
                  <div className="text-3xl font-bold text-red-400 mb-2">{schoolInfo.details.schoolId}</div>
                  <div className="text-sm text-gray-400">School ID</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/about" 
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold rounded-xl hover:from-red-700 hover:to-red-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-600/25"
                >
                  <span>Discover Our School</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>

                <Link 
                  to="/contact" 
                  className="group inline-flex items-center px-8 py-4 bg-transparent border-2 border-red-500 text-white font-semibold rounded-xl hover:bg-red-600 hover:border-red-600 transform hover:scale-105 transition-all duration-300"
                >
                  <span>Contact Us</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
      
      {/* Stats Counter at Bottom */}
      <div className="relative z-10">
        <CountingStats />
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="p-3 bg-red-600/20 rounded-full backdrop-blur-sm border border-red-500/30">
          <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;