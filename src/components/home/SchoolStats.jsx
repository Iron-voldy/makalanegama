import React from 'react';
import AnimatedSection from '../common/AnimatedSection';

const SchoolStats = () => {
  const stats = [
    { id: 1, value: "60+", label: "Years of Excellence" },
    { id: 2, value: "100+", label: "Qualified Teachers" },
    { id: 3, value: "2,500+", label: "Students" },
    { id: 4, value: "95%", label: "Success Rate" }
  ];
  
  return (
    <section className="py-16 bg-maroon-700 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <AnimatedSection key={stat.id} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg">{stat.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolStats;