import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `General Contractor Estimating Services in USA | Constructech Estimation`,
};

export default function Page() {
  const data = (content as any)['general-contractor-services'];
  return <DynamicServiceTemplate data={data} />;
}
