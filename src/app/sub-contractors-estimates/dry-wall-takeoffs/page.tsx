import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Drywall Takeoff and Estimating Services for sub-contractors`,
};

export default function Page() {
  const data = (content as any)['sub-contractors-estimates/dry-wall-takeoffs'];
  return <DynamicServiceTemplate data={data} />;
}
