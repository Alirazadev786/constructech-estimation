import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import UploadPlansButton from '@/components/UploadPlansButton';

export const metadata: Metadata = {
  title: 'Who We Serve | Constructech Estimation',
  description: 'Estimating solutions tailored for General Contractors, Subcontractors, Developers, Architects, and Material Suppliers.',
};

export default function WhoWeServePage() {
  const clientTypes = [
    {
      title: "General Contractors",
      description: "Comprehensive multi-trade estimating and bid preparation for commercial, residential, and public projects.",
      link: "/general-contractor-services/commercial-estimating",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    },
    {
      title: "Subcontractors",
      description: "Trade-specific material takeoffs and detailed labor breakdowns to help you bid faster and win more jobs.",
      link: "/sub-contractors-estimates",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    },
    {
      title: "Material Suppliers",
      description: "Precise bill of materials (BOM) and quantity counts so you can quote your clients with total speed and accuracy.",
      link: "/supplier-estimates",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    },
    {
      title: "Developers & Owners",
      description: "Conceptual estimates, feasibility studies, and value engineering analysis to control budget during design.",
      link: "/services/value-engineering",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  ];

  return (
    <>
      {/* Hero */}
      <div className="relative bg-brand-navy py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/images/hero_bg.png" alt="Who We Serve Background" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 bg-brand-orange/20 text-brand-orange font-bold rounded-full text-sm mb-6">
            CLIENT SECTORS
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Who We <span className="text-brand-orange">Serve</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Tailored estimating solutions for every stakeholder in the construction industry.
          </p>
        </div>
      </div>

      {/* Client Types Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientTypes.map((client, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={client.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-3">{client.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{client.description}</p>
              </div>
              <Link href={client.link} className="text-brand-orange font-bold flex items-center hover:underline">
                Explore Services &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-brand-navy py-16 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Have Plans Ready to Estimate?</h2>
          <p className="text-gray-300 mb-8">Send your drawings today for a fast turnaround.</p>
          <UploadPlansButton className="bg-brand-orange hover:bg-orange-600 px-8 py-4 rounded font-bold text-lg shadow-lg">
            Upload Plans
          </UploadPlansButton>
        </div>
      </div>
    </>
  );
}
