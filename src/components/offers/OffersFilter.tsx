'use client';

import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import { Dispatch, SetStateAction } from 'react';

interface IProps {
  offersFilter: string;
  setOffersFilter: Dispatch<SetStateAction<string>>;
  offersLength: number;
  futurOffersLength: number;
  pastOffersLength: number;
  artisticGrantLenght: number;
}

function OffersFilter({
  offersFilter,
  setOffersFilter,
  futurOffersLength,
  pastOffersLength,
  offersLength,
  artisticGrantLenght,
}: IProps) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  const buttonsArray = [
    {
      buttonNameFr: `Offres(${futurOffersLength})`,
      buttonNameEn: `Offers(${futurOffersLength})`,
      buttonValue: 'futurOffers',
    },
    {
      buttonNameFr: `Offres Passées(${pastOffersLength})`,
      buttonNameEn: `Past Offers(${pastOffersLength})`,
      buttonValue: 'pastOffers',
    },
    {
      buttonNameFr: `Toutes(${offersLength})`,
      buttonNameEn: `All(${offersLength})`,
      buttonValue: 'All',
    },
    {
      buttonNameFr: `Offre Artistique(${artisticGrantLenght})`,
      buttonNameEn: `Artistic Offers(${artisticGrantLenght})`,
      buttonValue: 'Artistic Offers',
    },
  ];
  return (
    <div className="bg-background lg:bg-transparent justify-start lg:justify-end flex flex-wrap  pb-2 z-10 text-primary  fixed  px-4  md:px-10  right-0 w-full">
      {buttonsArray.map((item) => (
        <button
          key={item.buttonValue}
          className={` ${
            offersFilter === item.buttonValue && `font-bold`
          } border-b mr-5 mt-2 border-primary text-sm lg:text-base`}
          onClick={() => setOffersFilter(item.buttonValue)}
          type="button"
        >
          {selectedLanguage === 'Fr' ? item.buttonNameFr : item.buttonNameEn}
        </button>
      ))}
    </div>
  );
}

export default OffersFilter;
