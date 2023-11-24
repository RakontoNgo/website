import React, { Dispatch, SetStateAction } from 'react';

interface IProps {
  url: string;
  className: string;
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; url: string }>>;
  container?: string;
}

function Video({ url, className, setIsModalOpen, container }: IProps) {
  return (
    <div className={`${container}`}>
      <div className={`overflow-hidden  relative  ${className} `}>
        <button
          onClick={() => setIsModalOpen({ isOpen: true, url })}
          type="button"
          className="h-full w-full absolute top-0 left-0 bg-black bg-opacity-10 z-10"
          aria-label="overlay"
        />
        <iframe
          className="h-full w-full absolute overflow-hidden top-0 left-0"
          src={`${url}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
    </div>
  );
}

export default Video;
