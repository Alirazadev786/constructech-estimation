import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `MEP Drawing Services with Title 24 for Efficient construction`,
};

export default function Page() {
  const data = (content as any)['services/design-drawing-engineering/mep-with-title-24'];
  return <DynamicServiceTemplate data={data} />;
}
