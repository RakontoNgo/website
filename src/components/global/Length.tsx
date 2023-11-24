import React from 'react';

interface IProps {
  className: string;
}

function Length({ className }: IProps) {
  return (
    <div
      className={`${className}  h-14 w-14 flex flex-col justify-end items-end`}
    >
      <div className="bg-secondary  w-full h-5 rotate-90 translate-x-[19px] -translate-y-[0px]" />
      <div className="bg-secondary  w-full h-5" />
    </div>
  );
}

export default Length;
