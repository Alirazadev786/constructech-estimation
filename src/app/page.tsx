'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="w-full flex flex-col overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[600px] flex items-center pt-16 pb-32">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/images/Construction-Takeoff-and-Cost-Estimation-12-1024x512.webp')" }}
        ></div>
        <div className="absolute inset-0 bg-brand-navy/85 z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-left text-white max-w-2xl"
            >
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Construction Estimating &amp;<br />
                <span className="text-brand-orange drop-shadow-md">Design Engineering Services</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg md:text-xl mb-8 leading-relaxed font-medium">
                Our building estimating company expert in design and construction estimates. Enhance your project management with the support of our professional estimators.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:1-888-859-0222" 
                  className="bg-brand-orange hover:bg-[#d65f29] text-white px-8 py-4 rounded font-bold text-lg text-center transition shadow-lg hover:shadow-brand-orange/50"
                >
                  Call Us
                </a>
                <Link 
                  href="/about" 
                  className="bg-white hover:bg-gray-100 text-brand-navy px-8 py-4 rounded font-bold text-lg text-center transition shadow-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Company Profile
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden md:block relative"
            >
              <img 
                src="/images/professional-construction-estimators.webp" 
                alt="Professional Construction Estimators" 
                className="w-full h-auto object-cover rounded-xl shadow-2xl border-4 border-white/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent rounded-xl"></div>
            </motion.div>
          </div>
        </div>
        
        {/* STATS OVERLAP */}
        <div className="absolute left-0 right-0 -bottom-16 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            >
              {[
                { label: 'Customer Satisfaction', value: '98%' },
                { label: 'Industry Awards', value: '20+' },
                { label: 'Years Experience', value: '15+' },
                { label: 'Projects Completed', value: '5000+' }
              ].map((stat, i) => (
                <motion.div variants={fadeUp} key={i} className="bg-white rounded-lg shadow-xl p-6 text-center border-b-4 border-brand-orange transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base font-semibold text-gray-600 uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. REVIEWS PLACEHOLDER */}
      <section className="pt-32 pb-16 bg-gray-50">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="inline-block px-4 py-1 bg-brand-orange/10 text-brand-orange font-bold rounded-full mb-4 uppercase text-sm tracking-wider">
            Testimonials
          </div>
          <h2 className="text-3xl font-extrabold text-brand-navy mb-10">See What Our Clients Say</h2>
          <div className="w-full max-w-4xl mx-auto h-[120px] bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
            <p className="text-gray-400 font-medium">Trustindex Google Reviews Widget Placeholder</p>
          </div>
        </motion.div>
      </section>

      {/* 3. OUR TRADES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1 bg-brand-orange/10 text-brand-orange font-bold rounded-full mb-4 uppercase text-sm tracking-wider">
              Our Trades
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy">Who Do We Help?</h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-10"
          >
            {/* General Contractors */}
            <motion.div variants={fadeUp} className="group relative overflow-hidden rounded-xl shadow-lg h-[300px]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/Construction-Estimating-Company.webp')" }}></div>
              <div className="absolute inset-0 bg-brand-navy/85 z-10 group-hover:bg-brand-navy/70 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-8 text-center">
                <svg className="w-16 h-16 text-brand-orange mb-4 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-2">General Contractors</h3>
                <p className="text-gray-200 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Accurate and comprehensive estimates to help you win more bids and manage costs effectively.
                </p>
              </div>
            </motion.div>

            {/* Sub Contractors */}
            <motion.div variants={fadeUp} className="group relative overflow-hidden rounded-xl shadow-lg h-[300px]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/Construction-Takeoff-and-Cost-Estimation-12-1024x512.webp')" }}></div>
              <div className="absolute inset-0 bg-brand-navy/85 z-10 group-hover:bg-brand-navy/70 transition-colors duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-8 text-center">
                <svg className="w-16 h-16 text-brand-orange mb-4 group-hover:scale-110 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-2">Sub Contractors</h3>
                <p className="text-gray-200 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  Trade-specific takeoffs allowing you to focus on the work while we handle the numbers.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (Text Left, Image Right) */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="order-2 lg:order-1"
            >
              <motion.div variants={fadeUp} className="inline-block px-4 py-1 bg-brand-orange/10 text-brand-orange font-bold rounded-full mb-4 uppercase text-sm tracking-wider">
                Why Choose Us
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6 leading-tight">
                Get Accurate Construction Estimating Services for Your Project!
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-600 mb-6 text-lg leading-relaxed">
                When you partner with our estimating company, you get access to a team of highly experienced estimators equipped with the latest software and deep industry knowledge. We ensure every cost is accounted for, eliminating guesswork and preventing budget overruns.
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-4 mb-8">
                {[
                  'Extensive experience in all CSI divisions.',
                  'Detailed and accurate material takeoffs.',
                  'Fast turnaround times (24-48 hours).',
                  'Affordable pricing for contractors of all sizes.'
                ].map((item, i) => (
                  <motion.li variants={fadeUp} key={i} className="flex items-start">
                    <svg className="w-6 h-6 text-brand-orange mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-medium text-lg">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp}>
                <Link 
                  href="/about" 
                  className="inline-block bg-brand-navy hover:bg-gray-800 text-white px-8 py-4 rounded font-bold transition shadow-md hover:shadow-xl hover:-translate-y-1 transform"
                >
                  Learn More About Us
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Overlapping Images */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 relative h-[500px] w-full hidden md:block"
            >
              <div className="absolute top-0 right-0 w-3/4 h-[400px] rounded-lg shadow-xl border-4 border-white overflow-hidden">
                <img src="/images/professional-construction-estimating-company-1894x2048.webp" alt="Professional Estimating" className="w-full h-full object-cover" />
              </div>
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-0 left-0 w-3/5 h-[300px] rounded-lg shadow-2xl border-4 border-white overflow-hidden"
              >
                <img src="/images/Construction-Estimating-Services-3-1-1024x470.webp" alt="Construction Services" className="w-full h-full object-cover" />
              </motion.div>
              
              {/* Floating badge */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.6 }}
                className="absolute top-1/2 left-[-10%] transform -translate-y-1/2 bg-white p-6 rounded-lg shadow-2xl flex items-center gap-4 border border-gray-100"
              >
                <div className="w-16 h-16 bg-brand-orange/20 rounded-full flex items-center justify-center animate-pulse">
                  <svg className="w-8 h-8 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-black text-brand-navy">100%</div>
                  <div className="text-gray-500 font-semibold text-sm uppercase">Accuracy</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS / STEP-BY-STEP */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="inline-block px-4 py-1 bg-brand-orange/10 text-brand-orange font-bold rounded-full mb-4 uppercase text-sm tracking-wider">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-16">How Our Construction Estimating Works</h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-8 relative"
          >
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-100 transform -translate-y-1/2 z-0">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-full bg-brand-orange/30"
              ></motion.div>
            </div>
            
            {[
              { num: '01', title: 'Upload Plans', desc: 'Send us your blueprints and specifications.' },
              { num: '02', title: 'Review & Quote', desc: 'We analyze your files and provide a fixed quote.' },
              { num: '03', title: 'Detailed Takeoff', desc: 'Our team performs a precise quantity takeoff.' },
              { num: '04', title: 'Final Delivery', desc: 'Receive your detailed estimate ready for bidding.' }
            ].map((step, i) => (
              <motion.div variants={fadeUp} key={i} className="relative z-10 flex flex-col items-center bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-brand-navy rounded-full text-white flex items-center justify-center text-2xl font-black mb-6 shadow-lg border-4 border-white outline outline-4 outline-gray-50">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h3>
                <p className="text-gray-600 font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. VIDEO MODAL & LIST */}
      <section className="py-20 bg-brand-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Video Thumbnail */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl flex items-center justify-center border-4 border-gray-700 group cursor-pointer"
            >
              <img src="/images/Top-5-Questions-to-Ask-a-Construction-Estimating-Company-768x384.webp" alt="Video Thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <button className="relative z-10 w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center shadow-[0_0_0_10px_rgba(232,106,51,0.3)] group-hover:shadow-[0_0_0_15px_rgba(232,106,51,0.4)] transition-all duration-300 group-hover:scale-110">
                <svg className="w-8 h-8 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </motion.div>
            
            {/* Content List */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-extrabold mb-8 leading-tight">
                Empowering Professionals with Precise Estimates
              </motion.h2>
              <div className="space-y-6">
                {[
                  { title: 'ASPE Certified', desc: 'We strictly follow the American Society of Professional Estimators guidelines.' },
                  { title: 'Zip-Code Pricing', desc: 'Using RSMeans and local vendor pricing for accurate material costs.' },
                  { title: 'Dedicated Support', desc: 'Our estimators are available to discuss your project via phone or email.' },
                  { title: 'Win More Bids', desc: 'Increase your bid-hit ratio with highly competitive and accurate estimates.' }
                ].map((item, i) => (
                  <motion.div variants={fadeUp} key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-brand-orange/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-300 font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. SERVICES GRID */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-1 bg-brand-orange/10 text-brand-orange font-bold rounded-full mb-4 uppercase text-sm tracking-wider">
              Core Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy">Our Construction Services</h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', title: 'Commercial Estimating' },
              { icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', title: 'Residential Estimating' },
              { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Industrial Estimating' },
              { icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', title: 'Material Takeoffs' },
              { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', title: 'CPM Scheduling' },
              { icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z', title: 'Design Build Estimates' }
            ].map((service, i) => (
              <motion.div variants={fadeUp} key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-brand-orange hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-brand-navy/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-orange/10 transition-colors">
                  <svg className="w-8 h-8 text-brand-navy group-hover:text-brand-orange transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 font-medium leading-relaxed">
                  Detailed and highly accurate quantity takeoffs tailored to your specific trade and requirements.
                </p>
                <Link href="/services" className="text-brand-orange font-bold uppercase text-sm flex items-center hover:text-brand-navy transition-colors">
                  Learn More
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#1A2238] rounded-[40px] md:rounded-[60px] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative shadow-2xl"
          >
            {/* Background Texture for CTA */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/images/Why-Laminate-Flooring-Estimates-Save-You-Money-768x384.webp')", backgroundSize: 'cover' }}></div>
            
            <div className="flex flex-col items-center justify-center max-w-[388px] text-center z-10 mx-auto md:mx-0">
              <h2 className="text-white text-3xl md:text-4xl font-extrabold leading-tight mb-4">
                Ready to Win More Bids?
              </h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Send us your plans today and get a highly accurate estimate within 24-48 hours.
              </p>
              <Link href="/contact" className="bg-brand-orange hover:bg-[#d65f29] text-white font-bold py-4 px-10 rounded-full inline-flex items-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,106,51,0.5)] hover:-translate-y-1">
                Upload Plans Now
              </Link>
            </div>
            
            <div className="z-10 w-full max-w-[350px] hidden md:flex rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src="/images/Top-5-Questions-to-Ask-a-Construction-Estimating-Company.webp" alt="Win Bids" className="w-full h-auto object-cover" />
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}
