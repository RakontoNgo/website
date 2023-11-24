import React from 'react';
import Image from 'next/image';
import { IPartners } from '../../../types';
import urlForImage from '../../../sanity/lib/image';

interface IProps {
  partners?: IPartners[];
}

function Partners({ partners }: IProps) {
  return (
    <div>
      {partners && (
        <ul className="flex flex-row flex-wrap space-x-5 mt-20">
          {partners.map((item) => (
            <li key={item._id}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={urlForImage(item.logo.asset).url()}
                  alt={item.logo.alt ? item.logo.alt : 'unkown image'}
                  height={100}
                  width={100}
                />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Partners;
