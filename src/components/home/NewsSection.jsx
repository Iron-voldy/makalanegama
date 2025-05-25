import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../common/AnimatedSection';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "School Wins National Quiz Competition",
      date: "May 5, 2025",
      image: "/images/placeholder/news1.jpg",
      excerpt: "Our students brought home the championship trophy from the National Quiz Competition, demonstrating exceptional knowledge and quick thinking.",
      category: "Achievement"
    },
    {
      id: 2,
      title: "New Computer Lab Opens",
      date: "April 20, 2025",
      image: "/images/placeholder/news2.jpg",
      excerpt: "State-of-the-art computer lab with 30 new computers is now available for students, enhancing digital literacy and technical education.",
      category: "Facilities"
    },
    {
      id: 3,
      title: "Partnership with Oxford University",
      date: "March 15, 2025",
      image: "/images/placeholder/news3.jpg",
      excerpt: "We are excited to announce our new academic partnership with Oxford University to provide advanced learning opportunities for our students.",
      category: "Partnership"
    }
  ];
  
  return (
    <section className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-red-500 to-red-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-red-600 to-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-semibold bg-red-600/20 border border-red-500/30 text-red-300 mb-4">
            Latest Updates
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            School News & <span className="gradient-text-red">Updates</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Stay informed about the latest happenings, achievements, and announcements from our school.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {news.map((item, index) => (
            <AnimatedSection 
              key={item.id} 
              className={`delay-${index * 100}`}
            >
              <div className="group h-full">
                <div className="bg-gray-700/50 backdrop-blur-sm border border-red-500/20 rounded-2xl overflow-hidden hover:border-red-500/40 hover:bg-gray-700/70 transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                  {/* Image Placeholder */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-red-600/20 to-red-800/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-2 mx-auto">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                        </div>
                        <span className="text-red-400 text-sm font-semibold">{item.category}</span>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-600 text-white text-xs font-bold rounded-lg px-2 py-1">
                        {item.date}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                      {item.excerpt}
                    </p>
                    <Link 
                      to={`/news/${item.id}`} 
                      className="inline-flex items-center font-semibold text-red-400 hover:text-red-300 transition-colors duration-300 mt-auto"
                    >
                      Read more
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/news" 
            className="inline-flex items-center font-semibold text-red-400 hover:text-red-300 transition-colors duration-300 text-lg"
          >
            View All News
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;