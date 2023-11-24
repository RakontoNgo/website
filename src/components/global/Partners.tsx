import React from 'react';
import Image from 'next/image';
import { IPartners } from '../../../types';
import urlForImage from '../../../sanity/lib/image';

function Partners({ data }: { data: IPartners[] }) {
  return (
    <div className="flex flex-wrap w-full mt-5 space-x-2 items-center mx-auto">
      {data.map((item) => (
        <Image
          key={item._id}
          src={urlForImage(item.logo.asset).url()}
          height={80}
          width={80}
          alt={item.logo.alt ? item.logo.alt : 'Unknow image'}
        />
      ))}
    </div>
  );
}

export default Partners;
