import React from 'react';
import { Heart, Users, Target, Shield } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Empathy",
    description: "Understanding and addressing the unique needs of every learner"
  },
  {
    icon: Users,
    title: "Community",
    description: "Building strong connections through collaborative learning"
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Maintaining high standards in education and support"
  },
  {
    icon: Shield,
    title: "Trust",
    description: "Creating a safe and reliable environment for learning"
  }
];

export function Values() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-4 bg-gradient-to-br from-blue-100 to-violet-100 rounded-full mb-4">
                <value.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}