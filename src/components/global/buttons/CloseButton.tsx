import React from 'react';

interface IProps {
  onClick: () => void;
  background?: string;
}

function CloseButton({ onClick, background = 'bg-primary' }: IProps) {
  return (
    <button onClick={onClick} type="button">
      <div
        className={`${background} border group   border-background transform hover:border-none hover:bg-background rounded-full h-10 w-10 flex items-center justify-center duration-300`}
      >
        <div className="h-full w-full rotate-45 flex items-center justify-center">
          <span className="h-[1px] w-8 rotate-90 translate-x-1/2 transform bg-background group-hover:bg-primary duration-300" />
          <span className="h-[1px] w-8 bg-background -translate-x-1/2 transform group-hover:bg-primary duration-300" />
        </div>
      </div>
    </button>
  );
}

export default CloseButton;
