import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Masonry Estimating Services For Your Construction Project`,
};

export default function Page() {
  const data = (content as any)['sub-contractors-estimates/masonry-estimates'];
  return <DynamicServiceTemplate data={data} />;
}
