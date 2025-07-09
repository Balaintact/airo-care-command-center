
import React from 'react';
import FeatureCard from '../ui/FeatureCard';
import { Calendar, Clock, Activity, Database, Users, Map, Check, Info, MessageSquare, Shield, Scale, CheckCircle, Brain, TrendingUp, Cpu, MonitorSpeaker, Zap, Target, QrCode, Key, RotateCcw, RefreshCw, Settings, Cog, Layers, Workflow } from 'lucide-react';

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
    },
    {
      id: 9,
      icon: Shield,
      title: "Attendance Fallback & Visit Logging",
      description: "Auto-logs visits with GPS validation when check-in fails, requests carer confirmation, and updates records in real-time."
    },
    {
      id: 10,
      icon: MessageSquare,
      title: "Client Communication Automation",
      description: "Notifies clients via SMS, app, or email in real-time about carer delays, visit reschedules, or alternative carers."
    },
    {
      id: 11,
      icon: CheckCircle,
      title: "Pre-Shift Carer Confirmation",
      description: "Requires carers to confirm their rota by Sunday 6:00 PM, with auto-escalation to managers for non-confirmation."
    },
    {
      id: 12,
      icon: Scale,
      title: "Fairness Engine",
      description: "Ensures equitable distribution of shifts, prevents favouritism, and improves morale through fair workload planning."
    },
    {
      id: 13,
      icon: Brain,
      title: "AI-Driven Predictive Analytics",
      description: "Utilizes machine learning algorithms to analyze patient data and predict health conditions, enabling proactive care management."
    },
    {
      id: 14,
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description: "Provides actionable insights based on comprehensive data analysis, helping care providers make informed decisions and improve outcomes."
    },
    {
      id: 15,
      icon: Cpu,
      title: "Digital Twin Technology",
      description: "Creates digital replicas of patients to simulate and monitor their health conditions in real-time for enhanced care delivery."
    },
    {
      id: 16,
      icon: MonitorSpeaker,
      title: "Dynamic Health Monitoring",
      description: "Allows continuous monitoring and assessment of patient health, facilitating timely interventions and personalized care."
    },
    {
      id: 17,
      icon: Target,
      title: "Holistic Health Monitoring",
      description: "Ensures predictive models and digital twins work together seamlessly to provide a comprehensive view of patient health."
    },
    {
      id: 18,
      icon: Zap,
      title: "Enhanced Accuracy",
      description: "Improves the accuracy and reliability of health predictions by combining real-time data with advanced simulation techniques."
    },
    {
      id: 19,
      icon: QrCode,
      title: "Dynamic QR Code System",
      description: "Implements time-synchronized QR codes for secure and accurate login/logout processes from any location."
    },
    {
      id: 20,
      icon: Key,
      title: "Enhanced Security & Flexibility",
      description: "Provides care providers with a flexible and secure method for managing access and tracking activities."
    },
    {
      id: 21,
      icon: RotateCcw,
      title: "Real-Time Data Synchronization",
      description: "Ensures real-time synchronization of data across mobile and web applications, providing up-to-date information to all users."
    },
    {
      id: 22,
      icon: RefreshCw,
      title: "Operational Efficiency",
      description: "Reduces data discrepancies and ensures all stakeholders have access to the latest information for optimal decision-making."
    },
    {
      id: 23,
      icon: Settings,
      title: "Automated Shift Allocation",
      description: "Uses algorithms to automatically allocate shifts, reducing administrative workload and minimizing scheduling errors."
    },
    {
      id: 24,
      icon: Cog,
      title: "Process Streamlining",
      description: "Enhances user experience and operational efficiency by automating routine tasks and transactions."
    },
    {
      id: 25,
      icon: Layers,
      title: "Unified Platform",
      description: "Combines multiple functionalities into a single platform, reducing the need for multiple software solutions."
    },
    {
      id: 26,
      icon: Workflow,
      title: "Lower Operational Costs",
      description: "Streamlines processes and reduces resources needed to manage separate systems, improving overall cost efficiency."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-airo-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Powerful AI-Driven Features</h2>
          <p className="text-lg text-gray-700">
            Cairo's intelligent systems work seamlessly together to transform care management, 
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
