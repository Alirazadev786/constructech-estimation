import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Best Structural Drawings & Calculations for Your Projects`,
};

export default function Page() {
  const data = (content as any)['services/design-drawing-engineering/structural-calculations'];
  return <DynamicServiceTemplate data={data} />;
}
