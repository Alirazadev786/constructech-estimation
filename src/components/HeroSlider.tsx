'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

export default function HeroSlider() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, duration: 40 },
    [
      Autoplay({ delay: 5000, stopOnInteraction: false }),
      Fade()
    ]
  );

  return (
    <section className="relative w-full bg-brand-navy min-h-[600px] flex items-center overflow-hidden" ref={emblaRef}>
      <div className="flex w-full h-full min-h-[600px]">
        
        {/* Slide 1 */}
        <div className="relative flex-[0_0_100%] min-w-0 flex items-center pt-16 pb-16 md:pb-32">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/hero_bg.png" 
              alt="Hero Background" 
              fill 
              className="object-cover opacity-50"
              priority
            />
            <div className="absolute inset-0 bg-brand-navy/85"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-left text-white max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                  Construction Estimating &amp;<br />
                  <span className="text-brand-orange">Design Engineering Services</span>
                </h1>
                <p className="text-lg md:text-xl mb-8 leading-relaxed font-medium">
                  Take no risk, right from pre-design to bid documentation. Enhance your project management with the support of our professional estimators.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:1-718-719-2009" 
                    className="bg-brand-orange hover:bg-[#d65f29] text-white px-8 py-4 rounded font-bold text-lg text-center transition shadow-lg"
                  >
                    Call Us
                  </a>
                  <Link 
                    href="/contact" 
                    className="bg-white hover:bg-gray-100 text-brand-navy px-8 py-4 rounded font-bold text-lg text-center transition shadow-lg flex items-center justify-center gap-2"
                  >
                    Book an Appointment
                  </Link>
                </div>
              </div>
              
              {/* Right Image */}
              <div className="relative w-full h-[300px] md:h-[400px] rounded-[20px] shadow-2xl overflow-hidden border-4 border-white/10 mt-10 md:mt-0">
                <Image 
                  src="/images/hero_estimators.png" 
                  alt="Professional Estimators" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative flex-[0_0_100%] min-w-0 flex items-center pt-16 pb-16 md:pb-32">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/general_contractors.png" 
              alt="Update Background" 
              fill 
              className="object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-brand-navy/85"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
              Residential & Commercial <br />
              <span className="text-brand-orange">Estimating Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed font-medium text-white max-w-3xl mx-auto">
              Send us your plans for a quick and highly accurate quote.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-brand-orange hover:bg-[#d65f29] text-white px-8 py-4 rounded-[40px] font-bold text-xl text-center transition shadow-[0px_4px_20px_0px_rgba(232,106,51,0.5)]"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
