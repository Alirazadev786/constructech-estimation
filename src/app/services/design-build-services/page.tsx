import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Expert Design Build Services for USA Construction Projects`,
};

export default function Page() {
  const data = (content as any)['services/design-build-services'];
  return <DynamicServiceTemplate data={data} />;
}
