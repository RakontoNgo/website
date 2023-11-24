'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { ITeam } from '../../../types';
import H3 from '../global/text/H3';
import BasicText from '../global/text/BasicText';
import urlForImage from '../../../sanity/lib/image';
import H1 from '../global/text/H1';
import SlideUp from '../animated/SlideUp';

interface IProps {
  team: ITeam[];
}

function TeamMembers({ team }: IProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div className="mt-10 lg:mt-10 lg:mx-52 min-h-screen">
      <div ref={ref}>
        {inView && (
          <SlideUp duration={1.5}>
            <H1
              className="text-center"
              contentEn="the team behind the association"
              contentFr="la team derrière l’asso"
            />
          </SlideUp>
        )}
      </div>

      <div className="mt-5 lg:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {team.map((member) => (
          <div key={member._id}>
            <div className=" relative w-full h-96">
              <Image
                className="object-cover"
                src={urlForImage(member.profilPicture.asset).url()}
                fill
                alt="notre aventure"
                priority
              />
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex">
                <H3
                  className="text-primary"
                  contentEn={member.firstName}
                  contentFr={member.firstName}
                />

                {member.pronounsEn && (
                  <BasicText
                    className="text-primary ml-2"
                    contentEn={member.pronounsEn}
                    contentFr=""
                  />
                )}

                {member.pronounsFr && (
                  <BasicText
                    className="text-primary -translate-x-1"
                    contentEn=""
                    contentFr={member.pronounsFr}
                  />
                )}
              </div>
              <BasicText
                className="text-primary"
                contentEn={member.roleEn}
                contentFr={member.roleFr}
              />
            </div>
            <BasicText
              contentEn={member.descriptionEn}
              contentFr={member.descriptionFr}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamMembers;
