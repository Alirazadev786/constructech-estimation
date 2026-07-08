import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Electrical Estimating Services In USA and Canada For Subcontractors`,
};

export default function Page() {
  const data = (content as any)['sub-contractors-estimates/electrical-work-estimating-takeoffs'];
  return <DynamicServiceTemplate data={data} />;
}
