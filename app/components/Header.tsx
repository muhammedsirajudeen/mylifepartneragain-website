'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Values', href: '#values' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Trust & Safety', href: '#trust-safety' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-[#e5e7eb]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="text-2xl font-serif text-[var(--primary)]">♥</span>
            <span className="text-xl font-serif font-bold text-[var(--foreground)] tracking-tight">
              Life Partner <span className="text-[var(--primary)]">Again</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[var(--card-foreground)] hover:text-[var(--primary)] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex">
            <Link
              href="#pricing"
              className="px-6 py-2.5 bg-[var(--primary)] text-white text-sm font-medium rounded-full shadow-md hover:bg-[#c08e5e] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Start Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[var(--foreground)] hover:text-[var(--primary)] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#pricing"
              className="block w-full mt-4 px-5 py-3 text-center rounded-md font-medium text-white bg-[var(--primary)] hover:bg-[#c08e5e]"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
