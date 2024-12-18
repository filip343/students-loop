import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  href?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  href,
  className,
  ...props 
}: ButtonProps) {
  const buttonClasses = cn(
    'px-6 py-2 rounded-full font-semibold transition-all duration-300 inline-block text-center',
    variant === 'primary' && 'bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white shadow-md hover:shadow-lg',
    variant === 'secondary' && 'bg-white text-blue-600 border-2 border-blue-600 hover:border-violet-600 hover:text-violet-600',
    fullWidth && 'w-full',
    className
  );

  if (href) {
    return (
      <Link to={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}