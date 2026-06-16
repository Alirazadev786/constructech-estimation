import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Hire The Best Design Drawing & Engineering Services in USA`,
};

export default function Page() {
  const data = (content as any)['services/design-drawing-engineering'];
  return <DynamicServiceTemplate data={data} />;
}
