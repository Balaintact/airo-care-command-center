
import React from 'react';
import { Button } from "@/components/ui/button";

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
        <div className="text-center max-w-4xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Care Operations?</h2>
          <p className="text-xl mb-10 text-airo-100">
            Join healthcare providers who have revolutionized their care delivery with Cairo's intelligent optimization engine.
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
