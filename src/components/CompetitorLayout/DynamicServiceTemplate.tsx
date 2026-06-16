import Link from 'next/link';

export default function CompetitorPageLayout({ data }: { data: any }) {
  if (!data) return <div>Page not found</div>;

  return (
    <>
      {/* Hero Section */}
      <div className="bg-brand-navy py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero_bg.png')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            {data.title || "Constructech Estimation"}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Accurate, reliable, and timely estimates to help you win more bids.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold text-brand-navy mb-4 border-b pb-2">Our Services</h3>
              <ul className="space-y-3">
                <li><Link href="/services/cost-estimating" className="text-brand-orange font-bold hover:underline">Cost Estimating</Link></li>
                <li><Link href="/services/construction-takeoff" className="text-brand-orange font-bold hover:underline">Construction Takeoff</Link></li>
                <li><Link href="/services/design-build-services" className="text-brand-orange font-bold hover:underline">Design Build Services</Link></li>
                <li><Link href="/services/design-drawing-engineering" className="text-brand-orange font-bold hover:underline">Design & Engineering</Link></li>
                <li><Link href="/our-trades" className="text-brand-orange font-bold hover:underline">Our Trades</Link></li>
              </ul>
              
              <div className="mt-8 bg-brand-navy text-white p-6 rounded-xl text-center">
                <h4 className="font-bold text-lg mb-2">Need a Quick Quote?</h4>
                <p className="text-sm mb-4 text-gray-300">Send your plans today and get an estimate in 24-48 hours.</p>
                <Link href="/contact" className="inline-block bg-brand-orange text-white font-bold py-2 px-4 rounded w-full hover:bg-orange-600 transition">
                  Upload Plans
                </Link>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-3/4 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
            <div className="prose prose-lg max-w-none text-gray-700">
              {data.sections && data.sections.map((section: any, idx: number) => {
                if (section.type === 'h1') return <h1 key={idx} className="text-4xl font-extrabold text-brand-navy mb-6 mt-8">{section.text}</h1>;
                if (section.type === 'h2') return <h2 key={idx} className="text-3xl font-bold text-brand-navy mb-5 mt-10 border-b pb-2">{section.text}</h2>;
                if (section.type === 'h3') return <h3 key={idx} className="text-2xl font-bold text-brand-navy mb-4 mt-8">{section.text}</h3>;
                if (section.type === 'p') return <p key={idx} className="mb-6 leading-relaxed">{section.text}</p>;
                if (section.type === 'list') return (
                  <ul key={idx} className="list-disc pl-6 mb-6 space-y-2">
                    {section.items.map((item: string, i: number) => (
                      <li key={i} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                );
                return null;
              })}
            </div>
            
            <div className="mt-12 bg-gray-50 p-8 rounded-xl border border-gray-200 text-center">
               <h3 className="text-2xl font-bold text-brand-navy mb-4">Ready to work with us?</h3>
               <p className="text-gray-600 mb-6">Call us today at <a href="tel:1-718-719-2009" className="text-brand-orange font-bold">(718) 719-2009</a> or click below.</p>
               <Link href="/contact" className="inline-block bg-brand-orange text-white font-bold py-3 px-8 rounded shadow-lg hover:-translate-y-1 transition transform">
                 Get Started
               </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
