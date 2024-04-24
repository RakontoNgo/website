'use client';

import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import { Dispatch, SetStateAction } from 'react';

interface IProps {
  offersFilter: string;
  setOffersFilter: Dispatch<SetStateAction<string>>;
  offersLength: number;
  futurOffersLength: number;
  pastOffersLength: number;
}

function OffersFilter({
  offersFilter,
  setOffersFilter,
  futurOffersLength,
  pastOffersLength,
  offersLength,
}: IProps) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  const buttonsArray = [
    {
      buttonNameFr: `Futurs offres(${futurOffersLength})`,
      buttonNameEn: `Futur offers(${futurOffersLength})`,
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
  ];
  return (
    <div className="bg-white lg:bg-transparent justify-start lg:justify-end flex space-x-5 py-2 z-10 text-primary  fixed  px-4  md:px-10  right-0 w-full">
      {buttonsArray.map((item) => (
        <button
          key={item.buttonValue}
          className={` ${
            offersFilter === item.buttonValue && `font-bold`
          } border-b border-primary`}
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
