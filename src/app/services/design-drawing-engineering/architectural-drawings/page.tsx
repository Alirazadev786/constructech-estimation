import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Best Architectural Drawings for Residential & Commercial Projects`,
};

export default function Page() {
  const data = (content as any)['services/design-drawing-engineering/architectural-drawings'];
  return <DynamicServiceTemplate data={data} />;
}
