import React, { Dispatch, SetStateAction } from 'react';

interface IProps {
  setIsModalOpen: Dispatch<SetStateAction<{ isOpen: boolean; url: string }>>;
  isModalOpen: { isOpen: boolean; url: string };
}

function VideoModal({ setIsModalOpen, isModalOpen }: IProps) {
  return (
    <button
      type="button"
      onClick={() => setIsModalOpen({ isOpen: false, url: '' })}
      className="h-screen w-full fixed flex flex-col items-center justify-center top-0 left-0 bg-background bg-opacity-90"
      style={{ zIndex: 100 }}
    >
      <button
        type="button"
        className="  text-primary leading-0 text-4xl absolute top-10 right-2 lg:right-10 h-14 w-14 rounded-full flex items-center justify-center"
      >
        x
      </button>
      <div className=" h-[30%] w-11/12 lg:h-[67%] lg:w-8/12 relative">
        <iframe
          className="h-full w-full absolute overflow-hidden top-0 left-0"
          src={`${isModalOpen.url}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </button>
  );
}

export default VideoModal;
