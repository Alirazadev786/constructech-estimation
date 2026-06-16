import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Our Public Projects Estimating Services for Busy Contractors`,
};

export default function Page() {
  const data = (content as any)['general-contractor-services/public-projects-estimates'];
  return <DynamicServiceTemplate data={data} />;
}
