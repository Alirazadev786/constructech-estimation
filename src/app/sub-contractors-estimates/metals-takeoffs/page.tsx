import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Metals Estimation and Takeoff Services in USA For Contractors`,
};

export default function Page() {
  const data = (content as any)['sub-contractors-estimates/metals-takeoffs'];
  return <DynamicServiceTemplate data={data} />;
}
