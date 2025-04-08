
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Stakeholders from '@/components/sections/Stakeholders';
import CallToAction from '@/components/sections/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Stakeholders />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
