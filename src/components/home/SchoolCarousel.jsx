import React, { useState, useEffect } from 'react';
import AnimatedSection from '../common/AnimatedSection';

const SchoolCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Modern Computer Laboratory",
      description: "State-of-the-art computer lab with 30 new computers, enhancing digital literacy and technical education for all students.",
      image: "/images/computer-lab.jpg",
      category: "Facilities",
      stats: { students: "313", devices: "30+" },
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      id: 2,
      title: "Academic Excellence",
      description: "Our students consistently achieve outstanding results in national examinations, with dedicated teachers guiding them to success.",
      image: "/images/academic-excellence.jpg",
      category: "Achievement",
      stats: { performance: "41", subjects: "5" },
      gradient: "from-green-600 to-emerald-500"
    },
    {
      id: 3,
      title: "Cultural Heritage",
      description: "Celebrating Sri Lankan culture through traditional performances, art exhibitions, and cultural events throughout the year.",
      image: "/images/cultural-events.jpg",
      category: "Culture",
      stats: { events: "12+", participants: "200+" },
      gradient: "from-purple-600 to-pink-500"
    },
    {
      id: 4,
      title: "Sports & Athletics",
      description: "Building character and teamwork through various sports activities, competitions, and physical education programs.",
      image: "/images/sports.jpg",
      category: "Sports",
      stats: { sports: "8", teams: "15+" },
      gradient: "from-orange-600 to-red-500"
    },
    {
      id: 5,
      title: "Science & Innovation",
      description: "Fostering scientific thinking and innovation through hands-on experiments and research projects in our well-equipped laboratories.",
      image: "/images/science-lab.jpg",
      category: "Science",
      stats: { labs: "3", projects: "25+" },
      gradient: "from-indigo-600 to-blue-500"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-red-500 to-red-700 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-red-600 to-orange-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-semibold bg-red-600/20 border border-red-500/30 text-red-300 mb-4">
            School Highlights
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Our <span className="gradient-text-red">Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Explore the various aspects that make Makalanegama Vidyalaya a center of educational excellence and holistic development.
          </p>
        </AnimatedSection>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl bg-gray-800/50 backdrop-blur-sm border border-red-500/20 shadow-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                    {/* Image Side */}
                    <div className="relative overflow-hidden">
                      <div className={`w-full h-full bg-gradient-to-br ${slide.gradient} flex items-center justify-center relative`}>
                        {/* Image Placeholder with Icon */}
                        <div className="text-center">
                          <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mb-6 mx-auto backdrop-blur-sm">
                            {slide.category === 'Facilities' && (
                              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            )}
                            {slide.category === 'Achievement' && (
                              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                              </svg>
                            )}
                            {slide.category === 'Culture' && (
                              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4v16M17 4v16M7 20h10" />
                              </svg>
                            )}
                            {slide.category === 'Sports' && (
                              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            )}
                            {slide.category === 'Science' && (
                              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                              </svg>
                            )}
                          </div>
                          <span className="text-white/80 text-lg font-semibold">{slide.category}</span>
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute inset-0 pointer-events-none">
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
                              style={{
                                left: `${20 + Math.random() * 60}%`,
                                top: `${20 + Math.random() * 60}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${3 + Math.random() * 2}s`
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${slide.gradient} text-white`}>
                          {slide.category}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                        {slide.title}
                      </h3>
                      
                      <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        {slide.description}
                      </p>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {Object.entries(slide.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl font-bold text-red-400 mb-1">{value}</div>
                            <div className="text-sm text-gray-400 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                      
                      <button className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${slide.gradient} text-white font-semibold rounded-xl hover:scale-105 transform transition-all duration-300 shadow-lg`}>
                        Learn More
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-full flex items-center justify-center text-white hover:bg-red-600/40 transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-full flex items-center justify-center text-white hover:bg-red-600/40 transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-red-500 w-8' 
                    : 'bg-gray-600 hover:bg-red-400'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isAutoPlay 
                  ? 'bg-red-600/20 text-red-400 border border-red-500/30' 
                  : 'bg-gray-700/50 text-gray-400 border border-gray-600/30'
              }`}
            >
              {isAutoPlay ? 'Pause Auto-play' : 'Resume Auto-play'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolCarousel;