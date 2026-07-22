'use client';

import { useState } from 'react';

interface RobotCaptchaProps {
  isVerified: boolean;
  onVerify: (status: boolean) => void;
}

export default function RobotCaptcha({ isVerified, onVerify }: RobotCaptchaProps) {
  const [isVerifying, setIsVerifying] = useState(false);

  const handleClick = () => {
    if (isVerified) return;
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      onVerify(true);
    }, 600);
  };

  return (
    <div className="bg-gray-50 border border-gray-300 rounded-xl p-3.5 flex items-center justify-between shadow-xs select-none max-w-sm">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleClick}
          className={`w-7 h-7 rounded border-2 flex items-center justify-center transition-all cursor-pointer ${
            isVerified
              ? 'bg-green-500 border-green-500 text-white'
              : isVerifying
              ? 'border-brand-orange bg-white'
              : 'border-gray-400 bg-white hover:border-gray-600'
          }`}
        >
          {isVerified ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          ) : isVerifying ? (
            <div className="w-4 h-4 border-2 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
          ) : null}
        </button>

        <span className="text-xs md:text-sm font-semibold text-gray-700">
          {isVerified ? "Human verification complete" : "I'm not a robot"}
        </span>
      </div>

      <div className="flex flex-col items-end pl-2">
        <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400">
          <svg className="w-3.5 h-3.5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span>reCAPTCHA</span>
        </div>
        <span className="text-[8px] text-gray-400">Privacy - Terms</span>
      </div>
    </div>
  );
}
