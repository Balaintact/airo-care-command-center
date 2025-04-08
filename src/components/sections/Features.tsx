
import React from 'react';
import FeatureCard from '../ui/FeatureCard';
import { Calendar, Clock, Activity, Database, Users, Map, Check, Info } from 'lucide-react';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: Activity,
      title: "Predictive Workforce Utilisation",
      description: "Continuously monitors workforce capacity, identifies underutilized staff, and recommends shift balancing to ensure sustainable workloads."
    },
    {
      id: 2,
      icon: Calendar,
      title: "Rota Intelligence & Generation",
      description: "Auto-generates weekly rotas incorporating live data on leave, care needs, and risk levels, with dynamic adjustments to commissioned hours."
    },
    {
      id: 3,
      icon: Users,
      title: "Auto-Matching Engine",
      description: "Matches care workers to clients using AI rules based on skills, proximity, availability, compliance, and continuity of care."
    },
    {
      id: 4,
      icon: Clock,
      title: "Leave Management & Simulation",
      description: "Simulates coverage scenarios before approving leave, recommends alternatives, and supports fair leave distribution."
    },
    {
      id: 5,
      icon: Info,
      title: "Recruitment Intelligence",
      description: "Identifies persistent staffing gaps, highlights specific recruitment needs, and forecasts future hiring requirements."
    },
    {
      id: 6,
      icon: Map,
      title: "Emergency & Gap Management",
      description: "Instantly detects unassigned visits, suggests best-fit available carers, and escalates unfilled shifts to managers."
    },
    {
      id: 7,
      icon: Check,
      title: "Compliance & Integrity Checks",
      description: "Validates rotas against travel time, conflicts, working hour limits, and commissioned hours for full compliance."
    },
    {
      id: 8,
      icon: Database,
      title: "Rota Impact Forecasting",
      description: "Assesses long-term rota stability, considering staff availability trends, seasonal fluctuations, and new client packages."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-airo-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Powerful AI-Driven Features</h2>
          <p className="text-lg text-gray-700">
            AIRO's intelligent systems work seamlessly together to transform care management, 
            optimize resources, and enhance service quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(feature => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
