'use client';

import React from 'react';
import Image from 'next/image';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import Link from 'next/link';
import { IOffer } from '../../../types';
import urlForImage from '../../../sanity/lib/image';
import H2 from '../global/text/H2';
import BasicText from '../global/text/BasicText';
import LinkButton from '../global/buttons/LinkButton';
import H3 from '../global/text/H3';
import DateFormat from '../global/DateFormat';
import Body from '../articles/Body';
import Files from '../projects/Files';

function OneOffer({ offer, link }: { offer: IOffer; link: string }) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();

  return (
    <div className="my-5 flex flex-col font-josefin lg:flex-row-reverse pt-20">
      <div className="lg:w-5/12  lg:h-[80vh] lg:sticky lg:top-16 right-0">
        <H2
          className="lg:hidden flex"
          contentEn={offer.titleEn}
          contentFr={offer.title}
        />
        <Image
          src={urlForImage(offer.mainImage.asset).url()}
          width={1200}
          height={300}
          alt={offer.mainImage.alt ? offer.mainImage.alt : 'unkown image'}
        />
      </div>
      <div className="lg:w-7/12 lg:pr-10">
        <H2
          className="hidden lg:flex"
          contentEn={offer.titleEn}
          contentFr={offer.title}
        />
        <BasicText
          className="mt-10"
          contentEn={offer.descriptionEN}
          contentFr={offer.descriptionFR}
        />

        <div className="mt-10">
          <H3 contentEn="Date & Location" contentFr="Date et lieux" />
          <div className="flex">
            <span className="mr-2">
              {selectedLanguage === 'Fr' ? 'Date de début' : 'Starting Date'} :
            </span>
            <DateFormat date={offer.startDate} />
          </div>
          <div className="flex">
            <span className="mr-2">
              {selectedLanguage === 'Fr' ? 'Date de Fin' : 'Ending Date'} :
            </span>
            <DateFormat date={offer.startDate} />
          </div>
          <div className="flex">
            <span className="mr-2">
              {selectedLanguage === 'Fr' ? 'Localisation' : 'Location'} :
            </span>
            <span>{offer.location}</span>
          </div>
        </div>

        <div className="mt-10">
          <H3
            contentEn="ABOUT THIS EVENT"
            contentFr="À PROPOS DE CET ÉVÉNEMENT"
          />
          <Body blockEn={offer.bodyEn} blockFr={offer.bodyFr} />
        </div>

        {offer.files && (
          <div>
            <Files files={offer.files} />
            <span className="mr-2">
              {selectedLanguage === 'Fr'
                ? `C'est important que vous lisiez ce document attentivement.`
                : `It's important that you read this document carefully.`}
            </span>
          </div>
        )}

        <div className="mt-10 text-quaternary text-lg">
          <div className="flex">
            <span className="mr-2">
              {selectedLanguage === 'Fr'
                ? 'Place disponible'
                : 'Place Available'}{' '}
              :
            </span>
            <span>{offer.PlacesAvailable - offer.placesOccupied}</span>
          </div>
        </div>

        {offer.PlacesAvailable - offer.placesOccupied !== 0 ? (
          <LinkButton
            className="mt-10"
            textEn="Apply"
            textFr="Postuler"
            link={link}
          />
        ) : (
          <div className="bg-quaternary px-10 py-3 lg:w-6/12 flex flex-col items-center justify-center  text-white mt-5">
            <p>
              {' '}
              {selectedLanguage === 'Fr'
                ? 'Les inscriptions sont closes'
                : 'Registration closed'}
            </p>
            <Link className="underline" href="/offers">
              {selectedLanguage === 'Fr'
                ? 'Voir autres événements'
                : 'See other events'}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default OneOffer;
