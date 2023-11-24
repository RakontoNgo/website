'use client';

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import { useProjectSelectedSubjectFromStore } from '@/store/projectSubjectSelected';
import SideBarLayout from '../global/SideBarLayout';
import { IProjectCategories, IYear, Subject } from '../../../types';
import OverlayMenu from './OverlayMenu';
import BasicText from '../global/text/BasicText';
import OverlayMenuButton from '../global/buttons/OverlayMenuButton';

interface IProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  setIsAnimate: Dispatch<SetStateAction<boolean>>;
  projectCategories: IProjectCategories[];
  setYearSelected: Dispatch<SetStateAction<number | null>>;
  subjects: Subject[];
  years: IYear[];
  setCategorySelected: Dispatch<SetStateAction<string | null>>;
  yearSelected: number | null;
  categorySelected: string | null;
}

function SideBar({
  setIsAnimate,
  searchTerm,
  setSearchTerm,
  setCategorySelected,
  setYearSelected,
  projectCategories,
  subjects,
  yearSelected,
  categorySelected,
  years,
}: IProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  const { projectSelectedSuject, setProjectSelectedSubject } =
    useProjectSelectedSubjectFromStore();

  useEffect(() => {
    if (projectSelectedSuject) {
      setSelected('Subjects');
    }
  }, [projectSelectedSuject]);

  return (
    <SideBarLayout
      setSearchTerm={setSearchTerm}
      searchTerm={searchTerm}
      setIsAnimate={setIsAnimate}
    >
      <div>
        <div className="flex flex-wrap  text-xs uppercase mt-10">
          {categorySelected && <p>{categorySelected}&nbsp;/ &nbsp;</p>}
          {projectSelectedSuject && (
            <p>{projectSelectedSuject}&nbsp;/ &nbsp;</p>
          )}
          {yearSelected && <p>{yearSelected}</p>}
        </div>
        {categorySelected || projectSelectedSuject || yearSelected ? (
          <button
            onClick={() => {
              setCategorySelected(null);
              setYearSelected(null);
              setProjectSelectedSubject(null);
            }}
            type="button"
            className=" text-sm "
          >
            {selectedLanguage === 'Fr'
              ? 'Effacer les filtres'
              : 'Remove filters'}
          </button>
        ) : null}
      </div>
      <div className="mt-5 flex flex-col lg:space-y-5">
        <OverlayMenu
          nameEn="Categories"
          nameFr="Catégories"
          isOpen={selected}
          setIsOpen={setSelected}
          height="100px"
        >
          {projectCategories.map((item) => (
            <OverlayMenuButton
              key={item._id}
              onClick={() => {
                if (categorySelected === item.titleFr) {
                  setCategorySelected(null);
                } else {
                  setCategorySelected(item.titleFr);
                }
              }}
            >
              <BasicText
                className={`uppercase  hover:underline transform duration-300 pb-1 text-sm ${
                  categorySelected === item.titleFr ? 'font-bold' : 'font-light'
                }`}
                contentEn={item.titleEn}
                contentFr={item.titleFr}
              />
            </OverlayMenuButton>
          ))}
        </OverlayMenu>
        <OverlayMenu
          nameEn="Subjects"
          nameFr="Sujets"
          isOpen={selected}
          setIsOpen={setSelected}
        >
          {subjects.map((item) => (
            <OverlayMenuButton
              key={item._id}
              onClick={() => {
                if (projectSelectedSuject === item.titleFr) {
                  setProjectSelectedSubject(null);
                } else {
                  setProjectSelectedSubject(item.titleFr);
                }
              }}
            >
              <BasicText
                className={`uppercase hover:underline transform duration-300 pb-1 text-sm ${
                  projectSelectedSuject === item.titleFr
                    ? 'font-bold'
                    : 'font-light'
                }`}
                contentEn={item.titleEn}
                contentFr={item.titleFr}
              />
            </OverlayMenuButton>
          ))}
        </OverlayMenu>
        <OverlayMenu
          nameEn="Years"
          nameFr="Années"
          isOpen={selected}
          setIsOpen={setSelected}
          height="90px"
        >
          {years.map((item) => (
            <OverlayMenuButton
              onClick={() => {
                if (yearSelected === item.year) {
                  setYearSelected(null);
                } else {
                  setYearSelected(item.year);
                }
              }}
              key={item._id}
            >
              <BasicText
                className={`uppercase  hover:underline transform duration-300 pb-1 text-sm ${
                  yearSelected === item.year ? 'font-bold' : 'font-light'
                }`}
                contentEn={item.year.toString()}
                contentFr={item.year.toString()}
              />
            </OverlayMenuButton>
          ))}
        </OverlayMenu>
      </div>
    </SideBarLayout>
  );
}

export default SideBar;
