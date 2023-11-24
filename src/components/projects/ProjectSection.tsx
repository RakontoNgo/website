'use client';

import React, { useRef, useState } from 'react';
import H3 from '../global/text/H3';
import Body from '../articles/Body';
import GalleryImage from '../global/images/GalleryImage';
import BasicText from '../global/text/BasicText';
import Video from '../videos/Video';
import VideoModal from '../videos/VideoModal';
import ExternalesLinks from './ExternalesLinks';
import Files from './Files';
import { Block, IExternalsLinks, IFile, SanityImage } from '../../../types';

interface IProps {
  item: {
    _key: string;
    title: string;
    titleEn: string;
    textFR?: Block[] | undefined;
    textEn?: Block[] | undefined;
    gallery?: SanityImage[] | undefined;
    url?: string | undefined;
    externalsLinks?: IExternalsLinks[] | undefined;
    files?: IFile[] | undefined;
  };
}

function ProjectSection({ item }: IProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState({ isOpen: false, url: '' });

  return (
    <div ref={ref}>
      {/* MODAL */}
      {isModalOpen.isOpen && (
        <VideoModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}{' '}
      <H3
        className="text-primary"
        contentEn={item.titleEn}
        contentFr={item.title}
      />
      <div ref={dropdownRef}>
        {' '}
        {/* TEXTE */}
        {item.textEn && item.textFR && (
          <Body blockEn={item.textEn} blockFr={item.textFR} />
        )}
        {/* VIDEO */}
        {item.url && (
          <Video
            setIsModalOpen={setIsModalOpen}
            url={item.url}
            className="h-52 sm:h-[400px] lg:h-[500px] xl:h-[580px] w-full mt-10"
          />
        )}
        {/* GALLERY */}
        {item.gallery && <GalleryImage data={item.gallery} />}
        {/* EXGERNAL LINKS */}
        {item.externalsLinks && (
          <div className="mt-2">
            <BasicText
              contentEn="External links"
              contentFr="Liens externes"
              className="mt-10 text-primary"
            />
            <div className="my-5">
              <ExternalesLinks links={item.externalsLinks} />
            </div>
          </div>
        )}
        {/* DOWLOAD FILES */}
        {item.files && (
          <div className="mt-2">
            <BasicText
              contentEn="DOWNLOADABLE DOCUMENTS"
              contentFr="DOCUMENTS TÉLÉCHARGEABLE"
              className="mt-10 text-primary"
            />
            <div className="my-5">
              <Files files={item.files} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectSection;
