import React, { useState, useEffect } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <GraduationCap className={`w-8 h-8 ${isScrolled ? 'text-blue-600' : 'text-blue-500'}`} />
            <span className={`ml-2 font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-gray-800'}`}>
              Students Loop
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/about" isScrolled={isScrolled}>About Us</NavLink>
            <NavLink href="/find-tutor" isScrolled={isScrolled}>Find a Tutor</NavLink>
            <NavLink href="/become-tutor" isScrolled={isScrolled}>Become a Tutor</NavLink>
            <Link
              to="/get-started"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-violet-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-gray-800'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-gray-800'}`} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <MobileMenu isScrolled={isScrolled} />
        )}
      </div>
    </nav>
  );
}