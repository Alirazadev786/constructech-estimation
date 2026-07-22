'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import UploadPlansButton from '@/components/UploadPlansButton';

export default function WorkSamplesPage() {
  const tradeSamples = [
    {
      id: "sitework",
      title: "Site Work Estimates",
      pdfUrl: "", // Ready for user's PDF URL later
      description: "Detailed quantity takeoffs for excavation, grading, cut & fill volumes, utilities, paving, and site preparation.",
      details: ["Excavation & Earthwork Volume Calculations", "3D Grading & Cut/Fill Analysis", "Utility & Drainage Pipe Run Quantifications", "Paving, Asphalt & Concrete Slab Quantities"]
    },
    {
      id: "concrete",
      title: "Concrete Estimates",
      pdfUrl: "",
      description: "Complete concrete material takeoff including foundations, footings, grade beams, elevated slabs, rebar, and formwork.",
      details: ["Foundations, Footings & Stem Walls", "Formwork Area & Concrete Volume (Cubic Yards)", "Rebar Detailing & Wire Mesh Weight (Tons)", "Concrete Pumping & Finishing Labor Hours"]
    },
    {
      id: "masonry",
      title: "Masonry Estimates",
      pdfUrl: "",
      description: "Itemized takeoff for CMU block counts, brick veneer, mortar, rebar, grout fill, and lintels.",
      details: ["CMU Block Counts (8\", 10\", 12\")", "Face Brick & Stone Veneer Square Footage", "Grout Volume & Horizontal/Vertical Rebar", "Mortar Bags & Lintel Counts"]
    },
    {
      id: "metal",
      title: "Metal Takeoffs",
      pdfUrl: "",
      description: "Comprehensive steel framing, structural steel beams, joists, metal decking, and miscellaneous metals takeoff.",
      details: ["Structural Steel Tonnage & Beams", "Light Gauge Steel Studs & Track Counts", "Metal Decking Square Footage", "Stairs, Railings & Miscellaneous Steel Items"]
    },
    {
      id: "lumber",
      title: "Lumber Takeoffs",
      pdfUrl: "",
      description: "Exact board feet and cut length lists for wood framing, roof trusses, floor joists, and plywood sheathing.",
      details: ["Wall Studs, Plates & Headers Count", "Floor Joists & Roof Truss Framing", "Plywood / OSB Sheathing Sheets", "Hardware, Anchors & Fasteners Count"]
    },
    {
      id: "drywall",
      title: "Drywall Estimates",
      pdfUrl: "",
      description: "Square footage counts for gypsum board, metal studs, insulation, taping, mud, and corner beads.",
      details: ["Gypsum Board Sheet Counts by Type (Type X, Water-Resistant)", "Drywall Joint Compound & Tape Quantities", "Acoustical Ceiling Grid & Tiles Count", "Level 4 & Level 5 Finish Labor Estimates"]
    },
    {
      id: "flooring",
      title: "Flooring Estimates",
      pdfUrl: "",
      description: "Detailed area calculations for tile, hardwood, VCT, carpet tile, epoxy, and underlayment.",
      details: ["Ceramic, Porcelain & Stone Tile Square Footage", "Carpet Tile & Sheet Vinyl Quantities", "Underlayment, Grout & Adhesive Requirements", "Baseboard & Transition Strip Linear Feet"]
    },
    {
      id: "painting",
      title: "Painting Estimates",
      pdfUrl: "",
      description: "Surface area measurements for interior & exterior walls, ceilings, trim, doors, and industrial coatings.",
      details: ["Interior Wall & Ceiling Paint Area (Gallons Required)", "Exterior Stucco & Siding Coating Square Footage", "Door, Frame & Window Trim Linear Feet", "Primer, Sealer & Finish Coat Breakdowns"]
    },
    {
      id: "exterior",
      title: "Exterior Finishes Estimates",
      pdfUrl: "",
      description: "Quantification for EIFS, stucco, siding, ACM panels, roofing membranes, and waterproofing.",
      details: ["EIFS & Stucco Square Footage", "Fiber Cement & Metal Siding Panels", "Roofing Shingles & TPO Membrane Quantities", "Waterproofing & Vapor Barrier Surfacing"]
    },
    {
      id: "plumbing",
      title: "Plumbing Estimates",
      pdfUrl: "",
      description: "Comprehensive takeoff for sanitary drainage, domestic water piping, gas lines, fixtures, and equipment.",
      details: ["Pipe Lengths by Diameter & Material (PVC, Copper, PEX)", "Plumbing Fixture Counts (Toilets, Sinks, Drains)", "Water Heaters, Pumps & Interceptors", "Fittings, Valves & Insulation Lengths"]
    },
    {
      id: "electric",
      title: "Electric Work Estimates",
      pdfUrl: "",
      description: "Itemized count of conduit runs, wire length, light fixtures, switchgear, panelboards, and devices.",
      details: ["Conduit & Wire Run Linear Feet", "Lighting Fixtures & Switch Schedule Counts", "Panelboards, Transformers & Breakers", "Receptacles, Junction Boxes & Outlets"]
    }
  ];

  const [activeTabId, setActiveTabId] = useState(tradeSamples[0].id);

  const activeSample = tradeSamples.find(s => s.id === activeTabId) || tradeSamples[0];

  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      <div className="bg-brand-navy py-20 lg:py-28 relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/hero_bg.png" alt="Work Samples Background" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <span className="inline-block px-4 py-1.5 bg-brand-orange/20 text-brand-orange font-bold text-sm rounded-full mb-6 uppercase tracking-wider">
            PORTFOLIO & SAMPLES
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Work <span className="text-brand-orange">Samples</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-medium">
            Explore sample takeoffs and cost estimation reports across various construction trades.
          </p>
        </div>
      </div>

      {/* Hero CTA Strip */}
      <div className="bg-brand-orange text-white py-12 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Do You Have A Construction Project We Can Help With?</h2>
            <p className="text-white/90 text-sm mt-1">Send us your drawings and get an accurate takeoff proposal within 24 hours.</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <UploadPlansButton className="bg-brand-navy hover:bg-gray-800 text-white font-bold py-3.5 px-8 rounded-lg shadow-lg text-base transition-transform hover:-translate-y-0.5">
              Get a Free Quote
            </UploadPlansButton>
          </div>
        </div>
      </div>

      {/* Main Content Area: Tabs + Viewer */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Sidebar Tabs */}
            <div className="w-full lg:w-1/4 shrink-0">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sticky top-28">
                <h3 className="text-xs font-extrabold text-brand-orange uppercase tracking-wider mb-4 px-3 pt-2">
                  Select Construction Trade
                </h3>
                <nav className="space-y-1">
                  {tradeSamples.map((sample) => {
                    const isActive = sample.id === activeTabId;
                    return (
                      <button
                        key={sample.id}
                        onClick={() => setActiveTabId(sample.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-between ${
                          isActive 
                            ? 'bg-brand-orange text-white shadow-md' 
                            : 'text-gray-700 hover:bg-gray-100 hover:text-brand-orange'
                        }`}
                      >
                        <span>{sample.title}</span>
                        {isActive && (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Right Display Area */}
            <div className="w-full lg:w-3/4">
              <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
                
                {/* Header info */}
                <div className="border-b border-gray-100 pb-6 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy mb-2">
                      {activeSample.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                      {activeSample.description}
                    </p>
                  </div>
                  <UploadPlansButton className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow text-xs uppercase tracking-wider shrink-0">
                    Upload Plans For {activeSample.title}
                  </UploadPlansButton>
                </div>

                {/* Sample Deliverables Checklist */}
                <div className="mb-8 bg-orange-50/50 p-6 rounded-xl border border-orange-100">
                  <h4 className="text-xs font-extrabold text-brand-orange uppercase tracking-wider mb-3">
                    Sample Report Deliverables Included:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeSample.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-800 font-medium">
                        <svg className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PDF Document Embedder / Viewer Placeholder */}
                <div className="border-2 border-dashed border-gray-300 rounded-2xl bg-gray-50 min-h-[500px] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                  {activeSample.pdfUrl ? (
                    <iframe 
                      src={activeSample.pdfUrl} 
                      className="w-full h-[650px] rounded-xl border-none"
                      title={`${activeSample.title} Sample PDF`}
                    />
                  ) : (
                    <div className="max-w-md mx-auto space-y-4">
                      <div className="w-20 h-20 bg-brand-navy/10 text-brand-navy rounded-full flex items-center justify-center mx-auto mb-2">
                        <svg className="w-10 h-10 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-brand-navy">PDF Sample Document Preview</h3>
                      <p className="text-sm text-gray-500">
                        Detailed PDF takeoff report for <span className="font-semibold text-brand-navy">{activeSample.title}</span>. 
                        PDF document preview will display here.
                      </p>
                      
                      <div className="pt-2 flex flex-wrap gap-3 justify-center">
                        <UploadPlansButton className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow text-xs uppercase tracking-wider">
                          Request Full PDF Sample
                        </UploadPlansButton>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-brand-navy py-16 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Win Your Next Bid?</h2>
          <p className="text-gray-300 mb-8">Send us your project drawings and receive a detailed, accurate takeoff within 24-48 hours.</p>
          <UploadPlansButton className="bg-brand-orange hover:bg-orange-600 px-8 py-4 rounded font-bold text-lg shadow-lg">
            Upload Plans Now
          </UploadPlansButton>
        </div>
      </div>
    </div>
  );
}
