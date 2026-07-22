import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MEP Estimating Services | Constructech Estimation',
  description: 'Mechanical, Electrical, and Plumbing (MEP) estimating and takeoff services for specialized contractors and MEP engineers.',
};

export default function Page() {
  const data = (content as any)['services/mep-estimating'] || {
    title: 'MEP Estimating Services',
    sections: [
      {
        type: 'h1',
        text: 'Mechanical, Electrical & Plumbing (MEP) Estimating'
      },
      {
        type: 'p',
        text: 'MEP systems are among the most complex components of any construction project. Our expert MEP estimators provide complete, itemized cost estimates and quantity takeoffs for HVAC, Electrical, Plumbing, and Fire Protection systems.'
      },
      {
        type: 'h2',
        text: 'Our MEP Estimating Breakdown'
      },
      {
        type: 'list',
        items: [
          'Mechanical & HVAC Ductwork, Piping & Equipment Takeoffs',
          'Electrical Conduits, Wiring, Fixtures, Switchgear & Panelboards',
          'Plumbing Drainage, Water Supply, Gas Piping & Fixtures',
          'Fire Suppression & Alarm Systems Quantifications',
          'Detailed Labor Hour & Subcontractor Cost Calculations'
        ]
      }
    ]
  };

  return <DynamicServiceTemplate data={data} />;
}
