import React from 'react';

const stats = [
  { number: "10,000+", label: "Active Students" },
  { number: "1,000+", label: "Expert Tutors" },
  { number: "50,000+", label: "Sessions Completed" },
  { number: "4.8/5", label: "Average Rating" }
];

export function Stats() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-violet-600 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}