'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { useProjectSelectedSubjectFromStore } from '@/store/projectSubjectSelected';
import { useRouter } from 'next/navigation';
import H1 from '../global/text/H1';
import { IHomeOurProjectSection, Subject } from '../../../types';
import LinkButton from '../global/buttons/LinkButton';
import BasicText from '../global/text/BasicText';
import H2 from '../global/text/H2';
import SlideUp from '../animated/SlideUp';
import SectionContainer from '../global/SectionContainer';
import H3 from '../global/text/H3';

interface IProps {
  data: IHomeOurProjectSection;
  projectsSubjects: Subject[];
}

function OurProjects({ data, projectsSubjects }: IProps) {
  const [size, setSize] = useState(0);
  const { setProjectSelectedSubject } = useProjectSelectedSubjectFromStore();
  const router = useRouter();

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    setSize(window.innerWidth);
  }, []);

  const handleClick = (item: string | null) => {
    setProjectSelectedSubject(item);
    router.push('/projects');
  };

  return (
    <SectionContainer
      bgImage="/backgroundHome/bgProjects5.png"
      className="  flex flex-col lg:mb-20  items-start justify-center"
    >
      <div ref={ref} className=" mt-10 lg:mt-0 w-full ">
        {inView && (
          <SlideUp duration={1.2}>
            <H1 contentEn={data.titleEn} contentFr={data.titleFr} />
          </SlideUp>
        )}
        <ul className="flex flex-col w-full mt-10 lg:mt-0 items-end text-primary space-y-5 lg:space-y-10">
          {projectsSubjects.map((item, index) => (
            <li key={item._id}>
              {inView && (
                <SlideUp
                  duration={index * 0.25 + 0.5}
                  className="hidden lg:flex"
                  style={{
                    paddingRight: size >= 1024 ? `${index * 80}px` : '0',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => handleClick(item.titleFr)}
                  >
                    <H3
                      className="hover:bg-transparent hover:text-primary border border-primary transform duration-200 bg-primary text-white px-5 pt-1 flex items-center"
                      contentEn={item.titleEn}
                      contentFr={item.titleFr}
                    />
                  </button>
                </SlideUp>
              )}
              <button
                type="button"
                onClick={() => handleClick(item.titleFr)}
                className="flex flex-col lg:hidden"
              >
                <H2
                  className="hover:font-bold transform duration-200"
                  contentEn={item.titleEn}
                  contentFr={item.titleFr}
                />
              </button>
            </li>
          ))}
        </ul>{' '}
        {inView && (
          <SlideUp
            duration={1.2}
            className=" mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between lg:mt-14"
          >
            <LinkButton
              className="w-8/12  lg:w-[240px] mt-10"
              textEn={data.callToAction.nameEn}
              textFr={data.callToAction.nameFr}
              link={data.callToAction.link}
            />
            <BasicText
              className="mt-10 lg:mt-0 lg:w-6/12"
              contentEn={data.textEn}
              contentFr={data.textFr}
            />
          </SlideUp>
        )}
      </div>
    </SectionContainer>
  );
}

export default OurProjects;
