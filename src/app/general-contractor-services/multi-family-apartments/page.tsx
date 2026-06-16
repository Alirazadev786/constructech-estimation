import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Multi-Family Apartments Estimating Services for Contractors`,
};

export default function Page() {
  const data = (content as any)['general-contractor-services/multi-family-apartments'];
  return <DynamicServiceTemplate data={data} />;
}
