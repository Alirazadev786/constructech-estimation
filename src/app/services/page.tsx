import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import UploadPlansButton from '@/components/UploadPlansButton';

export const metadata: Metadata = {
  title: 'Our Services | Constructech Estimation',
  description: 'Explore our comprehensive construction estimating services including cost estimation, material takeoffs, and bid preparation.',
};

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Core Estimating Services",
      description: "Comprehensive cost estimation, material quantification, value engineering, and CPM scheduling solutions.",
      items: [
        { name: "Cost Estimation", href: "/services/cost-estimating" },
        { name: "Material Takeoff", href: "/services/material-takeoff" },
        { name: "Value Engineering", href: "/services/value-engineering" },
        { name: "CPM Scheduling", href: "/services/cpm-scheduling" }
      ],
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      image: "/images/hero_estimators.png"
    },
    {
      title: "Subcontractor Estimating (Trades)",
      description: "Highly detailed trade-specific takeoffs designed to help subcontractors bid accurately and win more contracts.",
      items: [
        { name: "Concrete Takeoff Estimates", href: "/sub-contractors-estimates/concrete-estimating-services" },
        { name: "Masonry Takeoff Estimates", href: "/sub-contractors-estimates/masonry-estimates" },
        { name: "Metal Takeoff Estimates", href: "/sub-contractors-estimates/metals-takeoffs" },
        { name: "Lumber Takeoff Estimates", href: "/supplier-estimates/lumber-takeoffs" },
        { name: "Drywall Takeoff Estimates", href: "/sub-contractors-estimates/dry-wall-takeoffs" },
        { name: "Flooring Takeoff Estimates", href: "/sub-contractors-estimates/flooring-estimates" },
        { name: "Interior & Exterior Takeoff Estimates", href: "/sub-contractors-estimates/exterior-finishes-estimates" },
        { name: "Plumbing Takeoff Estimates", href: "/sub-contractors-estimates/plumbing-estimates" },
        { name: "HVAC Takeoff Estimates", href: "/sub-contractors-estimates/hvac-estimates" },
        { name: "Electrical Takeoff Estimates", href: "/sub-contractors-estimates/electrical-work-estimating-takeoffs" }
      ],
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      image: "/images/sub_contractors.png"
    },
    {
      title: "General Contractor Estimating",
      description: "Comprehensive estimating services tailored for general contractors managing large-scale public, commercial, and residential projects.",
      items: [
        { name: "Public Projects Estimates", href: "/general-contractor-services/public-projects-estimates" },
        { name: "Commercial Estimating", href: "/general-contractor-services/commercial-estimating" },
        { name: "Residential Estimating", href: "/general-contractor-services/residential-estimating" },
        { name: "Multi-Family Apartments", href: "/general-contractor-services/multi-family-apartments" },
        { name: "Industrial Estimating", href: "/general-contractor-services/industrial-estimating" }
      ],
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      image: "/images/general_contractors.png"
    },
    {
      title: "Supplier Estimating",
      description: "Precise material breakdowns allowing suppliers to provide rapid quotes to their contractor clients.",
      items: [
        { name: "Rebar Takeoffs", href: "/supplier-estimates/rebar-takeoffs" },
        { name: "Lumber Takeoffs", href: "/supplier-estimates/lumber-takeoffs" },
        { name: "Steel Takeoffs", href: "/supplier-estimates/steel-takeoffs" },
        { name: "Flooring & Tiles Takeoffs", href: "/supplier-estimates/flooring-tiles-takeoffs" }
      ],
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
      image: "/images/hero_estimators.png"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-brand-navy py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero_bg.png" 
            alt="Services Background" 
            fill 
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-brand-navy/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-brand-orange/20 text-brand-orange font-bold tracking-wider rounded-full text-sm mb-6 animate-fade-in-up">
            WHAT WE OFFER
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Comprehensive Estimating <br/> <span className="text-brand-orange">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            From initial blueprints to final bid preparation, our expert estimators provide the precision you need to win projects and maximize profitability.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <Link href="/contact" className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-transform hover:-translate-y-1 shadow-lg flex items-center">
              Request a Free Quote
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <a href="tel:1-727-284-6082" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-md font-bold text-lg transition-colors backdrop-blur-sm">
              Call (727) 284-6082
            </a>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">Explore Our Expertise</h2>
            <div className="w-24 h-1.5 bg-brand-orange mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {serviceCategories.map((category, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 group hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row">
                
                {/* Image Section */}
                <div className="sm:w-2/5 relative h-64 sm:h-auto overflow-hidden bg-brand-navy">
                  <div className="absolute inset-0 bg-brand-navy/60 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <Image 
                    src={category.image} 
                    alt={category.title} 
                    fill 
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute bottom-4 left-4 z-20 bg-brand-orange p-3 rounded-xl shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={category.icon} />
                    </svg>
                  </div>
                </div>

                {/* Content Section */}
                <div className="sm:w-3/5 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                      {category.description}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {category.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start text-sm text-gray-700 font-medium group/item hover:bg-gray-50 rounded p-1 transition-colors">
                          <svg className="w-5 h-5 text-brand-orange mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <Link href={item.href} className="hover:text-brand-orange hover:underline transition-colors block w-full">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/contact" className="inline-flex items-center text-brand-navy font-bold hover:text-brand-orange transition-colors mt-auto text-sm uppercase tracking-wide group/link">
                    Request Pricing
                    <span className="bg-orange-100 p-1.5 rounded-full ml-2 group-hover/link:bg-brand-orange group-hover/link:text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brand-navy py-20 relative overflow-hidden">
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-brand-orange rounded-full opacity-10 blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Send us your plans today and get a highly accurate estimate within 24-48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <UploadPlansButton className="bg-brand-orange hover:bg-[#d65f29] text-white font-bold py-4 px-10 rounded text-lg transition-transform hover:-translate-y-1 shadow-[0_0_20px_rgba(242,101,34,0.4)] cursor-pointer">
              Upload Plans Now
            </UploadPlansButton>
          </div>
        </div>
      </div>
    </>
  );
}
