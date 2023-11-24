'use client';

import HoverFadeEffect from '../animated/HoverFadeEffect';
import BasicText from '../global/text/BasicText';
import { IProject } from '../../../types';
import urlForImage from '../../../sanity/lib/image';
import TextUppercase from '../global/text/TextUppercase';
import TextSmall from '../global/text/TextSmall';

function ProjectCard({ item }: { item: IProject }) {
  return (
    <div className="w-full">
      {' '}
      <HoverFadeEffect
        link={`/projects/${item.slug.current}`}
        className="h-96  lg:h-[30rem] text-textColor"
        itemId={item._id}
        backgroundImage={urlForImage(item.mainImage?.asset).url()}
        altImage={item.mainImage.alt ? item.mainImage.alt : 'unknow image'}
      >
        <BasicText contentEn={item.titleEn} contentFr={item.title} />
      </HoverFadeEffect>
      <div className="mt-5 text-primary border-b border-primary pb-2 ">
        <TextUppercase contentEn={item.titleEn} contentFr={item.title} />
        <div className="flex justify-between mt-2">
          <ul className="flex flex-wrap">
            {item.subjects?.map((sub) => (
              <li className="flex" key={sub._id}>
                <TextSmall contentEn={sub.titleEn} contentFr={sub.titleFr} />{' '}
                <span className="mx-2">|</span>
              </li>
            ))}
            {item.categories?.map((cat) => (
              <li className="flex" key={cat._id}>
                <TextSmall contentEn={cat.titleEn} contentFr={cat.titleFr} />{' '}
                <span className="mx-2">|</span>
              </li>
            ))}
          </ul>

          <TextSmall
            contentEn={item.projectYear.year.toString()}
            contentFr={item.projectYear.year.toString()}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
