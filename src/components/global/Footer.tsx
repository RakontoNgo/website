import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IContactInfos, ISocialMedia } from '../../../types';
import SocialMedia from './SocialMedia';

interface IProps {
  contactInfos: IContactInfos;
  socialMedia: ISocialMedia[];
}

function Footer({ contactInfos, socialMedia }: IProps) {
  return (
    <div className="  p-10 h-full flex  items-cente w-full lg:items-end max-w-content lg:pb-10 lg:p-10 font-josefin">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center justify-center w-full space-y-10 lg:space-y-0">
        <div className="text-xl  w-4/12 text-textColor flex flex-col items-center lg:items-start">
          <p>{+contactInfos.phoneNumber}</p>
          <p>{contactInfos.email}</p>
        </div>
        <div className=" w-4/12 flex flex-col justify-center items-center">
          <Image src="/logo/logo.svg" alt="RAKONTO" height={40} width={200} />
          <Link
            className="text-textColor text-center w-52  font-josefin opacity-60 mt-5 lg:mt-2"
            href="/legalMention"
          >
            Legal mentions
          </Link>
        </div>
        <div className=" w-4/12 flex flex-col justify-center items-center lg:items-end">
          <SocialMedia socialMedia={socialMedia} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
