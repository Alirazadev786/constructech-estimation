import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Reliable Rebar Estimating Services in USA and Canada & Trusted Estimators`,
};

export default function Page() {
  const data = (content as any)['supplier-estimates/rebar-takeoffs'];
  return <DynamicServiceTemplate data={data} />;
}
