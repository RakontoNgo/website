import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import React, { Dispatch, SetStateAction } from 'react';
import { ISubject } from '../../../types';
import SideBarLayout from '../global/SideBarLayout';

interface IProps {
  selectedSubject: string;
  setSelectedSubject: Dispatch<SetStateAction<string>>;
  subjects: ISubject[];
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setIsAnimate: Dispatch<SetStateAction<boolean>>;
}

function SideBar({
  setIsAnimate,
  selectedSubject,
  setSelectedSubject,
  subjects,
  searchTerm,
  setSearchTerm,
}: IProps) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();

  return (
    <SideBarLayout
      setIsAnimate={setIsAnimate}
      setSearchTerm={setSearchTerm}
      searchTerm={searchTerm}
    >
      <div className="flex flex-col space-y-3 items-start mt-5">
        <button
          onClick={() =>
            setSelectedSubject(selectedLanguage === 'Fr' ? 'Tous' : 'All')
          }
          type="button"
          className={`uppercase hover:font-bold transform duration-500 ease-out ${
            selectedSubject === 'Tous' || selectedSubject === 'All'
              ? 'font-bold'
              : 'font-regular'
          }`}
        >
          {selectedLanguage === 'Fr' ? 'Tous' : 'All'}
        </button>
        {subjects.map((item) => (
          <button
            onClick={() =>
              setSelectedSubject(
                selectedLanguage === 'Fr' ? item.titleFr : item.titleEn
              )
            }
            className={`uppercase  hover:font-bold transform duration-500 ease-out ${
              selectedSubject === item.titleFr ||
              selectedSubject === item.titleEn
                ? 'font-bold'
                : 'font-regular'
            }`}
            type="button"
            key={item._id}
          >
            {selectedLanguage === 'Fr' ? item.titleFr : item.titleEn}
          </button>
        ))}
      </div>
    </SideBarLayout>
  );
}

export default SideBar;
