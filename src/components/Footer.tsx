import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex flex-col mb-4">
              <span className="text-2xl font-bold text-white leading-none tracking-tight">CONSTRUCTECH</span>
              <span className="text-sm font-medium text-brand-orange tracking-widest leading-tight">ESTIMATION</span>
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Providing professional Construction Estimating Services in the United States, delivering accurate cost estimating, material takeoffs, and bid preparation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-orange">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-orange">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/services#cost-estimation" className="hover:text-white transition">Cost Estimation</Link></li>
              <li><Link href="/services#material-takeoffs" className="hover:text-white transition">Material Takeoffs</Link></li>
              <li><Link href="/services#bid-preparation" className="hover:text-white transition">Bid Preparation</Link></li>
              <li><Link href="/services#quantity-takeoffs" className="hover:text-white transition">Quantity Takeoffs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-orange">Contact Info</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-brand-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1-718-719-2009<br/>+1-888-859-0222</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 text-brand-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@constructech.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Constructech Estimation. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
