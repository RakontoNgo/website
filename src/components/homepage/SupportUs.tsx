'use client';

import React, { useRef } from 'react';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { IHomeSupportUs } from '../../../types';
import H1 from '../global/text/H1';
import H3 from '../global/text/H3';
import SectionContainer from '../global/SectionContainer';
import BasicText from '../global/text/BasicText';
import LinkButton2 from '../global/buttons/LinkButton2';
import RichTextComponents from '../global/text/RichTextComponent';

function SupportUs({ data }: { data: IHomeSupportUs }) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();

  const ref = useRef(null);

  return (
    <SectionContainer
      id="supportUs"
      className=" mt-32 lg:my-0"
      bgImage="/backgroundHome/backgroundfooter.webp"
    >
      <div
        ref={ref}
        className=" pb-32 relative w-[100%] lg:min-h-[900px] font-josefin  flex flex-col lg:pt-10"
      >
        <H1
          className="mb-10"
          contentEn="SUPPORT US"
          contentFr="NOUS SOUTENIR"
        />

        <div className="bg-primary text-white flex lg:flex-row justify-between flex-col lg:py-5  ">
          {data.callToAction.map((item) => (
            <div
              key={item._key}
              className="border border-primary space-y-5  w-full lg:w-4/12 overflow-hidden flex flex-col items-start px-10 py-10"
            >
              <div className=" flex justify-between items-start text-left w-full ">
                <H3
                  className="leading-none w-10/12 font-bold"
                  contentEn={item.nameEn}
                  contentFr={item.nameFr}
                />
              </div>
              <div className="leading-normal">
                <PortableText
                  value={selectedLanguage === 'Fr' ? item.textFr : item.TextEn}
                  components={RichTextComponents}
                />
              </div>

              {item.nameFr === 'Devenez Membre' ? (
                <a
                  href={item.link}
                  className="flex  text-left items-center justify-start text-background bg-transparent hover:bg-white hover:text-primary  border border-white px-4 py-3 hover:bg-transparent  transform duration-500  font-bold min-w-[150px]"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>{`> ${
                    selectedLanguage === 'Fr'
                      ? item.buttonNameFr
                      : item.buttonNameEn
                  }`}</p>
                </a>
              ) : (
                <LinkButton2
                  className="min-w-[150px]"
                  textEn={item.buttonNameEn}
                  textFr={item.buttonNameFr}
                  link={item.link}
                />
              )}
            </div>
          ))}
        </div>

        <div className=" py-10 flex flex-col lg:flex-row">
          <div className=" w-full lg:w-7/12 flex flex-col space-y-10">
            <BasicText
              className="text-primary "
              contentEn={data.donationSection.textIntroEn}
              contentFr={data.donationSection.textIntroFr}
            />

            <div className="flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-5 ">
              {data.donationSection.cols.map((item) => (
                <div key={item.titleEn} className="lg:w-6/12 pr-5 space-y-2">
                  <H3
                    className="text-primary"
                    contentEn={item.titleEn}
                    contentFr={item.titleFr}
                  />
                  <PortableText
                    value={
                      selectedLanguage === 'Fr' ? item.textFr : item.textEn
                    }
                    components={RichTextComponents}
                  />
                </div>
              ))}
            </div>
            <div className="text-white flex flex-col lg:flex-row relative justify-end">
              <div className="relative lg:w-5/12 h-[180px]">
                <Image
                  className=" translate-x-5 lg:translate-x-10 lg:translate-y-5 w-full -translate-y-0"
                  src="/womanLoo.webp"
                  objectFit="contain"
                  alt="womanloop"
                  layout="fill"
                />
              </div>
              <div className="bg-primary px-5 lg:px-10 flex flex-col items-start justify-center space-y-2 w-full py-10 lg:py-0">
                <H3
                  contentEn={data.donationSection.textOutro.titleEn}
                  contentFr={data.donationSection.textOutro.titleFr}
                />
                <BasicText
                  contentEn={data.donationSection.textOutro.textEn}
                  contentFr={data.donationSection.textOutro.textFr}
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-5/12 xl:pl-20 lg:pl-10 pt-10 lg:pt-0 space-y-2">
            <div className="relative min-h-[200px] lg:min-h-[200px]">
              <Image
                src="/GroupHelping_Mountain2.webp"
                alt="Group helping mountain"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h1 className="font-francoisOne text-[50px]  leading-none md:text-[60px] xl:text-[40px] text-center uppercase   text-quaternary max-w-[400px] mx-auto">
              {selectedLanguage === 'Fr'
                ? data.donationSection.imageTitleFr
                : data.donationSection.imageTitleEn}
            </h1>

            <div className="relative min-h-[200px] lg:min-h-[200px]">
              <Image
                src="/GroupHelping_Mountain.webp"
                alt="Group helping mountain"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default SupportUs;
