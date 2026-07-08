import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Constructech Estimation',
  description: 'Learn about Constructech Estimation, our mission, and our team of expert construction estimators serving the US.',
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-brand-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">About Constructech Estimation</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your trusted partner for accurate, fast, and reliable construction estimating services across the United States and Canada.
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-2">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6">Built on Accuracy and Trust</h3>
              <p className="text-lg text-gray-600 mb-6">
                Constructech Estimation was founded with a single mission: to empower contractors, developers, and builders with the precise data they need to win bids and manage budgets effectively.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                With decades of combined industry experience, our team of seasoned estimators understands the nuances of modern construction. We leverage the latest takeoff software and local pricing databases to deliver estimates you can rely on.
              </p>
              
              <div className="grid grid-cols-2 gap-6 border-t border-gray-100 pt-8">
                <div>
                  <h4 className="text-4xl font-extrabold text-brand-orange mb-2">15+</h4>
                  <p className="text-gray-600 font-medium">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-extrabold text-brand-orange mb-2">50+</h4>
                  <p className="text-gray-600 font-medium">States Served</p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/5] bg-gray-100 rounded-2xl relative shadow-xl overflow-hidden border-8 border-white">
                 <div className="absolute inset-0 bg-brand-navy/5 flex items-center justify-center">
                    <span className="text-gray-400 font-medium">Team/Office Photo Placeholder</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-brand-orange py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-6">Join Thousands of Successful Contractors</h2>
          <p className="text-white/90 text-lg mb-8">
            Stop guessing and start winning. Let our team handle the numbers while you focus on building.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-brand-navy hover:bg-gray-900 text-white font-bold rounded-md shadow-xl transition transform hover:-translate-y-1">
            Get Your First Estimate
          </Link>
        </div>
      </div>
    </>
  );
}
