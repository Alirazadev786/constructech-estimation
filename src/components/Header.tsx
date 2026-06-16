'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      {/* Top Marquee Banner */}
      <div className="bg-brand-navy text-white text-sm py-2 overflow-hidden whitespace-nowrap">
        <div className="animate-pulse inline-block px-4">
          <span>⚠️ Our WhatsApp number is +1 (808) 998-5083 / +1 (402) 901-0788. Contact us for quick estimates!</span>
          <span className="ml-8 hidden sm:inline">⚠️ Need an accurate construction estimate? We deliver within 24-48 hours.</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex flex-col">
              <span className="text-2xl font-bold text-brand-navy leading-none tracking-tight">CONSTRUCTECH</span>
              <span className="text-sm font-medium text-brand-orange tracking-widest leading-tight">ESTIMATION</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-brand-orange font-medium transition-colors">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-brand-orange font-medium transition-colors">Services</Link>
            <Link href="/about" className="text-gray-700 hover:text-brand-orange font-medium transition-colors">About Us</Link>
            <Link href="/contact" className="text-gray-700 hover:text-brand-orange font-medium transition-colors">Contact</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact" className="bg-brand-orange text-white px-5 py-2 rounded font-semibold hover:bg-orange-600 transition shadow-sm">
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-brand-orange focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-gray-50 rounded-md">Home</Link>
            <Link href="/services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-gray-50 rounded-md">Services</Link>
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-gray-50 rounded-md">About Us</Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-brand-orange bg-orange-50 rounded-md">Get a Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
}
