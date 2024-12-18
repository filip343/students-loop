import React from 'react';

export function Story() {
  return (
    <section className="container mx-auto px-4 mb-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">Our Story</h1>
            <p className="text-lg text-gray-600 mb-6">
              Students Loop began with a simple idea: students helping students. Founded by a group of 
              passionate learners who believed in the power of peer-to-peer education, we've grown 
              into a thriving community where knowledge sharing creates opportunities for everyone.
            </p>
            <p className="text-lg text-gray-600">
              Since our launch, we've helped thousands of students achieve their academic goals while 
              providing meaningful earning opportunities for those who excel in their studies.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl opacity-10 blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
              alt="Students collaborating"
              className="rounded-2xl shadow-xl relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
}