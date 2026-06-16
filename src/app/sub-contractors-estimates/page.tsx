import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Sub Contractors Estimating Services & Company in USA`,
};

export default function Page() {
  const data = (content as any)['sub-contractors-estimates'];
  return <DynamicServiceTemplate data={data} />;
}
