'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

export default function CompetitorPageLayout({ data }: { data: any }) {
  if (!data) return <div className="min-h-screen flex items-center justify-center font-bold text-2xl text-brand-navy">Page not found</div>;

  // Track accordion open state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Parse FAQs and normal content sections
  const faqs: FAQItem[] = [];
  const normalSections: any[] = [];

  const sections = data.sections || [];
  let isFaqBlock = false;

  for (let i = 0; i < sections.length; i++) {
    const sec = sections[i];
    const text = (sec.text || "").replace(/\u2756/g, "").replace(/❖/g, "").strip ? (sec.text || "").replace(/\u2756/g, "").replace(/❖/g, "").trim() : (sec.text || "");
    const secType = sec.type;

    // Detect explicit FAQ section heading
    if (text.toLowerCase().includes("frequently asked") || text.toLowerCase() === "faqs" || text.toLowerCase() === "faq") {
      isFaqBlock = true;
      continue;
    }

    // Check if this item is a Question (heading ending with '?')
    const isQuestionHeading = (secType === 'h2' || secType === 'h3' || secType === 'h4') && text.trim().endsWith('?');

    if (isQuestionHeading || isFaqBlock) {
      // If it's a question heading, look for the next paragraph as answer
      if (isQuestionHeading) {
        let answerText = "Contact our estimating team at (727) 284-6082 for detailed information on this topic.";
        if (i + 1 < sections.length && sections[i + 1].type === 'p') {
          answerText = sections[i + 1].text.replace(/\u2756/g, "").replace(/❖/g, "").trim();
          i++; // Skip the next paragraph since it's consumed as answer
        }
        faqs.push({ question: text, answer: answerText });
      } else if (secType === 'p' && text.includes('?')) {
        // Paragraph question
        faqs.push({ question: text, answer: "Our professional estimators provide comprehensive support for all technical project queries." });
      } else if (secType !== 'h1') {
        normalSections.push(sec);
      }
    } else {
      normalSections.push(sec);
    }
  }

  // Fallback default FAQs if none extracted from content
  const displayFaqs: FAQItem[] = faqs.length > 0 ? faqs : [
    {
      question: "What is the turnaround time for a construction takeoff or cost estimate?",
      answer: "Our standard turnaround time is 24 to 48 hours for most residential and commercial projects, depending on scope and drawing complexity."
    },
    {
      question: "What file formats do you accept for plan submissions?",
      answer: "We accept PDF, DWG (AutoCAD), TIFF, PNG, and ZIP archives containing blueprints and specifications."
    },
    {
      question: "How accurate are Constructech Estimation cost estimates?",
      answer: "Our estimators utilize localized zip-code-based material databases and RSMeans cost data to ensure our estimates are within 95-98% accuracy of actual field costs."
    },
    {
      question: "How do I get started with an estimate?",
      answer: "Simply click 'Upload Plans' or contact us at (727) 284-6082 to submit your drawings. We will review your project and send a fee proposal immediately."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-brand-navy py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/images/hero_bg.png')] bg-cover bg-center"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-orange rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight uppercase">
            {data.title || "Constructech Estimation"}
          </h1>
          <div className="w-24 h-1.5 bg-brand-orange mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-medium">
            Accurate, reliable, and timely estimates to help you win more bids and build with confidence.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
          
          {/* Main Content Column */}
          <div className="w-full lg:w-[70%]">
            <div className="prose prose-lg max-w-none prose-headings:text-brand-navy prose-p:text-gray-600 prose-li:text-gray-600 marker:text-brand-orange">
              {normalSections.map((section: any, idx: number) => {
                const text = (section.text || "").replace(/\u2756/g, "").replace(/❖/g, "").trim();

                if (section.type === 'h1') return <h1 key={idx} className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6 mt-10">{text}</h1>;
                if (section.type === 'h2') return (
                  <h2 key={idx} className="text-2xl md:text-3xl font-bold text-brand-navy mb-5 mt-10 flex items-center gap-3">
                    <span className="w-6 h-1 bg-brand-orange hidden sm:inline-block rounded"></span>
                    {text}
                  </h2>
                );
                if (section.type === 'h3') return <h3 key={idx} className="text-xl md:text-2xl font-semibold text-brand-navy mb-4 mt-8">{text}</h3>;
                if (section.type === 'p') {
                  if (text.includes("© Construct'EM") || text.includes("Social Links")) return null;
                  return <p key={idx} className="mb-6 leading-relaxed text-[16px] md:text-[17px] text-gray-700">{text}</p>;
                }
                if (section.type === 'list') {
                  const isNavList = section.items.some((item: string) => 
                    item.includes("info@Constructech") || item.includes("Head Office") || item.includes("Reviews")
                  );
                  if (isNavList) return null;

                  return (
                    <ul key={idx} className="mb-8 space-y-3 bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                      {section.items.map((item: string, i: number) => {
                        const cleanItem = item.replace(/\u2756/g, "").replace(/❖/g, "").trim();
                        return (
                          <li key={i} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-800 font-medium text-base leading-snug">{cleanItem}</span>
                          </li>
                        );
                      })}
                    </ul>
                  );
                }
                return null;
              })}
            </div>

            {/* Accordion FAQ Dropdown Section */}
            <div className="mt-16 bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-brand-orange p-2.5 rounded-lg text-white">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-brand-navy">Frequently Asked Questions</h3>
                  <p className="text-sm text-gray-500">Find quick answers regarding our estimating process and deliverables.</p>
                </div>
              </div>

              <div className="space-y-4">
                {displayFaqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div 
                      key={index} 
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left p-5 font-bold text-brand-navy hover:text-brand-orange flex justify-between items-center gap-4 transition-colors"
                      >
                        <span className="text-base md:text-lg">{faq.question}</span>
                        <span className={`p-1.5 rounded-full bg-gray-100 text-brand-navy transform transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-brand-orange text-white' : ''}`}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 bg-gray-50/50">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom CTA Banner */}
            <div className="mt-16 group relative bg-white border border-gray-100 rounded-2xl p-10 text-center overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-yellow-400"></div>
               <div className="absolute inset-0 bg-[url('/images/cta_image.png')] opacity-5 group-hover:opacity-10 bg-cover bg-center mix-blend-multiply transition-opacity duration-500"></div>
               
               <div className="relative z-10">
                 <h3 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 transition-transform duration-300 group-hover:scale-105">
                   Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-500">Win More Bids?</span>
                 </h3>
                 <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                   Get highly accurate <span className="text-brand-navy font-bold">construction takeoffs & estimates</span>! Contact us today for a free quote.
                 </p>
                 <div className="flex flex-col sm:flex-row justify-center gap-6">
                   <a href="tel:727-284-6082" className="bg-brand-orange text-white font-bold py-4 px-8 rounded flex items-center justify-center gap-2 hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_20px_rgba(249,115,22,0.3)] text-lg">
                     <svg className="w-6 h-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                     </svg>
                     (727) 284-6082
                   </a>
                   <Link href="/contact" className="group/btn bg-brand-navy text-white font-bold py-4 px-8 rounded hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_20px_rgba(11,28,46,0.3)] text-lg flex items-center justify-center gap-2">
                     Request a Quote
                     <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                     </svg>
                   </Link>
                 </div>
               </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[30%]">
            <div className="sticky top-32 space-y-8">
              
              {/* Sidebar Menu */}
              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-extrabold text-brand-navy mb-6 pb-4 border-b-2 border-brand-orange uppercase">Our Services</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/services/cost-estimating" className="group flex items-center justify-between text-gray-700 font-bold hover:text-brand-orange transition-colors">
                      Cost Estimating
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-brand-orange transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li className="border-t border-gray-200 pt-4">
                    <Link href="/services/material-takeoff" className="group flex items-center justify-between text-gray-700 font-bold hover:text-brand-orange transition-colors">
                      Material Takeoff
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-brand-orange transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li className="border-t border-gray-200 pt-4">
                    <Link href="/services/value-engineering" className="group flex items-center justify-between text-gray-700 font-bold hover:text-brand-orange transition-colors">
                      Value Engineering
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-brand-orange transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                  <li className="border-t border-gray-200 pt-4">
                    <Link href="/services/cpm-scheduling" className="group flex items-center justify-between text-gray-700 font-bold hover:text-brand-orange transition-colors">
                      CPM Scheduling
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-brand-orange transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Sidebar Quick Contact Banner */}
              <div className="bg-brand-orange text-white p-8 rounded-2xl text-center shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                <div className="relative z-10">
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 className="font-extrabold text-2xl mb-2">Need a Quick Quote?</h4>
                  <p className="text-white/90 mb-6 text-sm">Send your plans today and get an estimate in 24-48 hours.</p>
                  <Link href="/contact" className="inline-block bg-white text-brand-orange font-bold py-3 px-6 rounded shadow hover:bg-gray-50 transition w-full">
                    Upload Plans Now
                  </Link>
                </div>
              </div>

              {/* Sidebar Help Banner */}
              <div className="bg-brand-navy p-8 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-4">
                 <div className="bg-brand-orange p-3 rounded-full shrink-0">
                   <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                   </svg>
                 </div>
                 <div>
                   <h4 className="font-bold text-white text-lg">24/7 Support</h4>
                   <a href="mailto:info@constructechestimation.com" className="text-brand-orange font-medium text-sm hover:underline">info@constructechestimation.com</a>
                 </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
