'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <>
      {/* Marquee Banner */}
      <div className="bg-brand-navy w-full relative z-20 py-2 border-b border-white/10">
        <div className="max-w-full overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            <span className="text-white text-sm font-bold mx-4">⚠️ Our WhatsApp number changed to +1 (808) 998-5083 / +1 (402) 901-0788</span>
            <span className="text-white text-sm font-bold mx-4">⚠️ Our WhatsApp number changed to +1 (808) 998-5083 / +1 (402) 901-0788</span>
            <span className="text-white text-sm font-bold mx-4">⚠️ Our WhatsApp number changed to +1 (808) 998-5083 / +1 (402) 901-0788</span>
            <span className="text-white text-sm font-bold mx-4">⚠️ Our WhatsApp number changed to +1 (808) 998-5083 / +1 (402) 901-0788</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <img src="/logo.png" alt="Constructech Estimation" className="h-20 md:h-24 w-auto mix-blend-multiply object-contain" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              <Link href="/" className="text-gray-800 hover:text-brand-orange font-semibold text-[15px] uppercase tracking-wide">
                Home
              </Link>
              
              <div 
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="text-gray-800 hover:text-brand-orange font-semibold text-[15px] uppercase tracking-wide flex items-center gap-1">
                  Services
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Services Dropdown */}
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white shadow-xl border-t-4 border-brand-orange py-2">
                    <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange">Construction Takeoff Services</Link>
                    <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange">Construction Estimating Services</Link>
                    <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange">Residential Estimating</Link>
                    <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange">Commercial Estimating</Link>
                    <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-orange">Industrial Estimating</Link>
                  </div>
                )}
              </div>

              <Link href="/services" className="text-gray-800 hover:text-brand-orange font-semibold text-[15px] uppercase tracking-wide">
                Labor Recruitment
              </Link>
              <Link href="/contact" className="text-gray-800 hover:text-brand-orange font-semibold text-[15px] uppercase tracking-wide">
                Contact Us
              </Link>
              
              {/* Search Icon */}
              <button aria-label="Search" className="text-gray-800 hover:text-brand-orange">
                <svg width="20" height="20" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504.1 471l-134-134C399.1 301.5 415.1 256.8 415.1 208c0-114.9-93.13-208-208-208S-.0002 93.13-.0002 208S93.12 416 207.1 416c48.79 0 93.55-16.91 129-45.04l134 134C475.7 509.7 481.9 512 488 512s12.28-2.344 16.97-7.031C514.3 495.6 514.3 480.4 504.1 471zM48 208c0-88.22 71.78-160 160-160s160 71.78 160 160s-71.78 160-160 160S48 296.2 48 208z"/></svg>
              </button>

              {/* Phone Number */}
              <a href="tel:(718) 719-2009" className="text-gray-800 font-bold hover:text-brand-orange text-[15px]">
                (718) 719-2009
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center space-x-4">
              {/* Mobile Phone Icon */}
              <a href="tel:(718) 719-2009" className="text-brand-navy">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-800 hover:text-brand-orange focus:outline-none"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-brand-orange uppercase">Home</Link>
              <Link href="/services" className="block px-3 py-2 text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-brand-orange uppercase">Services</Link>
              <Link href="/services" className="block px-3 py-2 text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-brand-orange uppercase">Labor Recruitment</Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-brand-orange uppercase">Contact Us</Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
