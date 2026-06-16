import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Get 3D Rendering & Modeling for Stunning Visualizations`,
};

export default function Page() {
  const data = (content as any)['services/design-drawing-engineering/3d-rendering-modeling'];
  return <DynamicServiceTemplate data={data} />;
}
