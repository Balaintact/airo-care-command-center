
import React from 'react';
import StakeholderBenefit from '../ui/StakeholderBenefit';

const Stakeholders = () => {
  const clientBenefits = [
    { id: 1, text: "Consistent care from familiar carers who understand your needs" },
    { id: 2, text: "Real-time notifications for visit updates or schedule changes" },
    { id: 3, text: "Improved punctuality with route-optimized care worker assignments" },
    { id: 4, text: "Better care matching based on your specific requirements" },
    { id: 5, text: "Reduced missed or late visits through AI-powered scheduling" }
  ];
  
  const careWorkerBenefits = [
    { id: 1, text: "Optimized routes that reduce unnecessary travel time" },
    { id: 2, text: "Balanced workloads that prevent burnout and fatigue" },
    { id: 3, text: "Skill-based matching to clients suited to your expertise" },
    { id: 4, text: "Fair shift distribution and advance scheduling visibility" },
    { id: 5, text: "Streamlined visit confirmation and reporting processes" }
  ];
  
  const providerBenefits = [
    { id: 1, text: "Significantly reduced administrative burden through automation" },
    { id: 2, text: "Data-driven insights into workforce utilization and efficiency" },
    { id: 3, text: "Improved compliance with care quality and staff regulations" },
    { id: 4, text: "Early detection of staffing gaps and recruitment needs" },
    { id: 5, text: "Enhanced client satisfaction through reliable care delivery" }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Benefits for Everyone</h2>
          <p className="text-lg text-gray-700">
            Cairo creates value across the entire care ecosystem, improving experiences
            and outcomes for clients, care workers, and care providers.
          </p>
        </div>
        
        <StakeholderBenefit 
          title="For Clients"
          description="AIRO ensures clients receive consistent, high-quality care from familiar faces, with timely communication and reliable service delivery."
          benefits={clientBenefits}
          imageUrl="https://images.unsplash.com/photo-1576765608866-5b51046452be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          imageAlt="Elderly client receiving home care"
        />
        
        <StakeholderBenefit 
          title="For Care Workers"
          description="Care workers benefit from optimized schedules, reduced travel time, and fair workload distribution that prevents burnout and improves job satisfaction."
          benefits={careWorkerBenefits}
          imageUrl="https://images.unsplash.com/photo-1584516195493-61142af481f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          imageAlt="Care worker helping client"
          reversed={true}
        />
        
        <StakeholderBenefit 
          title="For Care Providers"
          description="Care providers gain operational efficiency, improved compliance, data-driven insights, and the ability to deliver higher quality care while managing costs."
          benefits={providerBenefits}
          imageUrl="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          imageAlt="Care management team in office"
        />
      </div>
    </section>
  );
};

export default Stakeholders;
