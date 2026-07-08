import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Residential Estimating Services For Busy Contractors in USA and Canada`,
};

export default function Page() {
  const data = (content as any)['general-contractor-services/residential-estimating'];
  return <DynamicServiceTemplate data={data} />;
}
