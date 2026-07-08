import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Trusted supplier estimating services for contractors in USA and Canada`,
};

export default function Page() {
  const data = (content as any)['supplier-estimates'];
  return <DynamicServiceTemplate data={data} />;
}
