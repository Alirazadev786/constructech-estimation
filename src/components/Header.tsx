'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isTradesOpen, setIsTradesOpen] = useState(false);

  return (
    <>
      {/* Marquee Banner */}
      <div className="bg-brand-navy w-full relative z-20 py-2 border-b border-white/10 flex overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex shrink-0">
          <span className="text-white text-sm font-bold mx-10">Get highly accurate construction takeoffs & estimates! Contact us today for a free quote at (727) 284-6082.</span>
          <span className="text-white text-sm font-bold mx-10">Get highly accurate construction takeoffs & estimates! Contact us today for a free quote at (727) 284-6082.</span>
          <span className="text-white text-sm font-bold mx-10">Get highly accurate construction takeoffs & estimates! Contact us today for a free quote at (727) 284-6082.</span>
          <span className="text-white text-sm font-bold mx-10">Get highly accurate construction takeoffs & estimates! Contact us today for a free quote at (727) 284-6082.</span>
        </div>
        <div className="animate-marquee whitespace-nowrap flex shrink-0">
          <span className="text-white text-sm font-bold mx-10">Get highly accurate construction takeoffs & estimates! Contact us today for a free quote at (727) 284-6082.</span>
          <span className="text-white text-sm font-bold mx-10">Get highly accurate construction takeoffs & estimates! Contact us today for a free quote at (727) 284-6082.</span>
          <span className="text-white text-sm font-bold mx-10">Get highly accurate construction takeoffs & estimates! Contact us today for a free quote at (727) 284-6082.</span>
          <span className="text-white text-sm font-bold mx-10">Get highly accurate construction takeoffs & estimates! Contact us today for a free quote at (727) 284-6082.</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 md:h-16">
              
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center h-full py-1">
                <Link href="/" className="h-full flex items-center">
                  <img src="/logo-transparent.png" alt="Constructech Estimation" className="h-10 md:h-12 w-auto object-contain origin-left transform scale-[1.5] md:scale-[1.8] translate-x-3 translate-y-1 md:translate-y-2" />
                </Link>
              </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center relative">
              <Link href="/" className="text-gray-800 hover:text-brand-orange font-semibold text-[15px] uppercase tracking-wide">
                Home
              </Link>
              <Link href="/about" className="text-gray-800 hover:text-brand-orange font-semibold text-[15px] uppercase tracking-wide">
                About Us
              </Link>

              {/* Services Mega Menu */}
              <div 
                className="group h-full flex items-center"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link href="/services" className={`text-gray-800 hover:text-brand-orange font-semibold text-[15px] uppercase tracking-wide flex items-center gap-1 py-8 ${isServicesOpen ? 'text-brand-orange border-b-2 border-brand-orange' : ''}`}>
                  Services
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                
                {/* Services Dropdown */}
                {isServicesOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-[100%] w-[1000px] z-50 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
                    <div className="bg-white border-t-2 border-brand-orange rounded-b-lg flex overflow-hidden min-h-[300px]">
                      
                      {/* Left Highlighted Column */}
                      <div className="w-[30%] bg-brand-orange text-white p-8">
                        <div className="space-y-6">
                          <Link href="/services/cost-estimating" className="block group/link">
                            <div className="flex items-start gap-3">
                              <div className="bg-white/20 p-2 rounded shrink-0">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-bold text-[15px] group-hover/link:text-brand-navy transition-colors">Cost Estimating</h4>
                                <p className="text-white/80 text-xs mt-1 italic">Predicting project costs.</p>
                              </div>
                            </div>
                          </Link>

                          <Link href="/services/construction-takeoff" className="block group/link">
                            <div className="flex items-start gap-3">
                              <div className="bg-white/20 p-2 rounded shrink-0">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-bold text-[15px] group-hover/link:text-brand-navy transition-colors">Construction Takeoff</h4>
                                <p className="text-white/80 text-xs mt-1 italic">Measuring materials and quantities.</p>
                              </div>
                            </div>
                          </Link>

                          <Link href="/services/mep-estimating" className="block group/link">
                            <div className="flex items-start gap-3">
                              <div className="bg-white/20 p-2 rounded shrink-0">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-bold text-[15px] group-hover/link:text-brand-navy transition-colors">MEP Estimating</h4>
                                <p className="text-white/80 text-xs mt-1 italic">Mechanical, electrical, plumbing.</p>
                              </div>
                            </div>
                          </Link>

                          <Link href="/services/cpm-scheduling" className="block group/link">
                            <div className="flex items-start gap-3">
                              <div className="bg-white/20 p-2 rounded shrink-0">
                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <div>
                                <h4 className="font-bold text-[15px] group-hover/link:text-brand-navy transition-colors">CPM Scheduling</h4>
                                <p className="text-white/80 text-xs mt-1 italic">Project timeline management.</p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Right 1 Column */}
                      <div className="w-[70%] p-8 grid grid-cols-1 gap-6">

                        {/* Col 2 */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <h3 className="text-brand-orange font-bold text-sm uppercase">Industries We Serve</h3>
                          </div>
                          <p className="text-xs text-gray-500 italic mb-4">Estimating solutions for all construction sectors.</p>
                          <ul className="space-y-3">
                            <li><Link href="/general-contractor-services/residential-estimating" className="text-sm font-semibold text-gray-800 hover:text-brand-orange leading-snug block">Residential Construction Estimating</Link></li>
                            <li><Link href="/general-contractor-services/commercial-estimating" className="text-sm font-semibold text-gray-800 hover:text-brand-orange leading-snug block">Commercial Projects Estimating</Link></li>
                            <li><Link href="/general-contractor-services/industrial-estimating" className="text-sm font-semibold text-gray-800 hover:text-brand-orange leading-snug block">Industrial Facilities Estimating</Link></li>
                            <li><Link href="/general-contractor-services/public-projects-estimates" className="text-sm font-semibold text-gray-800 hover:text-brand-orange leading-snug block">Public & Government Works</Link></li>
                          </ul>
                        </div>

                      </div>
                    </div>
                  </div>
                )}
              </div>


              {/* Our Trades Mega Menu */}
              <div 
                className="group h-full flex items-center"
                onMouseEnter={() => setIsTradesOpen(true)}
                onMouseLeave={() => setIsTradesOpen(false)}
              >
                <Link href="/our-trades" className={`text-gray-800 hover:text-brand-orange font-semibold text-[15px] uppercase tracking-wide flex items-center gap-1 py-8 ${isTradesOpen ? 'text-brand-orange border-b-2 border-brand-orange' : ''}`}>
                  Our Trades
                  <svg className={`w-4 h-4 transition-transform ${isTradesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                
                {isTradesOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-[100%] w-[1100px] z-50 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
                    <div className="bg-white border-t-2 border-brand-orange p-8 grid grid-cols-4 gap-8 rounded-b-lg">
                      
                      {/* Column 1 */}
                      <div>
                        <h3 className="text-brand-orange font-bold text-base mb-4 border-b border-gray-100 pb-2">General Contractor</h3>
                        <ul className="space-y-3">
                          <li><Link href="/general-contractor-services/public-projects-estimates" className="text-sm font-semibold text-gray-800 hover:text-brand-orange">Public Projects Estimating Services</Link></li>
                          <li><Link href="/general-contractor-services/commercial-estimating" className="text-sm font-semibold text-gray-800 hover:text-brand-orange">Commercial Estimating Services</Link></li>
                          <li><Link href="/general-contractor-services/residential-estimating" className="text-sm font-semibold text-gray-800 hover:text-brand-orange">Residential Estimating Services</Link></li>
                          <li><Link href="/general-contractor-services/multi-family-apartments" className="text-sm font-semibold text-gray-800 hover:text-brand-orange">MultiFamily Apartments Estimating Services</Link></li>
                          <li><Link href="/general-contractor-services/industrial-estimating" className="text-sm font-semibold text-gray-800 hover:text-brand-orange">Industrial Estimating</Link></li>
                        </ul>
                      </div>

                      {/* Column 2 */}
                      <div>
                        <h3 className="text-brand-orange font-bold text-base mb-4 border-b border-gray-100 pb-2">Sub Contractors Estimating</h3>
                        <ul className="space-y-3">
                          <li><Link href="/sub-contractors-estimates/metals-takeoffs" className="text-sm font-semibold text-gray-800 hover:text-brand-orange">Metals Takeoffs Estimates</Link></li>
                          <li><Link href="/sub-contractors-estimates/insulation-estimates" className="text-sm font-semibold text-gray-800 hover:text-brand-orange">Insulation Estimating Services</Link></li>
                          <li><Link href="/sub-contractors-estimates/dry-wall-takeoffs" className="text-sm font-semibold text-gray-800 hover:text-brand-orange">Drywall Takeoff Estimating</Link></li>
                          <li><Link href="/sub-contractors-estimates/concrete-estimating-services" className="text-sm font-semibold text-gray-800 hover:text-brand-orange">Concrete Estimates</Link></li>
                          <li><Link href="/sub-contractors-estimates/masonry-estimates" className="text-sm font-semibold text-gray-800 hover:text-brand-orange">Masonry Estimates</Link></li>
                          <li><Link href="/sub-contractors-estimates/painting-estimates" className="text-sm font-semibold text-gray-800 hover:text-brand-orange">Painting Estimating Takeoff</Link></li>
                        </ul>
                      </div>

                      {/* Column 3 */}
                      <div>
                        <h3 className="text-brand-orange font-bold text-base mb-4 border-b border-gray-100 pb-2">Sub Contractors Estimating</h3>
                        <ul className="space-y-3">
                          <li><Link href="/sub-contractors-estimates/electrical-work-estimating-takeoffs" className="text-sm font-semibold text-gray-800 hover:text-brand-orange">Electrical Work Estimating</Link></li>
                          <li><Link href="/sub-contractors-estimates/flooring-estimates" className="text-sm font-semibold text-gray-800 hover:text-brand-orange">Flooring Estimating Services</Link></li>
                          <li><Link href="/sub-contractors-estimates/plumbing-estimates" className="text-sm font-semibold text-gray-800 hover:text-brand-orange">Plumbing Estimating Takeoff Services</Link></li>
                          <li><Link href="/sub-contractors-estimates/exterior-finishes-estimates" className="text-sm font-semibold text-gray-800 hover:text-brand-orange">Interior Exterior Finishes Estimating Takeoff Services</Link></li>
                          <li><Link href="/sub-contractors-estimates/site-works" className="text-sm font-semibold text-gray-800 hover:text-brand-orange">Sitework Earthwork Estimating Services</Link></li>
                        </ul>
                      </div>

                      {/* Column 4 */}
                      <div>
                        <h3 className="text-brand-orange font-bold text-base mb-4 border-b border-gray-100 pb-2">Supplier Estimating Takeoff</h3>
                        <ul className="space-y-3">
                          <li><Link href="/supplier-estimates/rebar-takeoffs" className="text-sm font-semibold text-gray-800 hover:text-brand-orange">Rebar Estimating Detailing Takeoff Services</Link></li>
                          <li><Link href="/supplier-estimates/lumber-takeoffs" className="text-sm font-semibold text-gray-800 hover:text-brand-orange">Lumber Takeoff and Estimating Services</Link></li>
                          <li><Link href="/supplier-estimates" className="text-sm font-semibold text-gray-800 hover:text-brand-orange">Supplier Estimating Takeoff</Link></li>
                          <li><Link href="/supplier-estimates/steel-takeoffs" className="text-sm font-semibold text-gray-800 hover:text-brand-orange">Steel Cost Estimating Takeoff Services</Link></li>
                          <li><Link href="/supplier-estimates/flooring-tiles-takeoffs" className="text-sm font-semibold text-gray-800 hover:text-brand-orange">Flooring Tiles Takeoff Services</Link></li>
                        </ul>
                      </div>

                    </div>
                  </div>
                )}
              </div>
              
              <Link href="/contact" className="text-gray-800 hover:text-brand-orange font-semibold text-[15px] uppercase tracking-wide">
                Contact Us
              </Link>
              
              {/* Search Icon */}
              <button aria-label="Search" className="text-gray-800 hover:text-brand-orange">
                <svg width="20" height="20" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504.1 471l-134-134C399.1 301.5 415.1 256.8 415.1 208c0-114.9-93.13-208-208-208S-.0002 93.13-.0002 208S93.12 416 207.1 416c48.79 0 93.55-16.91 129-45.04l134 134C475.7 509.7 481.9 512 488 512s12.28-2.344 16.97-7.031C514.3 495.6 514.3 480.4 504.1 471zM48 208c0-88.22 71.78-160 160-160s160 71.78 160 160s-71.78 160-160 160S48 296.2 48 208z"/></svg>
              </button>

              {/* Phone Number */}
              <a href="tel:(727) 284-6082" className="text-gray-800 font-bold hover:text-brand-orange text-[15px]">
                (727) 284-6082
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center space-x-4">
              {/* Mobile Phone Icon */}
              <a href="tel:(727) 284-6082" className="text-brand-navy">
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
              <Link href="/contact" className="block px-3 py-2 text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-brand-orange uppercase">Contact Us</Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
