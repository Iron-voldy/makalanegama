import React from 'react';
import AnimatedSection from '../common/AnimatedSection';

const SchoolHistory = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our History</h2>
              <div className="w-24 h-1 bg-maroon-700 mb-6"></div>
              <p className="text-gray-600 mb-4">
                Founded in 1965, Sri Lanka School has been a pillar of academic excellence for over six decades. What started as a small institution with just 50 students has grown into one of the premier educational institutions in the country.
              </p>
              <p className="text-gray-600 mb-4">
                The school was established with a vision to provide holistic education that focuses not only on academic excellence but also character development and cultural values. Over the years, we have maintained our commitment to this vision while evolving to meet the changing educational needs of our students.
              </p>
              <p className="text-gray-600">
                Today, Sri Lanka School stands as a testament to the dedication of generations of educators, administrators, and students who have contributed to its growth and success.
              </p>
            </AnimatedSection>
          </div>
          <div className="lg:w-1/2">
            <AnimatedSection>
              <img src="/assets/images/placeholder/history.jpg" alt="School History" className="rounded-lg shadow-lg w-full" />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolHistory;