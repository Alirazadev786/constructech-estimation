import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Lumber Takeoff and Estimating Services in USA Estimators`,
};

export default function Page() {
  const data = (content as any)['supplier-estimates/lumber-takeoffs'];
  return <DynamicServiceTemplate data={data} />;
}
