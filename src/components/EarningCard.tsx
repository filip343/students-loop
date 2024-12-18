import React from 'react';
import { LucideIcon } from 'lucide-react';

interface EarningCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function EarningCard({ icon: Icon, title, description }: EarningCardProps) {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-violet-50 transition-colors">
      <div className="bg-gradient-to-br from-blue-100 to-violet-100 p-3 rounded-full">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}