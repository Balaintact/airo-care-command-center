
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-40 -left-24 w-72 h-72 bg-airo-100 rounded-full filter blur-3xl opacity-60"></div>
        <div className="absolute top-60 -right-24 w-96 h-96 bg-airo-200 rounded-full filter blur-3xl opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-airo-100/50 border border-airo-200 mb-6">
            <span className="text-airo-800 text-sm font-medium">Intelligent Care Management</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight gradient-text">
            AI Resource Optimisation Engine for Care Management
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 max-w-3xl">
            Cairo is the intelligent command center that merges automation, 
            analytics, and AI to optimize workforce utilization while ensuring 
            continuity of care and responsive service delivery.
          </p>
                    
          <a href="#features" className="flex items-center mt-16 text-gray-600 hover:text-airo-700 transition-colors">
            <span className="mr-2">Explore Features</span>
            <ArrowDown className="h-4 w-4 animate-pulse-gentle" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
