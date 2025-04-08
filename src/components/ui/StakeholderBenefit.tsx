
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from 'lucide-react';

interface BenefitItem {
  id: number;
  text: string;
}

interface StakeholderBenefitProps {
  title: string;
  description: string;
  benefits: BenefitItem[];
  imageUrl: string;
  imageAlt: string;
  reversed?: boolean;
}

const StakeholderBenefit = ({ 
  title,
  description,
  benefits,
  imageUrl,
  imageAlt,
  reversed = false
}: StakeholderBenefitProps) => {
  return (
    <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center my-16`}>
      <div className="w-full md:w-1/2">
        <div className="overflow-hidden rounded-lg shadow-md">
          <img 
            src={imageUrl} 
            alt={imageAlt}
            className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105" 
          />
        </div>
      </div>
      
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">{title}</h3>
        <p className="text-gray-700 mb-6">{description}</p>
        
        <div className="space-y-3">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="flex items-start">
              <div className="mr-3 mt-1 bg-airo-100 rounded-full p-1">
                <Check className="h-4 w-4 text-airo-700" />
              </div>
              <p className="text-gray-700">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StakeholderBenefit;
