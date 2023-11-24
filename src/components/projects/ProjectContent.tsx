'use client';

import { IProject } from '../../../types';
import ProjectSection from './ProjectSection';

interface IProps {
  project: IProject;
}

function ProjectContent({ project }: IProps) {
  return (
    <div>
      {project.content && (
        <ul className="flex flex-col space-y-10">
          {project.content.map((item) => (
            <li
              key={item.title}
              className="border-b border-primary"
              id={item._key}
            >
              <ProjectSection item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProjectContent;
