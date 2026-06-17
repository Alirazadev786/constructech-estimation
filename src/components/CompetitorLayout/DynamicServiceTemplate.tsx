import Link from 'next/link';

export default function CompetitorPageLayout({ data }: { data: any }) {
  if (!data) return <div className="min-h-screen flex items-center justify-center font-bold text-2xl text-brand-navy">Page not found</div>;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-brand-navy py-20 md:py-32 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/images/hero_bg.png')] bg-cover bg-center"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-orange rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight uppercase">
            {data.title || "Constructech Estimation"}
          </h1>
          <div className="w-24 h-1.5 bg-brand-orange mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-medium">
            Accurate, reliable, and timely estimates to help you win more bids and build with confidence.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <div className="w-full lg:w-[70%]">
            <div className="prose prose-lg max-w-none prose-headings:text-brand-navy prose-p:text-gray-600 prose-li:text-gray-600 marker:text-brand-orange">
              {data.sections && data.sections.map((section: any, idx: number) => {
                if (section.type === 'h1') return <h1 key={idx} className="text-4xl font-extrabold text-brand-navy mb-6 mt-12">{section.text}</h1>;
                if (section.type === 'h2') return (
                  <h2 key={idx} className="text-3xl font-bold text-brand-navy mb-6 mt-12 flex items-center gap-3">
                    <span className="w-8 h-1 bg-brand-orange hidden sm:inline-block"></span>
                    {section.text}
                  </h2>
                );
                if (section.type === 'h3') return <h3 key={idx} className="text-2xl font-bold text-brand-navy mb-4 mt-8">{section.text}</h3>;
                if (section.type === 'p') {
                  // Ignore generic footer/nav text that might have been scraped
                  if (section.text.includes("© Construct'EM") || section.text.includes("Social Links")) return null;
                  return <p key={idx} className="mb-6 leading-relaxed text-[17px]">{section.text}</p>;
                }
                if (section.type === 'list') {
                  // Filter out generic navigation lists scraped from the footer
                  const isNavList = section.items.some((item: string) => 
                    item.includes("info@Constructech") || item.includes("Head Office") || item.includes("Reviews")
                  );
                  if (isNavList) return null;

                  return (
                    <ul key={idx} className="mb-8 space-y-3 bg-gray-50 p-6 rounded-xl border border-gray-100">
                      {section.items.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </div>

            {/* Bottom CTA Banner */}
            <div className="mt-16 bg-brand-navy rounded-2xl p-10 text-center relative overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-[url('/images/cta_image.png')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
               <div className="relative z-10">
                 <h3 className="text-3xl font-extrabold text-white mb-4">Ready to Win More Bids?</h3>
                 <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">Get highly accurate construction takeoffs & estimates! Contact us today for a free quote.</p>
                 <div className="flex flex-col sm:flex-row justify-center gap-4">
                   <a href="tel:718-719-2009" className="bg-brand-orange text-white font-bold py-4 px-8 rounded flex items-center justify-center gap-2 hover:bg-orange-600 transition text-lg shadow-lg">
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                     </svg>
                     (718) 719-2009
                   </a>
                   <Link href="/contact" className="bg-white text-brand-navy font-bold py-4 px-8 rounded hover:bg-gray-100 transition text-lg shadow-lg text-center">
                     Request a Quote
                   </Link>
                 </div>
               </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[30%]">
            <div className="sticky top-32 space-y-8">
              
              {/* Sidebar Menu */}
              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-extrabold text-brand-navy mb-6 pb-4 border-b-2 border-brand-orange uppercase">Our Services</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/services/cost-estimating" className="group flex items-center justify-between text-gray-700 font-bold hover:text-brand-orange transition-colors">
                      Cost Estimating
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-brand-orange transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li className="border-t border-gray-200 pt-4">
                    <Link href="/services/construction-takeoff" className="group flex items-center justify-between text-gray-700 font-bold hover:text-brand-orange transition-colors">
                      Construction Takeoff
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-brand-orange transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li className="border-t border-gray-200 pt-4">
                    <Link href="/services/design-build-services" className="group flex items-center justify-between text-gray-700 font-bold hover:text-brand-orange transition-colors">
                      Design Build Services
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-brand-orange transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li className="border-t border-gray-200 pt-4">
                    <Link href="/our-trades" className="group flex items-center justify-between text-gray-700 font-bold hover:text-brand-orange transition-colors">
                      Our Trades
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-brand-orange transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Sidebar Quick Contact Banner */}
              <div className="bg-brand-orange text-white p-8 rounded-2xl text-center shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                <div className="relative z-10">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="font-extrabold text-2xl mb-2">Need a Quick Quote?</h4>
                  <p className="text-white/90 mb-6 text-sm">Send your plans today and get an estimate in 24-48 hours.</p>
                  <Link href="/contact" className="inline-block bg-white text-brand-orange font-bold py-3 px-6 rounded shadow hover:bg-gray-50 transition w-full">
                    Upload Plans Now
                  </Link>
                </div>
              </div>

              {/* Sidebar Help Banner */}
              <div className="bg-brand-navy p-8 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-4">
                 <div className="bg-brand-orange p-3 rounded-full shrink-0">
                   <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                   </svg>
                 </div>
                 <div>
                   <h4 className="font-bold text-white text-lg">24/7 Support</h4>
                   <a href="mailto:info@constructechestimation.com" className="text-brand-orange font-medium text-sm hover:underline">info@constructechestimation.com</a>
                 </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

