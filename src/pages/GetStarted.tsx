import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function GetStarted() {
  const [role, setRole] = useState<'student' | 'tutor' | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (role === 'student') {
      navigate('/find-tutor');
    } else if (role === 'tutor') {
      navigate('/become-tutor');
    }
  };

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Get Started with Students Loop</h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Choose how you'd like to join our community
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <button
              onClick={() => setRole('student')}
              className={`p-8 rounded-xl border-2 transition-all ${
                role === 'student'
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">I'm a Student</h3>
              <p className="text-gray-600">Looking for help with my studies</p>
            </button>

            <button
              onClick={() => setRole('tutor')}
              className={`p-8 rounded-xl border-2 transition-all ${
                role === 'tutor'
                  ? 'border-violet-600 bg-violet-50'
                  : 'border-gray-200 hover:border-violet-300'
              }`}
            >
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-2">I'm a Tutor</h3>
              <p className="text-gray-600">Want to help others and earn</p>
            </button>
          </div>

          <button
            onClick={handleContinue}
            disabled={!role}
            className={`w-full py-4 rounded-full font-semibold transition-all ${
              role
                ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-700 hover:to-violet-700'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}