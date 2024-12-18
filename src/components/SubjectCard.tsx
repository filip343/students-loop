import React from 'react';

interface SubjectCardProps {
  name: string;
  icon: string;
  description: string;
}

export function SubjectCard({ name, icon, description }: SubjectCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 text-blue-600 hover:text-violet-600 font-medium transition-colors">
        Find Tutors →
      </button>
    </div>
  );
}