import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Best Construction Cost Estimating Services in New York City.`,
};

export default function Page() {
  const data = (content as any)['construction-cost-estimating-services-newyork'];
  return <DynamicServiceTemplate data={data} />;
}
