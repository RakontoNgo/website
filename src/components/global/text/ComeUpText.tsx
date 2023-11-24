import React from 'react';

interface IProps {
  text: string;
  className?: string;
}

function ComeUpText({ text, className }: IProps) {
  return (
    <div
      className={`group flex h-4 lg:h-5  flex-col overflow-hidden ${className}`}
    >
      <p className="transform transition font-semibold duration-500 group-hover:-translate-y-6">
        {text}
      </p>
      <p className="-translate-y-1 transform transition duration-500 group-hover:-translate-y-6">
        {text}
      </p>
    </div>
  );
}

export default ComeUpText;
