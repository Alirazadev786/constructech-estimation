import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brand-navy text-white overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="currentColor" points="0,100 100,0 100,100" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32 lg:py-40 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Precision <span className="text-brand-orange">Estimates</span> for Construction Professionals
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0">
              Win more bids and increase your profit margins with our highly accurate and reliable construction estimating and material takeoff services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/contact" className="px-8 py-3 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-md shadow-lg transition transform hover:-translate-y-1">
                Get a Free Quote
              </Link>
              <Link href="/services" className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-brand-navy text-white font-bold rounded-md transition">
                Explore Services
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="bg-white p-2 rounded-xl shadow-2xl transform rotate-2 hover:rotate-0 transition duration-500">
              {/* Replace with a generated image later if needed, using a placeholder for now */}
              <div className="aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/20 to-transparent"></div>
                 <span className="text-brand-navy/50 font-bold text-xl">Construction Blueprint Illustration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges / Stats */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-extrabold text-brand-navy mb-2">99%</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-brand-navy mb-2">24-48h</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Turnaround Time</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-brand-navy mb-2">$5B+</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Estimated Value</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-brand-navy mb-2">1,500+</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-brand-navy">Comprehensive Estimating Services</h3>
            <div className="mt-4 w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="p-8">
                <div className="w-14 h-14 bg-orange-100 text-brand-orange rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-brand-navy mb-3">Cost Estimating</h4>
                <p className="text-gray-600 mb-6">Detailed and accurate cost projections covering labor, materials, equipment, and overhead to ensure your bids are competitive and profitable.</p>
                <Link href="/services" className="text-brand-orange font-semibold hover:text-orange-700 flex items-center">
                  Read More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="p-8">
                <div className="w-14 h-14 bg-orange-100 text-brand-orange rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-brand-navy mb-3">Material Takeoffs</h4>
                <p className="text-gray-600 mb-6">Precise quantification of all materials required for your project, extracted directly from your blueprints and plans using advanced software.</p>
                <Link href="/services" className="text-brand-orange font-semibold hover:text-orange-700 flex items-center">
                  Read More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="p-8">
                <div className="w-14 h-14 bg-orange-100 text-brand-orange rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-brand-navy mb-3">Bid Preparation</h4>
                <p className="text-gray-600 mb-6">End-to-end support in preparing, formatting, and submitting your bids, giving you the best chance to win lucrative contracts.</p>
                <Link href="/services" className="text-brand-orange font-semibold hover:text-orange-700 flex items-center">
                  Read More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-navy relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-brand-orange opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-brand-orange opacity-20 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Ready to Win Your Next Project?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Upload your plans today and let our expert estimators provide you with a fast, accurate quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white font-bold rounded-md shadow-xl transition transform hover:scale-105 w-full sm:w-auto">
              Upload Plans Now
            </Link>
            <a href="tel:1-888-859-0222" className="px-8 py-4 bg-white hover:bg-gray-100 text-brand-navy font-bold rounded-md shadow-xl transition w-full sm:w-auto flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 1-888-859-0222
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
