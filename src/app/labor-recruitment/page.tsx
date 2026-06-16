import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Labor Recruitment | Constructech Estimation',
  description: 'Expert labor recruitment services for the construction industry.',
};

export default function LaborRecruitmentPage() {
  return (
    <>
      <div className="bg-brand-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Labor Recruitment</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Connecting you with top-tier construction talent.
          </p>
        </div>
      </div>

      <div className="py-20 bg-white min-h-[50vh] flex items-center justify-center">
        <div className="text-center max-w-3xl mx-auto px-4">
          <svg className="w-24 h-24 text-brand-orange mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Finding the right talent for your projects</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Our specialized labor recruitment division focuses exclusively on the construction industry. Whether you need skilled tradesmen, project managers, or seasoned estimators, we have the network to fulfill your staffing needs quickly and efficiently.
          </p>
          <Link href="/contact" className="inline-block bg-brand-orange text-white font-bold py-4 px-8 rounded hover:bg-orange-600 transition-colors">
            Contact Us for Recruitment
          </Link>
        </div>
      </div>
    </>
  );
}
