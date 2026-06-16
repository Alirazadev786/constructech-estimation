import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Professional estimator for steel takeoff Estimating Services`,
};

export default function Page() {
  const data = (content as any)['supplier-estimates/steel-takeoffs'];
  return <DynamicServiceTemplate data={data} />;
}
