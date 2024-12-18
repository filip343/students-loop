import React from 'react';
import { GraduationCap, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <header className="container mx-auto px-4 py-16 md:py-24 pt-32">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-violet-200 rounded-full blur-lg opacity-50"></div>
              <GraduationCap className="w-12 h-12 text-blue-600 relative" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 ml-3">Students Loop</h1>
          </div>
          <h2 className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 font-bold mb-8">
            Connect, Learn, and Grow Together
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            A platform where students help students. Share knowledge, boost understanding, 
            and excel in your studies through peer-to-peer tutoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href={"/find-tutor"} className="px-8 py-3 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
              Find a Tutor
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href={"/become-tutor"}className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold border-2 border-blue-600 hover:border-violet-600 hover:text-violet-600 transition-colors">
              Become a Tutor
            </a>
          </div>
        </div>
        <div className="hidden md:block relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl opacity-10 blur-2xl"></div>
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
            alt="Students studying together"
            className="rounded-2xl shadow-xl relative"
          />
        </div>
      </div>
    </header>
  );
}