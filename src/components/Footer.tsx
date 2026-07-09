import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-navy pt-16 pb-8 border-t-4 border-brand-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & Contact */}
          <div>
            <Link href="/" className="inline-block mb-6 bg-white p-2 rounded-lg">
              <img src="/logo-transparent.png" alt="Constructech Estimation" className="h-16 md:h-20 w-auto object-contain" />
            </Link>
            <p className="text-gray-300 text-[15px] mb-6 leading-relaxed">
              Constructech Estimation is a reliable and accurate construction estimating firm in the US, providing takeoff services to builders, contractors, and owners.
            </p>
            <div className="space-y-3">
              <p className="text-gray-300 flex items-center">
                <svg className="w-5 h-5 text-brand-orange mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (718) 719-2009
              </p>
              <p className="text-gray-300 flex items-center">
                <svg className="w-5 h-5 text-brand-orange mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@constructechestimation.com
              </p>
              <p className="text-gray-300 flex items-start">
                <svg className="w-5 h-5 text-brand-orange mr-3 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>7901 4TH ST N STE 300<br/>ST. PETERSBURG, FL. US 33702</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1 after:bg-brand-orange">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-brand-orange transition flex items-center before:content-['›'] before:text-brand-orange before:mr-2 before:text-xl">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-brand-orange transition flex items-center before:content-['›'] before:text-brand-orange before:mr-2 before:text-xl">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-brand-orange transition flex items-center before:content-['›'] before:text-brand-orange before:mr-2 before:text-xl">Our Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-brand-orange transition flex items-center before:content-['›'] before:text-brand-orange before:mr-2 before:text-xl">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1 after:bg-brand-orange">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li><Link href="/services#cost-estimation" className="text-gray-300 hover:text-brand-orange transition flex items-center before:content-['›'] before:text-brand-orange before:mr-2 before:text-xl">Construction Cost Estimation</Link></li>
              <li><Link href="/services#material-takeoffs" className="text-gray-300 hover:text-brand-orange transition flex items-center before:content-['›'] before:text-brand-orange before:mr-2 before:text-xl">Material Takeoffs</Link></li>
              <li><Link href="/services#bid-preparation" className="text-gray-300 hover:text-brand-orange transition flex items-center before:content-['›'] before:text-brand-orange before:mr-2 before:text-xl">Bid Preparation & Support</Link></li>
              <li><Link href="/services#quantity-takeoffs" className="text-gray-300 hover:text-brand-orange transition flex items-center before:content-['›'] before:text-brand-orange before:mr-2 before:text-xl">Quantity Takeoffs</Link></li>
            </ul>
          </div>

          {/* Map/Contact */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-1 after:bg-brand-orange">
              Service Area
            </h3>
            <p className="text-gray-300 mb-4">
              Providing expert estimating services across the USA and Canada.
            </p>
            <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35451614.93589932!2d-100!3d50!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d191d8e12d%3A0x28974a974dfab9c1!2sNorth%20America!5e0!3m2!1sen!2sus!4v1718641234567!5m2!1sen!2sus" 
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen={false} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Constructech Estimation. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-brand-orange">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-orange">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
