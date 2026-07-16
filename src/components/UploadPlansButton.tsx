'use client';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export default function UploadPlansButton({ className, children }: Props) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('trigger-plan-upload'));
  };

  return (
    <button onClick={handleClick} className={className}>
      {children || 'Upload Plans'}
    </button>
  );
}
