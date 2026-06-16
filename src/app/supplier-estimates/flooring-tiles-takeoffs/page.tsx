import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Flooring Tiles Estimating & takeoff services for contractors`,
};

export default function Page() {
  const data = (content as any)['supplier-estimates/flooring-tiles-takeoffs'];
  return <DynamicServiceTemplate data={data} />;
}
