import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Expert Pre-Construction Services for Successful Projects`,
};

export default function Page() {
  const data = (content as any)['services/pre-construction'];
  return <DynamicServiceTemplate data={data} />;
}
