import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Estimation Services For Both Interior And Exterior Finishes`,
};

export default function Page() {
  const data = (content as any)['sub-contractors-estimates/exterior-finishes-estimates'];
  return <DynamicServiceTemplate data={data} />;
}
