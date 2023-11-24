/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable arrow-body-style */
/* eslint-disable no-restricted-syntax */

'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import scrollToSection from '@/utils/scrollToSection';
import { IOffer } from '../../../types';
import SectionContainer from '../global/SectionContainer';

import urlForImage from '../../../sanity/lib/image';
import H2 from '../global/text/H2';
import BasicText from '../global/text/BasicText';
import LinkButton from '../global/buttons/LinkButton';

function OffersSection({ offers }: { offers: IOffer[] }) {
  const [currentVisibleOfferId, setCurrentVisibleOfferId] = useState<
    string | null
  >(offers[0]._id);

  function isElementInViewport(el: HTMLElement | null) {
    if (!el) return false;

    const rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  const handleScroll = () => {
    for (const item of offers) {
      const element = document.getElementById(item._id);

      if (element && isElementInViewport(element)) {
        setCurrentVisibleOfferId(item._id);
        break; // Sortir de la boucle dès qu'une offre est trouvée
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offers]);

  const ItemArrayPosition = (index: number) => {
    if (index + 1 >= 10 && index + 1 <= 99) {
      return `${index + 1} - `;
    }
    return `0${index + 1} - `;
  };

  const { selectedLanguage } = useSelectedLanguagesFromStore();

  return (
    <SectionContainer className=" w-full  pt-16">
      <div className=" hidden fixed bottom-10 right-10 lg:flex flex-col space-y-1 font-josefin">
        {offers.map((item, index) => {
          return (
            <button
              onClick={() => scrollToSection(item._id, 50)}
              type="button"
              key={item._id}
              className="text-primary font-bold"
              style={{
                opacity: currentVisibleOfferId === item._id ? '1' : '0.8',
              }}
            >
              <div className="flex items-center">
                <p>{ItemArrayPosition(index)}</p>
                <p>{selectedLanguage === 'Fr' ? item.title : item.titleEn}</p>
              </div>
            </button>
          );
        })}
      </div>
      {offers.map((item, index) => (
        <div
          className="flex flex-col mb-10 lg:flex-row w-full min-h-[80vh]"
          key={item._id}
          id={item._id}
        >
          {' '}
          <div className="lg:w-[45%]">
            <Image
              src={urlForImage(item.mainImage.asset).url()}
              width={1200}
              height={300}
              alt={item.mainImage.alt ? item.mainImage.alt : 'unkown image'}
            />
          </div>
          <div className="mt-10 lg:px-10 lg:w-[55%]">
            <div className="flex items-center">
              <H2
                className="mr-2"
                contentEn={ItemArrayPosition(index)}
                contentFr={ItemArrayPosition(index)}
              />
              <H2
                className="flex"
                contentEn={item.titleEn}
                contentFr={item.title}
              />
            </div>
            <BasicText
              className="mt-2"
              contentEn={item.descriptionEN}
              contentFr={item.descriptionFR}
            />
            <div className="mt-2 flex items-center text-quaternary">
              <BasicText
                contentEn={`${
                  item.PlacesAvailable - item.placesOccupied === 0 ? '' : ''
                }"Place Available"`}
                contentFr="Place disponible"
              />
              <BasicText
                className="ml-2"
                contentEn={JSON.stringify(
                  item.PlacesAvailable - item.placesOccupied
                )}
                contentFr={JSON.stringify(
                  item.PlacesAvailable - item.placesOccupied
                )}
              />
            </div>
            <LinkButton
              className="mt-10 lg:w-6/12"
              textEn={`${
                item.PlacesAvailable - item.placesOccupied === 0
                  ? 'Registration closed'
                  : 'Apply'
              }`}
              textFr={`${
                item.PlacesAvailable - item.placesOccupied === 0
                  ? `Les inscriptions sont closes`
                  : 'Postuler'
              }`}
              link={`${`/offers/${item.slug.current}`}`}
            />
          </div>
        </div>
      ))}
    </SectionContainer>
  );
}

export default OffersSection;
