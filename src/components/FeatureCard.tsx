import React from 'react';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
}

export function FeatureCard({ icon: Icon, title, description, image }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative h-48">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div className="p-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-violet-100 rounded-full flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}