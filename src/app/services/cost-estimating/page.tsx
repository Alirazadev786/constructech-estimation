import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Best Construction Cost Estimating Services For Contractors`,
};

export default function Page() {
  const data = (content as any)['services/cost-estimating'];
  return <DynamicServiceTemplate data={data} />;
}
