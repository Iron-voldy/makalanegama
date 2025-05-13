// src/components/home/NewsSection.jsx
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
      excerpt: "Our students brought home the championship trophy from the National Quiz Competition, demonstrating exceptional knowledge and quick thinking."
    },
    {
      id: 2,
      title: "New Computer Lab Opens",
      date: "April 20, 2025",
      image: "/images/placeholder/news2.jpg",
      excerpt: "State-of-the-art computer lab with 30 new computers is now available for students, enhancing digital literacy and technical education."
    },
    {
      id: 3,
      title: "Partnership with Oxford University",
      date: "March 15, 2025",
      image: "/images/placeholder/news3.jpg",
      excerpt: "We are excited to announce our new academic partnership with Oxford University to provide advanced learning opportunities for our students."
    }
  ];
  
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-maroon-100 text-maroon-700 mb-4">Latest</span>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">School News & Updates</h2>
          <div className="w-20 h-1.5 bg-maroon-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Stay informed about the latest happenings, achievements, and announcements from our school.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <AnimatedSection key={item.id}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  <div className="absolute top-4 right-4 bg-maroon-600 text-white text-xs font-bold rounded-lg px-2 py-1">
                    {item.date}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-maroon-600 transition-colors">
                    <Link to={`/news/${item.id}`}>{item.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">{item.excerpt}</p>
                  <Link to={`/news/${item.id}`} className="inline-flex items-center font-semibold text-maroon-600 hover:text-maroon-700 mt-auto">
                    Read more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/news" className="inline-flex items-center font-semibold text-maroon-600 hover:text-maroon-700 transition-colors">
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