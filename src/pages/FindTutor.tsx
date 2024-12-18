import React from 'react';
import { Search, BookOpen, Clock, Star } from 'lucide-react';
import { SubjectCard } from '../components/SubjectCard';

const subjects = [
  { name: 'Mathematics', icon: '📐', description: 'Algebra, Calculus, Statistics' },
  { name: 'Sciences', icon: '🔬', description: 'Physics, Chemistry, Biology' },
  { name: 'Languages', icon: '🌍', description: 'English, Spanish, French' },
  { name: 'Programming', icon: '💻', description: 'Python, JavaScript, Java' },
  { name: 'Business', icon: '📊', description: 'Economics, Marketing, Finance' },
  { name: 'Arts', icon: '🎨', description: 'History, Literature, Music' },
];

export function FindTutor() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Find Your Perfect Tutor</h1>
          
          {/* Search Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by subject or topic..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>
              </div>
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-violet-700 transition-all">
                Search Tutors
              </button>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Expert Tutors</h3>
                <p className="text-gray-600">Learn from top students who excel in their subjects</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-violet-100 p-3 rounded-full">
                <Clock className="w-6 h-6 text-violet-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">Book sessions that fit your timetable</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Verified Quality</h3>
                <p className="text-gray-600">All tutors are vetted and rated by students</p>
              </div>
            </div>
          </div>

          {/* Popular Subjects */}
          <h2 className="text-2xl font-bold mb-8">Popular Subjects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <SubjectCard key={index} {...subject} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}