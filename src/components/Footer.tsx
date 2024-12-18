import React from 'react';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <GraduationCap className="w-6 h-6 mr-2" />
              <span className="font-semibold">Students Loop</span>
            </div>
            <p className="text-gray-300 text-sm">
              Empowering students through peer-to-peer learning and knowledge sharing.
              Join our community of learners and earn while you help others succeed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-300 hover:text-violet-300 transition-colors">Features</a></li>
              <li><a href="#earnings" className="text-gray-300 hover:text-violet-300 transition-colors">Earnings</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-violet-300 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:support@studentsloop.com" className="hover:text-violet-300 transition-colors">
                  support@studentsloop.com
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+1234567890" className="hover:text-violet-300 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span>University District, CA 90210</span>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Students Loop</h3>
            <p className="text-gray-300 mb-4">
              We're revolutionizing peer-to-peer education by connecting students who want to learn
              with those who excel in their subjects. Our platform enables knowledge sharing while
              providing earning opportunities for tutors.
            </p>
            <div className="flex space-x-4">
              <span className="text-violet-300 font-semibold">Average Tutor Earnings:</span>
              <span className="text-gray-300">$25-50/hour</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Students Loop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}