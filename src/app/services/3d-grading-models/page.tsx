import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import UploadPlansButton from '@/components/UploadPlansButton';

export const metadata: Metadata = {
  title: '3D Earthwork Cut & Fill Grading Models | Constructech Estimation',
  description: 'Optimize site work, excavating, and earthwork volumes with our 3D cut/fill grading models. Get precise soil volume calculations and elevation heatmaps.',
};

export default function ThreeDGradingModels() {
  return (
    <div className="w-full flex flex-col font-sans bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-brand-navy py-20 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/why_choose_2.png"
            alt="3D Grading Background"
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
            <span className="text-white">3D Grading Models</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            3D Cut/Fill Grading Models
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Revolutionizing earthwork estimation. We build detailed 3D surface models to compute precise cut and fill volumes, stockpile areas, and site elevation differences.
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
                src="/images/grading_models.png"
                alt="3D Cut/Fill Grading Models"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Descriptive Content */}
            <div>
              <h2 className="text-3xl font-extrabold text-brand-navy mb-6">
                What is a 3D Cut/Fill Grading Model?
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Earthwork and site excavation are some of the highest-risk components of construction cost estimation. Even minor calculation errors in soil volume can result in massive budget overruns. Our 3D Cut/Fill Grading Models leverage advanced software (such as Carlson, Insite, and Trimble) to digitize site contours and generate exact soil movement profiles.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We construct digital terrain elevations comparing existing ground conditions against proposed building pads, retention ponds, and finish grades. The result is an elevation heat map detailing where dirt needs to be removed (cut) and where it needs to be added (fill).
              </p>
              
              <h3 className="text-xl font-bold text-brand-navy mb-4">What Our 3D Grading Services Cover:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                {[
                  'Existing vs. Proposed Elevation Comparison',
                  'Precise Cut and Fill Volume Calculations',
                  'Stockpile and Borrow Pit Analysis',
                  'Building Pad and Trenching Takeoffs',
                  'Retention Pond and Drainage Profiling',
                  'Topsoil Stripping & Subgrade Adjustments'
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
              Benefits of 3D Earthwork Modeling
            </h2>
            <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Accurate Soil Balances',
                desc: 'Calculate precise quantities of soil, gravel, and sand. Minimize the cost of hauling dirt onto or off of the construction site.'
              },
              {
                title: 'Trimble/Carlson Machine Control',
                desc: 'We can export our 3D surface files (.DXF, .TTM, .XML) directly into your GPS-guided bulldozers and excavators for seamless field grading.'
              },
              {
                title: 'Visual Risk Mitigation',
                desc: 'Identify subgrade challenges, rocky formations, or high water table risks visually before your heavy equipment even arrives on site.'
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
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Need Accurate Earthwork Volumes?</h2>
          <p className="text-lg text-white/95 mb-8">Send us your grading plans and survey files (CAD/PDF) today to get a precise 3D grading model estimate.</p>
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
