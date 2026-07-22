import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import UploadPlansButton from '@/components/UploadPlansButton';

export const metadata: Metadata = {
  title: 'Our Services | Constructech Estimation',
  description: 'Explore our core construction services: Cost Estimation, Material Takeoff, Value Engineering, and CPM Scheduling.',
};

export default function ServicesPage() {
  const services = [
    {
      title: "Cost Estimation",
      subtitle: "Predicting project costs with extreme accuracy.",
      description: "Our comprehensive cost estimation services combine localized material prices, labor rates, and equipment costs to build reliable budgets for bids, tenders, and feasibility studies.",
      href: "/services/cost-estimating",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      image: "/images/hero_estimators.png",
      features: [
        "Conceptual & Detailed Line-Item Budgets",
        "Localized Material & Labor Price Benchmarks",
        "Direct & Indirect Cost Breakdown",
        "Bid Preparation & Tender Support"
      ]
    },
    {
      title: "Material Takeoff",
      subtitle: "Measuring materials and precise quantities.",
      description: "Fast, itemized quantity takeoffs using 3D models and digital plan software to ensure you never overbuy or underbid on materials.",
      href: "/services/material-takeoff",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      image: "/images/general_contractors.png",
      features: [
        "Color-Coded Marked Blueprint Plans",
        "Complete Bill of Materials (BOM)",
        "Formatted Excel Spreadsheet Export",
        "Fast 24 to 48 Hour Turnaround"
      ]
    },
    {
      title: "Value Engineering",
      subtitle: "Optimizing budgets without sacrificing quality.",
      description: "Strategic cost analysis identifying substitute materials, efficient construction methods, and design optimizations to maximize your ROI.",
      href: "/services/value-engineering",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      image: "/images/sub_contractors.png",
      features: [
        "Lifecycle Cost & Material Alternatives",
        "Design Optimization & Risk Reduction",
        "Scope & Budget Alignment Analysis",
        "Cost Savings Proposals for Clients"
      ]
    },
    {
      title: "CPM Scheduling",
      subtitle: "Project timeline & critical path management.",
      description: "Professional Critical Path Method (CPM) construction scheduling using Primavera P6 and MS Project to keep your jobs on timeline and on budget.",
      href: "/services/cpm-scheduling",
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      image: "/images/hero_bg.png",
      features: [
        "Primavera P6 & MS Project Baseline Schedules",
        "Critical Path Analysis & Milestone Tracking",
        "Resource Loading & Manpower Curves",
        "Delay Claims & Progress Updates"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-brand-navy py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/images/hero_bg.png" 
            alt="Services Background" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-brand-navy/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-brand-orange/20 text-brand-orange font-bold tracking-wider rounded-full text-sm mb-6">
            OUR CORE SERVICES
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Construction Estimating <br/> & <span className="text-brand-orange">Management Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Precision cost estimating, material takeoffs, value engineering, and CPM scheduling tailored for contractors, developers, and engineers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <UploadPlansButton className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg shadow-lg flex items-center">
              Upload Plans for Quote
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </UploadPlansButton>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">Select a Service to Learn More</h2>
            <div className="w-24 h-1.5 bg-brand-orange mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group">
                
                <div>
                  {/* Top Image Banner */}
                  <div className="relative h-48 bg-brand-navy overflow-hidden">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />
                    <div className="absolute bottom-4 left-6 flex items-center gap-3">
                      <div className="bg-brand-orange p-3 rounded-xl shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                        <p className="text-brand-orange text-xs font-semibold">{service.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-8">
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <h4 className="text-xs font-extrabold text-brand-orange uppercase tracking-wider mb-3">Key Features & Deliverables</h4>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-start text-sm text-gray-700 font-medium">
                          <svg className="w-4 h-4 text-brand-orange mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-8 pb-8 pt-0 flex items-center justify-between">
                  <Link 
                    href={service.href} 
                    className="inline-flex items-center text-brand-navy font-extrabold hover:text-brand-orange transition-colors text-sm uppercase tracking-wide group/link"
                  >
                    View Details & Coverage
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
      <div className="bg-brand-navy py-20 relative overflow-hidden text-center text-white">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready for an Accurate Estimate?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Upload your project plans today for a fast quote within 24-48 hours.
          </p>
          <UploadPlansButton className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 px-10 rounded text-lg shadow-lg">
            Upload Plans Now
          </UploadPlansButton>
        </div>
      </div>
    </>
  );
}
