import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import UploadPlansButton from '@/components/UploadPlansButton';

export const metadata: Metadata = {
  title: 'Executive Takeoff Summary Services | Constructech Estimation',
  description: 'Get professional, highly accurate construction takeoff summaries. We deliver detailed material quantifications and cost breakdowns categorized by phases to help you win more bids.',
};

export default function ExecutiveTakeoffSummary() {
  return (
    <div className="w-full flex flex-col font-sans bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-brand-navy py-20 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/why_choose_2.png"
            alt="Executive Takeoff Background"
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
            <span className="text-white">Executive Takeoff Summary</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Executive Takeoff Summary
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Boiling construction estimating down to a science. Receive detailed, highly formatted summary sheets categorized by construction phases to optimize your bidding process.
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
                src="/images/takeoff_summary.png"
                alt="Executive Takeoff Summary Sheet"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Descriptive Content */}
            <div>
              <h2 className="text-3xl font-extrabold text-brand-navy mb-6">
                What is an Executive Takeoff Summary?
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                An Executive Takeoff Summary is a highly organized, master spreadsheet that serves as the baseline for your entire project estimate. Instead of sorting through disorganized blueprints and raw measurements, our summary provides a consolidated, phase-by-phase view of all material quantities and costs.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We categorize every item meticulously according to standard CSI divisions (or your custom project breakdown) to ensure no scope is missed, allowing general contractors and subcontractors to bid with absolute confidence.
              </p>
              
              <h3 className="text-xl font-bold text-brand-navy mb-4">What's Included in Our Takeoff Summary:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                {[
                  'Detailed Phase Descriptions',
                  'Itemized Material Scope',
                  'Precise Quantity Takeoffs',
                  'Accurate Standard Units (CY, Tons, SF, LF)',
                  'Labor and Material Price Estimations',
                  'Clear Profit Margin Calculations'
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
              Benefits of Our Executive Takeoff
            </h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Absolute Accuracy',
                desc: 'By utilizing advanced tools like Planswift and OST, we eliminate manual human error, delivering takeoff quantities accurate to the decimal.'
              },
              {
                title: 'Time & Cost Efficiency',
                desc: 'Stop spending days measuring blueprints. Our turnaround time of 24-48 hours lets you focus on managing construction and winning clients.'
              },
              {
                title: 'Ready for Proposals',
                desc: 'Our summary sheets are perfectly formatted and ready to copy directly into your bid packages, client presentations, or procurement spreadsheets.'
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
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to Win Your Next Bid?</h2>
          <p className="text-lg text-white/95 mb-8">Send us your project blueprints today and get a custom takeoff quote in 24 hours.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <UploadPlansButton className="bg-white text-brand-orange font-bold py-3.5 px-8 rounded-lg hover:bg-gray-100 transition-colors shadow-lg cursor-pointer">
              Upload Your Plans
            </UploadPlansButton>
            <a href="tel:1-727-284-6082" className="bg-brand-navy text-white font-bold py-3.5 px-8 rounded-lg hover:bg-gray-900 transition-colors shadow-lg border border-brand-navy">
              Call (727) 284-6082
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
