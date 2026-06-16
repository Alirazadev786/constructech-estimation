import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Constructech Estimation',
  description: 'Terms of Service for Constructech Estimation.',
};

export default function TermsPage() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-brand-navy mb-8">Terms of Service</h1>
        <p className="text-lg text-gray-600 mb-4">
          This is a placeholder for the Terms of Service. Please provide your legal terms content here.
        </p>
      </div>
    </div>
  );
}
