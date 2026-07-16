import Link from 'next/link';
import Image from 'next/image';
import HeroSlider from '@/components/HeroSlider';

export default function Home() {
  return (
    <div className="w-full flex flex-col font-sans">
      
      {/* 1. HERO SLIDER */}
      <HeroSlider />

      {/* STATS OVERLAP */}
      <section className="relative z-20 md:-mt-8 px-4 sm:px-6 lg:px-8 bg-transparent pb-10 md:pb-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: 'Customer Satisfaction', value: '98%' },
              { label: 'Industry Awards', value: '20+' },
              { label: 'Years Experience', value: '15+' },
              { label: 'Successful Projects', value: '1000+' }
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-[16px] shadow-[0px_10px_30px_0px_rgba(0,0,0,0.1)] p-3 md:p-4 text-center border-b-[4px] border-brand-orange transform hover:-translate-y-2 transition-transform duration-300">
                <div className="text-xl md:text-2xl font-extrabold text-brand-navy mb-1">{stat.value}</div>
                <div className="text-[10px] md:text-xs font-semibold text-gray-600 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-brand-orange font-bold text-lg mb-2 tracking-widest uppercase">Overview</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-8">Construction Estimating & Quantity Takeoff Services</h1>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
            Constructech Estimation provides comprehensive, highly accurate construction cost estimating and material takeoff services. With over 15 years in the industry, our expert team utilizes cutting-edge software and a profound understanding of the construction lifecycle to deliver bids that win.
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            From residential renovations to massive commercial high-rises, our tailored approach ensures that general contractors, subcontractors, architects, and developers stay within budget and ahead of schedule.
          </p>
        </div>
      </section>

      {/* ESTIMATING SERVICES WE PROVIDE */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">Estimating Services We Provide</h2>
            <div className="w-24 h-1.5 bg-brand-orange mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-orange hover:-translate-y-2 transition-transform">
              <h3 className="text-xl font-bold text-brand-navy mb-4">Cost Estimating</h3>
              <p className="text-gray-600 mb-6">Comprehensive breakdown of labor, materials, equipment, and overhead for accurate project budgeting.</p>
              <Link href="/services/cost-estimating" className="text-brand-orange font-bold hover:underline">Learn more →</Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-navy hover:-translate-y-2 transition-transform">
              <h3 className="text-xl font-bold text-brand-navy mb-4">Construction Takeoff</h3>
              <p className="text-gray-600 mb-6">Precise material quantification from digital blueprints ensuring you never over-order or run short.</p>
              <Link href="/services/construction-takeoff" className="text-brand-orange font-bold hover:underline">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO DO WE HELP? */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Who Do We Help?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Our estimating solutions are customized for every tier of the construction industry.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['General Contractors', 'Subcontractors', 'Suppliers & Vendors', 'Developers & Builders'].map((audience, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-xl border border-white/20 text-center hover:bg-brand-orange hover:border-brand-orange transition-colors cursor-default">
                <h3 className="text-lg font-bold">{audience}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6">Why Choose Us?</h2>
              <ul className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-brand-navy">Fast Turnaround Times</h4>
                    <p className="text-gray-600 mt-1">Get your complete estimate within 24 to 48 hours.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-brand-navy">Highly Accurate Takeoffs</h4>
                    <p className="text-gray-600 mt-1">We utilize Planswift, Bluebeam, and OST for precise measurements.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-brand-navy">Affordable Pricing</h4>
                    <p className="text-gray-600 mt-1">Competitive rates without compromising on quality or detail.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-brand-navy">24/7 Customer Support</h4>
                    <p className="text-gray-600 mt-1">Our team is always available to answer your questions.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/why_choose_1.png" alt="Why Choose Constructech" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* VALUE ADDED SERVICES */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy uppercase tracking-wider mb-2">
            Value Added Services at No Additional Cost
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
            Our nuanced process reduces the subjectivity of construction cost estimating – boiling it down to a science.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Executive Takeoff Summary',
                img: '/images/takeoff_summary.png',
                alt: 'Executive Takeoff Summary Sheet',
                link: '/services/executive-takeoff-summary'
              },
              {
                title: 'Color Coded Marked Plans',
                img: '/images/color_coded_marked_plans.png',
                alt: 'Color Coded Marked Blueprint Plans',
                link: '/services/color-coded-marked-plans'
              },
              {
                title: '3D Cut/Fill Grading Models',
                img: '/images/grading_models.png',
                alt: '3D Cut and Fill Grading Models',
                link: '/services/3d-grading-models'
              }
            ].map((service, index) => (
              <Link key={index} href={service.link} className="flex flex-col items-center group cursor-pointer w-full">
                <div className="w-full relative h-[320px] rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-gray-50 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <Image
                    src={service.img}
                    alt={service.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="w-12 h-1 bg-brand-orange mt-6 mb-3 transition-all duration-300 group-hover:w-20"></div>
                <h3 className="text-xl md:text-2xl font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-16">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="relative">
              <div className="w-20 h-20 mx-auto bg-brand-orange text-white rounded-full flex items-center justify-center text-3xl font-extrabold mb-6 shadow-lg z-10 relative">1</div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Upload Your Plans</h3>
              <p className="text-gray-600">Send us your digital blueprints and project specifications through our secure portal or via email.</p>
            </div>
            <div className="relative">
              <div className="w-20 h-20 mx-auto bg-brand-navy text-white rounded-full flex items-center justify-center text-3xl font-extrabold mb-6 shadow-lg z-10 relative">2</div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Get a Quote</h3>
              <p className="text-gray-600">We review your plans and provide a fast, affordable quote and timeframe for the takeoff.</p>
            </div>
            <div className="relative">
              <div className="w-20 h-20 mx-auto bg-brand-orange text-white rounded-full flex items-center justify-center text-3xl font-extrabold mb-6 shadow-lg z-10 relative">3</div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">Receive Your Estimate</h3>
              <p className="text-gray-600">You receive a highly detailed, formatted estimate ready for you to submit and win the bid.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-10">See What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Review 1 */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-md text-left flex flex-col hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="bg-[#00b67a] p-1 rounded-sm">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  ))}
                </div>
                <div className="text-xs font-bold text-gray-400 flex items-center gap-1">
                  <svg className="w-4 h-4 text-[#00b67a]" viewBox="0 0 512 512" fill="currentColor"><path d="M503.4 178.6c-4-12.2-15-20.8-28-21.2L330.1 152 268 18.5c-5.5-11.8-17.1-19.3-30.1-19.3s-24.6 7.5-30.1 19.3L145.7 152 1.3 157.4c-13 .4-24 9-28 21.2s1.4 25.5 11.6 33.6l108.9 86.8-37.5 141.5c-3.6 13.5 1.5 27.9 12.8 35.8 11 7.7 25.5 7.4 36.3-.7l123.6-92.4 123.6 92.4c10.8 8.1 25.3 8.4 36.3.7 11.3-7.9 16.4-22.3 12.8-35.8l-37.5-141.5 108.9-86.8c10.3-8.1 15.6-21.4 11.6-33.6z"/></svg>
                  Trustpilot
                </div>
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-2 line-clamp-1">Fast and highly accurate!</h4>
              <p className="text-gray-600 text-sm mb-6 flex-grow">"Constructech Estimation provided us with an incredibly detailed takeoff within 24 hours. Their accuracy helped us win a major commercial bid."</p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-50">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xs">DM</div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">David M.</div>
                  <div className="text-xs text-gray-500">2 days ago</div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-md text-left flex flex-col hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="bg-[#00b67a] p-1 rounded-sm">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  ))}
                </div>
                <div className="text-xs font-bold text-gray-400 flex items-center gap-1">
                  <svg className="w-4 h-4 text-[#00b67a]" viewBox="0 0 512 512" fill="currentColor"><path d="M503.4 178.6c-4-12.2-15-20.8-28-21.2L330.1 152 268 18.5c-5.5-11.8-17.1-19.3-30.1-19.3s-24.6 7.5-30.1 19.3L145.7 152 1.3 157.4c-13 .4-24 9-28 21.2s1.4 25.5 11.6 33.6l108.9 86.8-37.5 141.5c-3.6 13.5 1.5 27.9 12.8 35.8 11 7.7 25.5 7.4 36.3-.7l123.6-92.4 123.6 92.4c10.8 8.1 25.3 8.4 36.3.7 11.3-7.9 16.4-22.3 12.8-35.8l-37.5-141.5 108.9-86.8c10.3-8.1 15.6-21.4 11.6-33.6z"/></svg>
                  Trustpilot
                </div>
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-2 line-clamp-1">Best estimating service</h4>
              <p className="text-gray-600 text-sm mb-6 flex-grow">"They saved me so much time on lumber and framing takeoffs. Their formatting is easy to read, and the pricing was very reasonable. Highly recommend!"</p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-50">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xs">SJ</div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Sarah Jenkins</div>
                  <div className="text-xs text-gray-500">1 week ago</div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-md text-left flex flex-col hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="bg-[#00b67a] p-1 rounded-sm">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  ))}
                </div>
                <div className="text-xs font-bold text-gray-400 flex items-center gap-1">
                  <svg className="w-4 h-4 text-[#00b67a]" viewBox="0 0 512 512" fill="currentColor"><path d="M503.4 178.6c-4-12.2-15-20.8-28-21.2L330.1 152 268 18.5c-5.5-11.8-17.1-19.3-30.1-19.3s-24.6 7.5-30.1 19.3L145.7 152 1.3 157.4c-13 .4-24 9-28 21.2s1.4 25.5 11.6 33.6l108.9 86.8-37.5 141.5c-3.6 13.5 1.5 27.9 12.8 35.8 11 7.7 25.5 7.4 36.3-.7l123.6-92.4 123.6 92.4c10.8 8.1 25.3 8.4 36.3.7 11.3-7.9 16.4-22.3 12.8-35.8l-37.5-141.5 108.9-86.8c10.3-8.1 15.6-21.4 11.6-33.6z"/></svg>
                  Trustpilot
                </div>
              </div>
              <h4 className="text-base font-bold text-gray-900 mb-2 line-clamp-1">Professional and Reliable</h4>
              <p className="text-gray-600 text-sm mb-6 flex-grow">"We have been using Constructech for our MEP estimating for over a year now. Their team is extremely knowledgeable and their turnaround time is exceptional."</p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-50">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 text-xs">RT</div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Robert Thompson</div>
                  <div className="text-xs text-gray-500">2 weeks ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-brand-orange py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Let's Get Started!</h2>
          <p className="text-xl text-white/90 mb-10">Upload your plans today to get an accurate estimate in 24 hours.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-brand-orange font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-xl">
              Upload Plans
            </Link>
            <a href="tel:1-727-284-6082" className="bg-brand-navy text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-800 transition-colors shadow-xl border border-brand-navy">
              Call (727) 284-6082
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}
