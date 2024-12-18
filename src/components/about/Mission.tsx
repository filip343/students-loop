import React from 'react';

export function Mission() {
  return (
    <section className="bg-gradient-to-b from-white to-violet-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8">
            To create a collaborative learning ecosystem where students empower each other through 
            knowledge sharing, making quality education more accessible while providing meaningful 
            earning opportunities.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">For Students</h3>
              <p className="text-gray-600">Access affordable, peer-led tutoring that helps you succeed in your studies.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">For Tutors</h3>
              <p className="text-gray-600">Turn your academic excellence into a rewarding opportunity to help others.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}