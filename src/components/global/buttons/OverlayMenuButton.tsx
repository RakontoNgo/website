import React from 'react';

function OverlayMenuButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button onClick={onClick} type="button" className="w-full my-1  text-left ">
      {children}
    </button>
  );
}

export default OverlayMenuButton;
