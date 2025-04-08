
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarUrl?: string;
}

const TestimonialCard = ({ quote, name, role, company, avatarUrl }: TestimonialCardProps) => {
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="border border-gray-200 hover:border-airo-300 transition-all duration-300 hover:shadow-md overflow-hidden bg-white/70 backdrop-blur-sm">
      <CardContent className="pt-6">
        <div className="mb-4">
          <svg width="32" height="32" viewBox="0 0 51 48" className="text-airo-300">
            <path
              d="M21.7 6.3C21.7 7.1 21.6 8.8 21.3 11.5C21.1 14.1 20.1 17.1 18.5 20.5C16.9 23.7 14.7 26.4 12 28.5L9.8 26C11.7 24 13.2 21.7 14.4 19.2C15.6 16.7 16.2 14.4 16.2 12.3C16.2 11.9 16.2 11.6 16.1 11.4C15.8 11.5 15.4 11.5 14.9 11.5C13.8 11.5 12.7 11.1 11.7 10.2C10.8 9.3 10.3 8.2 10.3 6.9C10.3 5.5 10.8 4.3 11.9 3.4C13 2.5 14.2 2 15.6 2C17.4 2 18.9 2.6 19.9 3.9C20.7 5.3 21.2 6.8 21.6 8.4C21.7 7.8 21.7 7.1 21.7 6.3ZM41.5 6.3C41.5 7.1 41.4 8.8 41.1 11.5C40.9 14.1 39.9 17.1 38.3 20.5C36.7 23.7 34.5 26.4 31.8 28.5L29.6 26C31.5 24 33 21.7 34.2 19.2C35.4 16.7 36 14.4 36 12.3C36 11.9 36 11.6 35.9 11.4C35.6 11.5 35.2 11.5 34.7 11.5C33.6 11.5 32.5 11.1 31.5 10.2C30.6 9.3 30.1 8.2 30.1 6.9C30.1 5.5 30.6 4.3 31.7 3.4C32.8 2.5 34 2 35.4 2C37.2 2 38.7 2.6 39.7 3.9C40.5 5.3 41 6.8 41.4 8.4C41.5 7.8 41.5 7.1 41.5 6.3Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <p className="text-gray-700 italic mb-6">"{quote}"</p>
      </CardContent>
      <CardFooter className="border-t border-gray-100 pt-4 flex items-center">
        <Avatar className="mr-3">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback className="bg-airo-200 text-airo-800">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{role}, {company}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
