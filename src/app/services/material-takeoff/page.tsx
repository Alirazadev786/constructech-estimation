import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Material Takeoff Services | Constructech Estimation',
  description: 'Fast and accurate material takeoff services for contractors, sub-contractors, and material suppliers.',
};

export default function Page() {
  const data = (content as any)['services/material-takeoff'] || (content as any)['services/construction-takeoff'] || {
    title: 'Material Takeoff Services',
    sections: [
      {
        type: 'h1',
        text: 'Accurate Material Takeoff Services'
      },
      {
        type: 'p',
        text: 'Our material takeoff experts deliver comprehensive quantity surveys and bill of materials (BOM) for all CSI divisions. We utilize industry-standard software to quantify every material, item, and component required for your construction project.'
      },
      {
        type: 'h2',
        text: 'What We Include in Our Material Takeoffs'
      },
      {
        type: 'list',
        items: [
          'Detailed Itemized Bill of Quantities (BOQ / BOM)',
          'Excel Spreadsheets Organized by CSI Division',
          'Color-Coded Marked Up Drawings (Plans)',
          'Waste Factors & Material Vendor Quotes',
          'Fast 24-48 Hour Turnaround Time'
        ]
      },
      {
        type: 'h2',
        text: 'Trades Covered'
      },
      {
        type: 'p',
        text: 'We provide material takeoffs across all major construction trades including Concrete, Rebar, Lumber, Masonry, Drywall, Electrical, Plumbing, HVAC, Roofing, and Finishes.'
      }
    ]
  };

  return <DynamicServiceTemplate data={data} />;
}
