import DynamicServiceTemplate from '@/components/CompetitorLayout/DynamicServiceTemplate';
import content from '@/data/competitor_content.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CPM Scheduling Services | Constructech Estimation',
  description: 'Critical Path Method (CPM) construction scheduling and timeline management services for general contractors and project managers.',
};

export default function Page() {
  const data = (content as any)['services/cpm-scheduling'] || {
    title: 'CPM Scheduling Services',
    sections: [
      {
        type: 'h1',
        text: 'Critical Path Method (CPM) Construction Scheduling'
      },
      {
        type: 'p',
        text: 'Streamline your construction projects with precision CPM scheduling. Our experienced schedulers build detailed Primavera P6 and MS Project schedules that track project milestones, sequence work activities, and prevent costly delays.'
      },
      {
        type: 'h2',
        text: 'Key Components of Our CPM Scheduling Services'
      },
      {
        type: 'list',
        items: [
          'Baseline Schedule Development (Primavera P6 & MS Project)',
          'Work Breakdown Structure (WBS) Creation',
          'Critical Path Identification & Float Analysis',
          'Resource & Equipment Loading & Leveling',
          'Monthly Progress Updates & Delay Claims Analysis'
        ]
      },
      {
        type: 'h2',
        text: 'Benefits of Professional CPM Scheduling'
      },
      {
        type: 'p',
        text: 'Effective CPM scheduling provides a clear roadmap for project execution, ensuring all subcontractors, suppliers, and managers are aligned. It reduces risk, enhances communication, and protects your project against delay liabilities.'
      }
    ]
  };

  return <DynamicServiceTemplate data={data} />;
}
