import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Best Industrial Estimating Services For Contractors in USA`,
};

export default function Page() {
  const data = (content as any)['general-contractor-services/industrial-estimating'];
  return <DynamicServiceTemplate data={data} />;
}
