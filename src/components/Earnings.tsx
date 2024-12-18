import React from 'react';
import { DollarSign, Brain, Trophy, TrendingUp } from 'lucide-react';
import { EarningCard } from './EarningCard';
import { Button } from './Button';

const earningFeatures = [
  {
    icon: DollarSign,
    title: "Competitive Earnings",
    description: "Set your own rates and earn money while helping others succeed in their studies."
  },
  {
    icon: Brain,
    title: "Reinforce Your Knowledge",
    description: "Teaching others is one of the best ways to master your own understanding of the subject."
  },
  {
    icon: Trophy,
    title: "Build Your Profile",
    description: "Gain teaching experience and build a strong academic portfolio for your future career."
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Top tutors can earn badges, unlock premium features, and receive special perks."
  }
];

export function Earnings() {
  return (
    <section id="earnings" className="bg-gradient-to-b from-white via-violet-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
            Earn While You Learn
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {earningFeatures.map((feature, index) => (
                <EarningCard key={index} {...feature} />
              ))}
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-violet-100">
              <h3 className="text-2xl font-semibold mb-6 text-center">Earning Potential</h3>
              <div className="space-y-6">
                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-violet-50 rounded-lg">
                  <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 mb-2">$25-50</p>
                  <p className="text-gray-600">Average hourly rate</p>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700"><strong>Flexible Schedule:</strong> Tutor when it suits you</p>
                  <p className="text-gray-700"><strong>Weekly Payments:</strong> Get paid reliably every week</p>
                  <p className="text-gray-700"><strong>Bonus System:</strong> Earn extra for consistent high ratings</p>
                </div>
                <div className="pt-4">
                  <Button fullWidth href="/get-started">Start Tutoring Today</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}