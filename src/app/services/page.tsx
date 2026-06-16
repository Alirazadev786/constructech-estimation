import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Constructech Estimation',
  description: 'Explore our comprehensive construction estimating services including cost estimation, material takeoffs, and bid preparation.',
};

export default function ServicesPage() {
  const services = [
    {
      id: 'cost-estimation',
      title: 'Construction Cost Estimation',
      description: 'We provide highly accurate cost estimates for all construction phases. Our team breaks down labor, material, equipment, and overhead costs, ensuring your budget is realistic and your bids are competitive.',
      icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
    },
    {
      id: 'material-takeoffs',
      title: 'Material Takeoffs',
      description: 'Never over-order or run short on materials again. We use industry-leading software to extract precise quantities of concrete, lumber, drywall, framing, and more directly from your blueprints.',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
    },
    {
      id: 'bid-preparation',
      title: 'Bid Preparation & Support',
      description: 'Winning a bid requires more than just numbers. We help you format, prepare, and review your final bid proposals so you can present a professional, compelling offer to your clients.',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      id: 'quantity-takeoffs',
      title: 'Quantity Takeoffs',
      description: 'Detailed breakdowns of all project quantities. Perfect for general contractors and subcontractors looking to verify their own estimates or streamline their procurement process.',
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
    }
  ];

  return (
    <>
      <div className="bg-brand-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Estimating Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions to help you estimate accurately, bid confidently, and build profitably.
          </p>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2">
                  <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
                    <div className="w-16 h-16 bg-orange-100 text-brand-orange rounded-xl flex items-center justify-center mb-6">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-brand-navy mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                    <Link href="/contact" className="inline-flex items-center text-brand-orange font-bold hover:text-orange-700 transition-colors">
                      Request this service
                      <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  {/* Placeholder for service image */}
                  <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center shadow-inner relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/10 to-brand-orange/10"></div>
                     <span className="text-gray-400 font-medium">Illustration for {service.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
