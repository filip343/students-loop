import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from './NavLink';

interface MobileMenuProps {
  isScrolled: boolean;
}

export function MobileMenu({ isScrolled }: MobileMenuProps) {
  return (
    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
      <div className="flex flex-col space-y-4 px-4">
        <NavLink href="/about" isScrolled={true}>About Us</NavLink>
        <NavLink href="/find-tutor" isScrolled={true}>Find a Tutor</NavLink>
        <NavLink href="/become-tutor" isScrolled={true}>Become a Tutor</NavLink>
        <Link
          to="/get-started"
          className="px-6 py-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-violet-700 transition-all duration-300 text-center"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}