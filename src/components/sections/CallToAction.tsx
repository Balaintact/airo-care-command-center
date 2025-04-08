
import React from 'react';
import { Button } from "@/components/ui/button";
import TestimonialCard from '../ui/TestimonialCard';

const testimonials = [
  {
    id: 1,
    quote: "AIRO has transformed how we manage our care team. We've reduced administrative time by 70% and improved client satisfaction scores significantly.",
    name: "Sarah Johnson",
    role: "Operations Director",
    company: "Home Care Solutions"
  },
  {
    id: 2,
    quote: "I now spend less time driving between clients and more time providing quality care. The system matches me with clients where my specialist skills are truly needed.",
    name: "James Peterson",
    role: "Senior Care Worker",
    company: "Community Care Services"
  },
  {
    id: 3,
    quote: "As someone receiving care, I appreciate the consistency of having the same carers who understand my needs. The real-time notifications give me peace of mind.",
    name: "Margaret Williams",
    role: "Client",
    company: "Residential Care"
  }
];

const CallToAction = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-airo-800 to-airo-700"></div>
        <div className="absolute top-48 right-0 w-96 h-96 bg-airo-600 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute top-24 -left-24 w-72 h-72 bg-airo-500 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div id="testimonials" className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">What People Are Saying</h2>
            <p className="text-lg text-gray-700">
              AIRO is making a real difference for care providers, workers, and clients every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(testimonial => (
              <TestimonialCard 
                key={testimonial.id}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center max-w-4xl mx-auto text-white pt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Care Operations?</h2>
          <p className="text-xl mb-10 text-airo-100">
            Join healthcare providers who have revolutionized their care delivery with AIRO's intelligent optimization engine.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="text-base px-8 py-6 bg-white hover:bg-gray-100 text-airo-700">
              Schedule a Demo
            </Button>
            <Button variant="outline" className="text-base px-8 py-6 text-white border-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
