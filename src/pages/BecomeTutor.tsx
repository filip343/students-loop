import React from 'react';
import { DollarSign, Users, Award, Rocket } from 'lucide-react';

export function BecomeTutor() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Share Your Knowledge, Earn Money</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our community of student tutors and help others while earning competitive rates.
              Turn your academic excellence into a rewarding opportunity.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <DollarSign className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Competitive Earnings</h3>
              <p className="text-gray-600">Set your own rates and earn $25-50 per hour. Get paid weekly with secure payment processing.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <Users className="w-12 h-12 text-violet-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Growing Network</h3>
              <p className="text-gray-600">Connect with students from various universities and build your professional network.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Recognition Program</h3>
              <p className="text-gray-600">Earn badges and certifications as you help more students succeed in their studies.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <Rocket className="w-12 h-12 text-violet-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Career Growth</h3>
              <p className="text-gray-600">Develop teaching and leadership skills that will benefit your future career.</p>
            </div>
          </div>

          {/* Application Process */}
          <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-8">How to Get Started</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Create Profile</h3>
                <p className="text-blue-100">Sign up and create your tutor profile highlighting your expertise and experience.</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Get Verified</h3>
                <p className="text-blue-100">Complete our verification process to ensure quality standards.</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Start Teaching</h3>
                <p className="text-blue-100">Accept booking requests and start helping students succeed.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full font-semibold text-lg hover:from-blue-700 hover:to-violet-700 transition-all shadow-lg">
              Apply to Become a Tutor
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}