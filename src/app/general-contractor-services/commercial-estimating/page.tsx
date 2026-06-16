import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Commercial Estimating Services for Accurate Building Costs`,
};

export default function Page() {
  const data = (content as any)['general-contractor-services/commercial-estimating'];
  return <DynamicServiceTemplate data={data} />;
}
