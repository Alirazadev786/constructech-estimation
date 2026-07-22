import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import UploadPlansButton from '@/components/UploadPlansButton';

export const metadata: Metadata = {
  title: 'Who We Serve | Constructech Estimation',
  description: 'Explore estimating services for General Contractors, Subcontractors, and Material Suppliers.',
};

export default function WhoWeServePage() {
  const categories = [
    {
      title: "General Contractor Estimating",
      description: "Comprehensive multi-trade estimating and bid preparation tailored for general contractors managing public, commercial, and residential construction.",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      image: "/images/hero_estimators.png",
      items: [
        { name: "Public Projects Estimates", href: "/general-contractor-services/public-projects-estimates" },
        { name: "Commercial Estimating Services", href: "/general-contractor-services/commercial-estimating" },
        { name: "Residential Estimating Services", href: "/general-contractor-services/residential-estimating" },
        { name: "MultiFamily Apartments Estimating", href: "/general-contractor-services/multi-family-apartments" },
        { name: "Industrial Estimating", href: "/general-contractor-services/industrial-estimating" }
      ]
    },
    {
      title: "Sub Contractors Estimating",
      description: "Trade-specific material takeoffs and quantity counts designed to help subcontractors bid quickly and win more jobs.",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      image: "/images/sub_contractors.png",
      items: [
        { name: "Concrete Takeoff Estimates", href: "/sub-contractors-estimates/concrete-estimating-services" },
        { name: "Masonry Takeoff Estimates", href: "/sub-contractors-estimates/masonry-estimates" },
        { name: "Metal Takeoff Estimates", href: "/sub-contractors-estimates/metals-takeoffs" },
        { name: "Lumber Takeoff Estimates", href: "/supplier-estimates/lumber-takeoffs" },
        { name: "Drywall Takeoff Estimates", href: "/sub-contractors-estimates/dry-wall-takeoffs" },
        { name: "Flooring Takeoff Estimates", href: "/sub-contractors-estimates/flooring-estimates" },
        { name: "Interior and Exterior Takeoff Estimates", href: "/sub-contractors-estimates/exterior-finishes-estimates" },
        { name: "Plumbing Takeoff Estimates", href: "/sub-contractors-estimates/plumbing-estimates" },
        { name: "HVAC Takeoff Estimates", href: "/sub-contractors-estimates/hvac-estimates" },
        { name: "Electrical Takeoff Estimates", href: "/sub-contractors-estimates/electrical-work-estimating-takeoffs" }
      ]
    },
    {
      title: "Supplier Estimating Takeoff",
      description: "Precise bill of materials (BOM) and material counts allowing suppliers to quote their contractor clients with speed and precision.",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
      image: "/images/general_contractors.png",
      items: [
        { name: "Rebar Estimating Detailing Takeoff Services", href: "/supplier-estimates/rebar-takeoffs" },
        { name: "Lumber Takeoff and Estimating Services", href: "/supplier-estimates/lumber-takeoffs" },
        { name: "Supplier Estimating Takeoff", href: "/supplier-estimates" },
        { name: "Steel Cost Estimating Takeoff Services", href: "/supplier-estimates/steel-takeoffs" },
        { name: "Flooring Tiles Takeoff Services", href: "/supplier-estimates/flooring-tiles-takeoffs" }
      ]
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
            WHO WE SERVE
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Tailored Solutions for <span className="text-brand-orange">Your Sector</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Select your category below to explore dedicated estimating services and trade-specific takeoffs.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">Our Client Categories</h2>
            <div className="w-24 h-1.5 bg-brand-orange mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-300">
                
                {/* Header Banner */}
                <div className="bg-brand-navy text-white p-6 relative overflow-hidden">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="bg-brand-orange p-3 rounded-xl shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={cat.icon} />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold leading-tight">{cat.title}</h3>
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed">{cat.description}</p>
                </div>

                {/* Subcategories List */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h4 className="text-xs font-extrabold text-brand-orange uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                      Available Services & Takeoffs ({cat.items.length})
                    </h4>
                    <ul className="space-y-2.5 mb-6">
                      {cat.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Link 
                            href={item.href}
                            className="flex items-start text-sm text-gray-700 hover:text-brand-orange font-medium group transition-colors p-1.5 rounded-lg hover:bg-orange-50/50"
                          >
                            <svg className="w-4 h-4 text-brand-orange mr-2 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <UploadPlansButton className="w-full mt-4 bg-brand-navy hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider text-center transition-colors">
                    Upload Plans for {cat.title.split(' ')[0]}
                  </UploadPlansButton>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-navy py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Need a Custom Estimate?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Upload your project plans now and receive a detailed quote within 24-48 hours.
          </p>
          <UploadPlansButton className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-10 rounded text-lg shadow-lg">
            Upload Plans Now
          </UploadPlansButton>
        </div>
      </div>
    </>
  );
}
