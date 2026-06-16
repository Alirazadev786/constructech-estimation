import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-brand-navy min-h-[600px] flex items-center pt-16 pb-16 md:pb-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/Construction-Takeoff-and-Cost-Estimation-12-1024x512.webp" 
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
                Our building estimating company expert in design and construction estimates. Enhance your project management with the support of our professional estimators.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:1-888-859-0222" 
                  className="bg-brand-orange hover:bg-[#d65f29] text-white px-8 py-4 rounded font-bold text-lg text-center transition shadow-lg"
                >
                  Call Us
                </a>
                <Link 
                  href="/about" 
                  className="bg-white hover:bg-gray-100 text-brand-navy px-8 py-4 rounded font-bold text-lg text-center transition shadow-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Company Profile
                </Link>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative w-full h-[300px] md:h-[400px] rounded-lg shadow-2xl overflow-hidden border-4 border-white/10 mt-10 md:mt-0">
              <Image 
                src="/images/professional-construction-estimators.webp" 
                alt="Professional Estimators" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        
        {/* STATS OVERLAP */}
        <div className="relative md:absolute md:left-0 md:right-0 md:-bottom-16 z-20 mt-16 md:mt-0 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { label: 'Customer Satisfaction', value: '98%' },
                { label: 'Industry Awards', value: '20+' },
                { label: 'Years Experience', value: '15+' },
                { label: 'Projects Completed', value: '5000+' }
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-lg shadow-xl p-6 text-center border-b-4 border-brand-orange transform hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base font-semibold text-gray-600 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. REVIEWS PLACEHOLDER */}
      <section className="pt-16 md:pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1 bg-brand-orange/10 text-brand-orange font-bold rounded-full mb-4 uppercase text-sm tracking-wider">
            Testimonials
          </div>
          <h2 className="text-3xl font-extrabold text-brand-navy mb-10">See What Our Clients Say</h2>
          <div className="w-full max-w-4xl mx-auto h-[120px] bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
            <p className="text-gray-400 font-medium">Trustindex Google Reviews Widget Placeholder</p>
          </div>
        </div>
      </section>

      {/* 3. OUR TRADES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-brand-orange/10 text-brand-orange font-bold rounded-full mb-4 uppercase text-sm tracking-wider">
              Our Trades
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy">Who Do We Help?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* General Contractors */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg h-[300px]">
              <div className="absolute inset-0 z-0">
                <Image src="/images/Construction-Estimating-Company.webp" alt="General Contractors" fill className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-brand-navy/80 z-10 group-hover:bg-brand-navy/60 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-8 text-center">
                <svg className="w-16 h-16 text-brand-orange mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-2">General Contractors</h3>
                <p className="text-gray-200 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Accurate and comprehensive estimates to help you win more bids and manage costs effectively.
                </p>
              </div>
            </div>

            {/* Sub Contractors */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg h-[300px]">
              <div className="absolute inset-0 z-0">
                <Image src="/images/Construction-Takeoff-and-Cost-Estimation-12-1024x512.webp" alt="Sub Contractors" fill className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-brand-navy/80 z-10 group-hover:bg-brand-navy/60 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-8 text-center">
                <svg className="w-16 h-16 text-brand-orange mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-2">Sub Contractors</h3>
                <p className="text-gray-200 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Trade-specific takeoffs allowing you to focus on the work while we handle the numbers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (Text Left, Image Right) */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-1 bg-brand-orange/10 text-brand-orange font-bold rounded-full mb-4 uppercase text-sm tracking-wider">
                Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6 leading-tight">
                Get Accurate Construction Estimating Services for Your Project!
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                When you partner with our estimating company, you get access to a team of highly experienced estimators equipped with the latest software and deep industry knowledge. We ensure every cost is accounted for, eliminating guesswork and preventing budget overruns.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Extensive experience in all CSI divisions.',
                  'Detailed and accurate material takeoffs.',
                  'Fast turnaround times (24-48 hours).',
                  'Affordable pricing for contractors of all sizes.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/about" 
                className="inline-block bg-brand-navy hover:bg-gray-800 text-white px-8 py-4 rounded font-bold transition shadow-md"
              >
                Learn More About Us
              </Link>
            </div>
            
            {/* Overlapping Images Container */}
            <div className="order-1 lg:order-2 relative h-[350px] md:h-[500px] w-full mt-8 lg:mt-0">
              <div className="absolute top-0 right-0 w-3/4 aspect-square bg-gray-200 rounded-lg shadow-xl overflow-hidden flex items-center justify-center border-4 border-white relative z-0">
                <Image src="/images/professional-construction-estimating-company-1894x2048.webp" alt="Why Choose Us" fill className="object-cover" />
              </div>
              <div className="absolute bottom-4 md:bottom-10 left-0 w-3/5 aspect-video bg-gray-300 rounded-lg shadow-2xl overflow-hidden flex items-center justify-center border-4 border-white relative z-10">
                <Image src="/images/Construction-Estimating-Services-3-1-1024x470.webp" alt="Estimating Services" fill className="object-cover" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute top-1/2 left-[-5%] transform -translate-y-1/2 bg-white p-4 md:p-6 rounded-lg shadow-xl flex items-center gap-4 z-20">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-orange/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-black text-brand-navy">100%</div>
                  <div className="text-gray-500 font-semibold text-xs md:text-sm uppercase">Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS / STEP-BY-STEP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1 bg-brand-orange/10 text-brand-orange font-bold rounded-full mb-4 uppercase text-sm tracking-wider">
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-16">How Our Construction Estimating Works</h2>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 z-0"></div>
            
            {[
              { num: '01', title: 'Upload Plans', desc: 'Send us your blueprints and specifications.' },
              { num: '02', title: 'Review & Quote', desc: 'We analyze your files and provide a fixed quote.' },
              { num: '03', title: 'Detailed Takeoff', desc: 'Our team performs a precise quantity takeoff.' },
              { num: '04', title: 'Final Delivery', desc: 'Receive your detailed estimate ready for bidding.' }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="w-20 h-20 bg-brand-navy rounded-full text-white flex items-center justify-center text-2xl font-black mb-6 shadow-lg border-4 border-white outline outline-4 outline-gray-50">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h3>
                <p className="text-gray-600 font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VIDEO MODAL & LIST */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Video Placeholder */}
            <div className="relative w-full aspect-video bg-gray-800 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center border-4 border-gray-700">
              <Image src="/images/Top-5-Questions-to-Ask-a-Construction-Estimating-Company-768x384.webp" alt="Video Thumbnail" fill className="object-cover opacity-60" />
              <button className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-brand-orange rounded-full flex items-center justify-center shadow-[0_0_0_10px_rgba(232,106,51,0.3)] hover:scale-110 transition-transform">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1 md:ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
            
            {/* Content List */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8 leading-tight">
                Empowering Professionals with Precise Estimates
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'ASPE Certified', desc: 'We strictly follow the American Society of Professional Estimators guidelines.' },
                  { title: 'Zip-Code Pricing', desc: 'Using RSMeans and local vendor pricing for accurate material costs.' },
                  { title: 'Dedicated Support', desc: 'Our estimators are available to discuss your project via phone or email.' },
                  { title: 'Win More Bids', desc: 'Increase your bid-hit ratio with highly competitive and accurate estimates.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-brand-orange/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-300 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SERVICES GRID */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-brand-orange/10 text-brand-orange font-bold rounded-full mb-4 uppercase text-sm tracking-wider">
              Core Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy">Our Construction Services</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', title: 'Commercial Estimating' },
              { icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', title: 'Residential Estimating' },
              { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Industrial Estimating' },
              { icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', title: 'Material Takeoffs' },
              { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', title: 'CPM Scheduling' },
              { icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z', title: 'Design Build Estimates' }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:border-brand-orange hover:shadow-xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-brand-navy/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-orange/10 transition-colors">
                  <svg className="w-8 h-8 text-brand-navy group-hover:text-brand-orange transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 font-medium leading-relaxed">
                  Detailed and highly accurate quantity takeoffs tailored to your specific trade and requirements.
                </p>
                <Link href="/services" className="text-brand-orange font-bold uppercase text-sm flex items-center hover:text-brand-navy transition-colors">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#621215] rounded-[40px] md:rounded-[60px] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative shadow-2xl">
            <div className="flex flex-col items-center justify-center max-w-[388px] text-center z-10 w-full">
              <h2 className="text-white text-3xl font-bold leading-tight mb-4 font-sans">
                Ready to Win More Bids?
              </h2>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Send us your plans today and get a highly accurate estimate within 24-48 hours.
              </p>
              <a href="mailto:info@constructech.com" className="bg-[#E1AB4E] hover:bg-[#c89237] text-white font-bold py-3 px-8 rounded inline-flex items-center transition-transform hover:-translate-y-1">
                Upload Plans Now
              </a>
            </div>
            
            <div className="z-10 w-full max-w-[350px] bg-white/10 rounded-2xl aspect-video flex items-center justify-center border border-white/20 overflow-hidden relative">
              <Image src="/images/Top-5-Questions-to-Ask-a-Construction-Estimating-Company.webp" alt="CTA Graphic" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
