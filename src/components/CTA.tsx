import React from 'react';

export function CTA() {
  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1600"
            alt="Students collaborating"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-violet-600/90"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl px-4">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
              <p className="text-xl mb-8">
                Join our community of students helping students. Whether you're looking to learn or share your knowledge, 
                Students Loop is here to support your academic journey.
              </p>
              <a href={"/get-started"} className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}