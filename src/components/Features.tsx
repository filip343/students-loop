import React from 'react';
import { BookOpen, Users, Calendar } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function Features() {
  const features = [
    {
      icon: Users,
      title: "Peer-to-Peer Learning",
      description: "Learn from fellow students who understand your challenges and can explain concepts in relatable ways.",
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80&w=400"
    },
    {
      icon: BookOpen,
      title: "Flexible Subjects",
      description: "Get help in any subject, from mathematics and sciences to languages and humanities.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400"
    },
    {
      icon: Calendar,
      title: "Convenient Scheduling",
      description: "Book sessions that fit your schedule, with flexible timing options.",
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section id="features" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Students Loop?</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}