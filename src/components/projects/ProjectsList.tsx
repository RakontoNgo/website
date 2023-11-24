'use client';

import React, { useEffect, useState } from 'react';
import handleAnimate from '@/utils/handleAnimate';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import { useProjectSelectedSubjectFromStore } from '@/store/projectSubjectSelected';
import SideBar from './SideBar';
import { IProject, IProjectCategories, IYear, Subject } from '../../../types';
import ProjectCard from './ProjectCard';
import SectionContainer from '../global/SectionContainer';

interface IProps {
  projectCategories: IProjectCategories[];
  subjects: Subject[];
  years: IYear[];
  projects: IProject[];
}

function ProjectsList({
  projectCategories,
  subjects,
  years,
  projects,
}: IProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAnimate, setIsAnimate] = useState(false);
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  const [projectsList, setProjectList] = useState(projects);
  const [categorySelected, setCategorySelected] = useState<string | null>(null);
  const [yearSelected, setYearSelected] = useState<number | null>(null);
  const { projectSelectedSuject } = useProjectSelectedSubjectFromStore();

  useEffect(() => {
    handleAnimate(setIsAnimate);
    let filteredData = projects;
    if (categorySelected) {
      filteredData = projects.filter(
        (item) =>
          item.categories?.some(
            (category) => category.titleFr === categorySelected
          )
      );
    }

    if (yearSelected) {
      filteredData = projects.filter(
        (item) => item.projectYear.year === yearSelected
      );
    }

    if (projectSelectedSuject) {
      filteredData = projects.filter(
        (item) =>
          item.subjects?.some(
            (subject) => subject.titleFr === projectSelectedSuject
          )
      );
    }

    setProjectList(filteredData);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorySelected, projectSelectedSuject, yearSelected]);

  const filteredData = projectsList.filter((item) => {
    if (selectedLanguage === 'Fr') {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return item.titleEn.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <SectionContainer className="w-full pt-20 font-josefin">
      <div className="flex flex-col lg:flex-row">
        <SideBar
          setIsAnimate={setIsAnimate}
          setCategorySelected={setCategorySelected}
          searchTerm={searchTerm}
          categorySelected={categorySelected}
          yearSelected={yearSelected}
          setSearchTerm={setSearchTerm}
          projectCategories={projectCategories}
          subjects={subjects}
          setYearSelected={setYearSelected}
          years={years}
        />
        {isAnimate && (
          <div className="w-full animate-fadeIn lg:w-10/12 ">
            {filteredData.length === 0 ? (
              <p className="mt-5 text-xl">Sorry, no articles found...</p>
            ) : (
              <ul className=" grid grid-cols-1 md:grid-cols-2 items-start gap-10 mt-5 mb-10">
                {filteredData.map((item) => (
                  <li key={item._id} className="w-full">
                    <ProjectCard item={item} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </SectionContainer>
  );
}

export default ProjectsList;
