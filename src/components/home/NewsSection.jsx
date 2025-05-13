import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../common/AnimatedSection';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "School Wins National Quiz Competition",
      date: "May 5, 2025",
      excerpt: "Our students brought home the championship trophy from the National Quiz Competition."
    },
    {
      id: 2,
      title: "New Computer Lab Opens",
      date: "April 20, 2025",
      excerpt: "State-of-the-art computer lab with 30 new computers is now available for students."
    }
  ];
  
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest News</h2>
          <div className="w-24 h-1 bg-maroon-700 mx-auto"></div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item) => (
            <AnimatedSection key={item.id} className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.excerpt}</p>
              <Link to={`/news/${item.id}`} className="text-maroon-700 hover:text-maroon-800 font-bold transition-colors">
                Read more
                <svg className="w-4 h-4 inline-block ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;