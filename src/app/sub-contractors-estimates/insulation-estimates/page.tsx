import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Insulation Takeoffs Estimating Services for Subcontractors`,
};

export default function Page() {
  const data = (content as any)['sub-contractors-estimates/insulation-estimates'];
  return <DynamicServiceTemplate data={data} />;
}
