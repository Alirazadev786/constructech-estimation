import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Reliable Scheduling Services for All Projects in Construction`,
};

export default function Page() {
  const data = (content as any)['services/pre-construction/scheduling-services'];
  return <DynamicServiceTemplate data={data} />;
}
