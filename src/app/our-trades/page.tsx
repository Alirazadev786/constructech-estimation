import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Trades | Constructech Estimation',
  description: 'Specialized estimating services for every trade in the construction industry.',
};

export default function OurTradesPage() {
  const trades = [
    { title: "Public Projects", description: "Accurate estimating for state and federal projects.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
    { title: "Commercial", description: "Detailed takeoffs for offices, retail, and commercial developments.", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { title: "Residential", description: "Estimates for single-family homes, custom builds, and renovations.", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { title: "Industrial", description: "Heavy duty estimating for industrial facilities and warehouses.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { title: "Concrete & Masonry", description: "Precise material calculations for foundations, walls, and flatwork.", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
    { title: "MEP Trades", description: "Mechanical, Electrical, and Plumbing specialized takeoffs.", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
  ];

  return (
    <>
      <div className="bg-brand-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Trades</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We provide specialized estimating services tailored to the unique requirements of every trade.
          </p>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trades.map((trade, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
                <div className="w-14 h-14 bg-orange-100 text-brand-orange rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={trade.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{trade.title}</h3>
                <p className="text-gray-600 mb-6">{trade.description}</p>
                <Link href="/contact" className="text-brand-orange font-bold hover:underline flex items-center text-sm">
                  Request Estimate
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <Link href="/contact" className="inline-block bg-brand-navy text-white font-bold py-4 px-8 rounded hover:bg-gray-800 transition-colors">
               Don't see your trade? Contact Us
             </Link>
          </div>
        </div>
      </div>
    </>
  );
}
