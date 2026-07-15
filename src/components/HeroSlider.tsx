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
      Autoplay({
        delay: (scrollSnaps) => scrollSnaps.map((_, i) => (i === 0 ? 4000 : 7000)),
        stopOnInteraction: false
      }),
      Fade()
    ]
  );

  return (
    <section className="relative w-full bg-brand-navy overflow-hidden" ref={emblaRef}>
      <div className="flex w-full h-full items-stretch">

        {/* Slide 1 */}
        <div className="relative flex-[0_0_100%] min-w-0 flex items-center pt-4 pb-16 md:pt-6 md:pb-24">
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
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
                  Construction Estimating &amp;<br />
                  <span className="text-brand-orange">Quantity Takeoff Services</span>
                </h1>
                <p className="text-lg md:text-xl mb-8 leading-relaxed font-medium">
                  Take no risk, right from pre-design to bid documentation. Enhance your project management with the support of our professional estimators.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:1-727-284-6082"
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
              <div className="relative w-full h-[250px] md:h-[350px] rounded-[20px] shadow-2xl overflow-hidden border-4 border-white/10 mt-10 md:mt-0">
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
        <div className="relative flex-[0_0_100%] min-w-0 flex items-center pt-4 pb-16 md:pt-6 md:pb-24">
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 text-white">
              Residential & Commercial <br />
              <span className="text-brand-orange">Estimating Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed font-medium text-white max-w-3xl mx-auto">
              Send us your plans for a quick and highly accurate quote.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-brand-orange hover:bg-[#d65f29] text-white px-8 py-4 rounded-[40px] font-bold text-xl text-center transition shadow-[0px_4px_20px_0px_rgba(232,106,51,0.5)]"
              >
                Get a Quote
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-white hover:bg-gray-100 text-brand-navy px-8 py-4 rounded-[40px] font-bold text-xl text-center transition shadow-[0px_4px_20px_0px_rgba(255,255,255,0.2)]"
              >
                Upload Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
