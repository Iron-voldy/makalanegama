import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import AnimatedSection from '../components/common/AnimatedSection';

const ContactPage = () => {
  return (
    <>
      <div className="pt-24 pb-12 bg-maroon-700">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-white text-center">Contact Us</h1>
        </div>
      </div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <ContactForm />
            </AnimatedSection>
            <AnimatedSection>
              <ContactInfo />
            </AnimatedSection>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Us</h2>
            <div className="w-24 h-1 bg-maroon-700 mx-auto"></div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7985115442207!2d79.8578991!3d6.9119063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnNDIuOSJOIDc5wrA1MScyOC40IkU!5e0!3m2!1sen!2slk!4v1620793790952!5m2!1sen!2slk" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="School Location"
              ></iframe>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default ContactPage;