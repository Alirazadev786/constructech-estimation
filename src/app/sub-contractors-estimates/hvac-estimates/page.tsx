import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HVAC Takeoff Estimates | Constructech Estimation',
  description: 'Accurate HVAC estimating and takeoff services for mechanical contractors, ductwork fabricators, and equipment installers.',
};

export default function Page() {
  const data = (content as any)['sub-contractors-estimates/hvac-estimates'] || {
    title: 'HVAC Takeoff Estimates',
    sections: [
      {
        type: 'h1',
        text: 'Comprehensive HVAC & Mechanical Takeoff Estimates'
      },
      {
        type: 'p',
        text: 'Our specialized HVAC estimators deliver detailed quantity takeoffs for ductwork, piping, diffusers, chillers, air handlers, and control systems. We empower mechanical subcontractors to submit competitive, accurate bids.'
      },
      {
        type: 'h2',
        text: 'What We Quantify in Our HVAC Takeoffs'
      },
      {
        type: 'list',
        items: [
          'Ductwork Linear Feet, Weight (lbs), and Insulation Square Feet',
          'Piping Systems (Chilled Water, Condenser, Refrigerant, Gas)',
          'Equipment Schedules (RTUs, AHUs, Chillers, Boilers, VAV Boxes)',
          'Grilles, Registers, Diffusers, and Air Balance Accessories',
          'Labor Hour Estimates & Equipment Rental Breakdown'
        ]
      }
    ]
  };

  return <DynamicServiceTemplate data={data} />;
}
