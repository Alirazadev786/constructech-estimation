import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Value Engineering Services | Constructech Estimation',
  description: 'Optimize project costs without compromising on quality or performance. Professional value engineering services for construction projects.',
};

export default function Page() {
  const data = (content as any)['services/value-engineering'] || {
    title: 'Value Engineering Services',
    sections: [
      {
        type: 'h1',
        text: 'Value Engineering & Cost Optimization Services'
      },
      {
        type: 'p',
        text: 'Our Value Engineering services help general contractors, developers, and project owners achieve maximum value for every dollar spent. We analyze materials, design specifications, and construction methods to identify cost-reduction opportunities while maintaining structural integrity, functionality, and aesthetic quality.'
      },
      {
        type: 'h2',
        text: 'What is Value Engineering?'
      },
      {
        type: 'p',
        text: 'Value Engineering (VE) is a systematic, organized approach to providing necessary functions in a project at the lowest cost. It involves substitute materials and methods with less expensive alternatives, without reducing functionality, safety, or longevity.'
      },
      {
        type: 'h2',
        text: 'Our Value Engineering Process'
      },
      {
        type: 'list',
        items: [
          'Comprehensive Blueprint & Specification Analysis',
          'Material Substitution & Alternative Supplier Sourcing',
          'Constructability & Method Optimization Assessment',
          'Lifecycle Costing & Long-Term Energy Efficiency Analysis',
          'Detailed Value Engineering Report & Savings Summary'
        ]
      },
      {
        type: 'h2',
        text: 'Why Choose Constructech for Value Engineering?'
      },
      {
        type: 'p',
        text: 'With decades of combined experience across residential, commercial, and industrial construction sectors, our expert estimators provide practical, actionable recommendations that keep your project on budget and ahead of schedule.'
      }
    ]
  };

  return <DynamicServiceTemplate data={data} />;
}
