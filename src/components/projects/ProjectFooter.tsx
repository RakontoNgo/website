'use client';

import React, { useEffect, useState } from 'react';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import Link from 'next/link';
import { IProject } from '../../../types';
import BasicText from '../global/text/BasicText';

interface IProps {
  project: IProject;
  allProjects: IProject[];
}

function ProjectFooter({ project, allProjects }: IProps) {
  const [nextProject, setNextProject] = useState<IProject>();
  const { selectedLanguage } = useSelectedLanguagesFromStore();

  useEffect(() => {
    let NextProjectIndex = -1;

    for (let i = 0; i < allProjects.length; i += 1) {
      if (project._id === allProjects[i]._id) {
        NextProjectIndex = i;
        break;
      }
    }

    if (NextProjectIndex < allProjects.length) {
      setNextProject(allProjects[NextProjectIndex + 1]);
    }
  }, [allProjects, project._id]);

  return (
    <div className="w-full mb-10 font-josefin mt-10 lg:mt-20 mx-auto  uppercase font-benchnine flex flex-col lg:flex-row lg:flex-wrap lg:justify-between lg:items-center">
      {project.subjects && (
        <ul className="flex flex-col lg:flex-row  w-full lg:space-x-2 mb-3 text-[14px] lg:text-[20px] lg:mb-0 opacity-50">
          {project.subjects?.map((c) => (
            <li key={c._id} className="flex">
              <BasicText
                contentEn={c.titleEn}
                contentFr={c.titleFr}
                className="mr-2"
              />{' '}
              |
            </li>
          ))}
        </ul>
      )}
      {nextProject && (
        <Link href={`/Projects/${nextProject.slug.current}`}>
          <p className=" text-primary text-[18px] mt-10 lg:mt-0 lg:text-[20px]">
            {selectedLanguage === 'Fr'
              ? 'PROJET SUIVANT : '
              : 'NEXT PROJECT : '}
            <span className="uppercase underline font-benchnine ">
              {selectedLanguage === 'Fr'
                ? nextProject.title
                : nextProject.titleEn}
            </span>
          </p>
        </Link>
      )}
    </div>
  );
}

export default ProjectFooter;
