
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="border border-gray-200 hover:border-airo-300 transition-all duration-300 hover:shadow-md hover-scale overflow-hidden bg-white/50 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="rounded-full bg-airo-100/50 w-12 h-12 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-airo-700" />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
