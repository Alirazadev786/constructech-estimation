import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Consultation form - Constructech Estimation`,
};

export default function Page() {
  const data = (content as any)['consultation-form'];
  return <DynamicServiceTemplate data={data} />;
}
