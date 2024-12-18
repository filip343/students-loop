import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
}

export function NavLink({ href, children, isScrolled }: NavLinkProps) {
  return (
    <a
      href={href}
      className={`font-medium hover:text-blue-600 transition-colors ${
        isScrolled ? 'text-gray-700' : 'text-gray-800'
      }`}
    >
      {children}
    </a>
  );
}