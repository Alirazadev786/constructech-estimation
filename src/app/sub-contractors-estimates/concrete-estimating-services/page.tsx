import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Concrete Estimating Services From Professional Estimators.`,
};

export default function Page() {
  const data = (content as any)['sub-contractors-estimates/concrete-estimating-services'];
  return <DynamicServiceTemplate data={data} />;
}
