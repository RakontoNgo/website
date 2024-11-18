'use client';

import React, { useRef, useState } from 'react';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { IHomeSupportUs } from '../../../types';
import H1 from '../global/text/H1';
import RichTextComponents from '../global/text/RichTextComponent';
import H3 from '../global/text/H3';
import SectionContainer from '../global/SectionContainer';
import SlideUp from '../animated/SlideUp';
import LinkButton from '../global/buttons/LinkButton';
import BasicText from '../global/text/BasicText';
import LinkButton2 from '../global/buttons/LinkButton2';
import H2 from '../global/text/H2';

function SupportUs({ data }: { data: IHomeSupportUs }) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  const [callToActionOpen, setCallToActionOpen] = useState<{
    isOpen: boolean;
    itemId: undefined | string;
  }>({
    isOpen: false,
    itemId: undefined,
  });

  const ref = useRef(null);

  const inView = useInView(ref, { once: true });

  const calltoAction = [
    {
      _key: '1',
      nameEn: 'Donation',
      nameFr: 'Donnation',
      textFr:
        'Vous choisissez le montant de votre donation ; chaque contribution est la bienvenue',
      TextEn:
        'You choose the amount of your donation; every contribution is welcome',
      buttonNameEn: 'link',
      buttonNameFr: 'lien',
      link: '/make-a-donation',
    },
    {
      _key: '2',
      nameEn: 'Become Member',
      nameFr: 'Devenir Membre',
      textFr: 'Adhésion "membre" 20€/an Adhésion "membre bienfaiteur" 60€/an',
      TextEn:
        'Membership "member" 20€/year Membership "benefactor member" 60€/year',
      buttonNameEn: 'link',
      buttonNameFr: 'lien',
      link: '/become-member',
    },
    {
      _key: '3',
      nameEn: 'Become a patron',
      nameFr: 'Devenez Mécène',
      textFr:
        'À partir de 500€, votre nom est sur notre site, vous êtes mis en contact avec les initiatives de votre choix, et nous réalisons des portraits photos des membres de votre structure À partir de 1500€, vous obtenez tout ce qui précède plus une vidéo de votre structure',
      TextEn:
        'From 500€, your name is on our site, you are put in contact with the initiatives of your choice, and we produce photo portraits of the members of your structure. From €1,500, you get all the above plus a video of your organization.',
      buttonNameEn: 'link',
      buttonNameFr: 'lien',
      link: '/contact-us',
    },
  ];

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

        <div className="bg-primary text-white flex lg:flex-row justify-between flex-col  ">
          {calltoAction.map((item, index) => (
            <div
              key={item._key}
              className="border border-primary space-y-5  w-full lg:w-4/12 overflow-hidden flex flex-col items-start px-5 py-10"
            >
              <div className=" flex justify-between items-start text-left w-full ">
                <H3
                  className="leading-none w-10/12 font-bold"
                  contentEn={item.nameEn}
                  contentFr={item.nameFr}
                />
              </div>
              <div className="leading-normal">
                {/* <PortableText
                      value={
                        selectedLanguage === 'Fr' ? item.textFr : item.TextEn
                      }
                      components={RichTextComponents}
                    /> */}
                <BasicText contentEn={item.TextEn} contentFr={item.textFr} />
              </div>

              <LinkButton2
                className="min-w-[150px]"
                textEn={item.buttonNameEn}
                textFr={item.buttonNameFr}
                link={item.link}
              />
            </div>
          ))}
        </div>

        <div className=" py-10 flex flex-col lg:flex-row">
          <div className=" w-full lg:w-7/12 flex flex-col space-y-10">
            <BasicText
              className="text-primary "
              contentEn="Your support is crucial if we are to continue our mission and have a positive impact on our community.Thank you for believing in our project and contributing to its success."
              contentFr="Votre soutien est crucial pour que nous puissions poursuivre notre mission et avoir un impact positif sur notre communauté. Merci de croire en notre projet et de contribuer à son succès."
            />

            <div className="flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-5 ">
              <div className="lg:w-6/12 pr-5 space-y-2">
                <H3
                  className="text-primary"
                  contentEn="Your donation - for you"
                  contentFr="Votre don - pour vous"
                />
                <BasicText
                  contentEn="You choose the amount of your donation; every contribution is welcome."
                  contentFr="Accéder à des vidéos inspirantes qui mettent en lumière des solutions concrètes.Profiter d'un contenu libre et gratuit, accessible à tous Bénéficier de formations innovantes sur les nouvelles façons d'agir Participer à une dynamique positive en encourageant de nouvelles initiatives."
                />
              </div>
              <div className="lg:w-6/12 pr-5 space-y-2">
                <H3
                  contentEn="Et pour nous"
                  contentFr="And for us"
                  className="text-primary "
                />
                <BasicText
                  contentEn="Keep this association going and offer you even more. A donation means getting priority on our projects, being part of a great team and even more blabla."
                  contentFr="Continuer de faire vivre cette association et vous proposer encore plus de chose. Un don, c’est être prioritaire sur nos projets, c’est être membre d’une super équipe et encore plus de blabla."
                />
              </div>
            </div>
            <div className="text-white flex flex-col-reverse lg:flex-row relative justify-end">
              <div className="relative lg:w-5/12 h-[200px]">
                <Image
                  className=" translate-x-5 lg:translate-x-10 lg:translate-y-5 w-full -translate-y-10"
                  src="/womanLoo.webp"
                  objectFit="contain"
                  alt="womanloop"
                  layout="fill"
                />
              </div>
              <div className="bg-primary px-5 lg:px-10 py-10 space-y-2 w-full">
                <H3
                  contentEn="how is your donation used ?"
                  contentFr="comment est utilisé votre don ?"
                />
                <BasicText
                  contentEn="Your donation funds the creation of inspiring content and free access to our resources. It also supports our training courses and encourages new positive initiatives."
                  contentFr="Votre don finance la création de contenu inspirant et l’accès gratuit à nos ressources. Il soutient également nos formations et encourage de nouvelles initiatives positives."
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-5/12 xl:pl-40 lg:pl-20 pt-10 lg:pt-0">
            <div className="relative min-h-[200px] lg:min-h-[320px]">
              <Image
                src="/GroupHelping_Mountain2.webp"
                alt="Group helping mountain"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <H1
              textColor="text-quaternary"
              textSize="text-[40px] lg:text-[30px] xl:text-[50px]"
              className="font-bold  text-center"
              contentEn="Your donation, for an inspiring future accessible to all."
              contentFr="Votre don, pour un avenir inspirant et accessible à tous."
            />
            <div className="relative min-h-[200px] lg:min-h-[320px]">
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
