import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Get perfect site-works Estimating services in USA and Canada`,
};

export default function Page() {
  const data = (content as any)['sub-contractors-estimates/site-works'];
  return <DynamicServiceTemplate data={data} />;
}
