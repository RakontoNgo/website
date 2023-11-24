import React from 'react';
import Image from 'next/image';
import { ISocialMedia } from '../../../types';
import urlForImage from '../../../sanity/lib/image';

interface IProps {
  socialMedia: ISocialMedia[];
  isFooter?: boolean;
}

function SocialMedia({ socialMedia, isFooter = true }: IProps) {
  return (
    <div className="flex space-x-3">
      {socialMedia.map((item) => (
        <a key={item.name} href={item.link} target="_blank">
          <Image
            src={urlForImage(
              isFooter ? item.icon.asset : item.iconWhite.asset
            ).url()}
            alt={item.name}
            height={isFooter ? 30 : 25}
            width={isFooter ? 30 : 25}
          />
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;
