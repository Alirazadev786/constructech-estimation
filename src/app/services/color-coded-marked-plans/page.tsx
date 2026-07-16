import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Color-Coded Marked Blueprints & Estimating Plans | Constructech Estimation',
  description: 'Improve project coordination and transparency with our color-coded marked blueprint plans. Easily track wall types, flooring materials, and takeoff quantities.',
};

export default function ColorCodedMarkedPlans() {
  return (
    <div className="w-full flex flex-col font-sans bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-brand-navy py-20 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/why_choose_2.png"
            alt="Color Coded Plans Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="flex items-center space-x-2 text-sm text-brand-orange font-bold uppercase tracking-wider mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:underline">Services</Link>
            <span>/</span>
            <span className="text-white">Color Coded Marked Plans</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Color Coded Marked Plans
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Visual clarity for complex builds. We provide color-coded blueprint drawings that make it easy to verify, double-check, and present your bids to clients.
          </p>
        </div>
      </section>

      {/* DETAIL SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual Asset Card */}
            <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="/images/color_coded_marked_plans.png"
                alt="Color Coded Marked Blueprint Plans"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Descriptive Content */}
            <div>
              <h2 className="text-3xl font-extrabold text-brand-navy mb-6">
                Why Use Color-Coded Marked Plans?
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Reading raw blueprint drawings with hundreds of overlapping lines can quickly lead to misinterpretation and costly estimating errors. Our color-coded marked plans visually segregate different materials, sections, and dimensions using a clean, easy-to-read legend.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Whether you need to identify carpet vs. vinyl flooring, partition walls vs. structural walls, or MEP fixture counts, our highlighted layouts match every line-item in your takeoff summary sheet. This serves as an invaluable tool for field crews during installation and is highly persuasive in client presentations.
              </p>
              
              <h3 className="text-xl font-bold text-brand-navy mb-4">What Our Marked Plans Highlight:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                {[
                  'Distinct Material Boundaries (e.g. Flooring Types)',
                  'Linear Wall Segments & Heights',
                  'Window and Door Schedules',
                  'Room-by-Room Area Separations',
                  'Concrete Slab and Footing Layouts',
                  'MEP Fixture Count Highlights'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-brand-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-semibold text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE THIS SERVICE (BENEFITS) */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">
              Benefits of Color-Coded Layouts
            </h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Eliminate Bid Ambiguity',
                desc: 'Give your clients and partners visual proof of what is estimated. A transparent, color-coded plan makes it simple to explain your material quantities.'
              },
              {
                title: 'Faster Field Auditing',
                desc: 'Your project managers and superintendents can use our color-coded layouts on-site to verify that the delivered materials match the estimate.'
              },
              {
                title: 'Streamlined Coordination',
                desc: 'Avoid conflicts between trades. Having visual area codes helps dry-wallers, plumbers, and electricians work in unison without overlapping scopes.'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md border-t-4 border-brand-orange">
                <h3 className="text-xl font-bold text-brand-navy mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-brand-orange py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Need Visual Blueprint Verification?</h2>
          <p className="text-lg text-white/95 mb-8">Upload your blueprints today, and let us prepare a beautifully color-coded marked plan for your next proposal.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-brand-orange font-bold py-3.5 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
              Upload Your Plans
            </Link>
            <a href="tel:1-727-284-6082" className="bg-brand-navy text-white font-bold py-3.5 px-8 rounded-lg hover:bg-gray-900 transition-colors shadow-lg border border-brand-navy">
              Call (727) 284-6082
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
