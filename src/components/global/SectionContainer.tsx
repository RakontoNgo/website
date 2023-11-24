'use client';

// import Image from 'next/image';
import React, { useEffect, useState } from 'react';
// import bg from '../../../public/backgroundHome/projectBg.png';

interface IProps {
  className?: string;
  children: React.ReactNode;
  bgImage?: string;
  id?: string;
}

function SectionContainer({ className, children, bgImage, id }: IProps) {
  const [windowWidth, setWindowWith] = useState(0);

  useEffect(() => {
    setWindowWith(window.innerWidth);
  }, []);

  return (
    <section
      id={id || ''}
      className={`${className} w-full flex flex-col items-center justify-center`}
      style={{
        backgroundImage: `${
          bgImage && windowWidth > 1024 && `url(${bgImage})`
        }`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-content w-full px-4 lg:px-10">{children}</div>
    </section>
  );
}

export default SectionContainer;
