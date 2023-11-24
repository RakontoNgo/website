import React from 'react';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import { Article } from '../../../types';
import HoverFadeEffect from '../animated/HoverFadeEffect';
import urlForImage from '../../../sanity/lib/image';
import DateFormat from '../global/DateFormat';
import TextUppercase from '../global/text/TextUppercase';
import TextSmall from '../global/text/TextSmall';
import LinkButton from '../global/buttons/LinkButton';

function ArticleCard({ item }: { item: Article }) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();

  return (
    <div className="w-full">
      <HoverFadeEffect
        link={`/articles/${item.slug.current}`}
        className="h-96  lg:h-[30rem] text-textColor"
        itemId={item._id}
        backgroundImage={urlForImage(item.mainImage.asset).url()}
        altImage={item.mainImage.alt ? item.mainImage.alt : item.title}
      >
        <div className=" flex flex-col items-center justify-center">
          <p className="font-josefin">
            {selectedLanguage === 'Fr' ? item.title : item.titleEn}
          </p>

          <div className="w-full flex flex-col mt-5 justify-center items-center  font-josefin opacity-60  text-sm lg:text-base">
            <div className="flex items-center justify-center flex-wrap">
              {item.subjects.map((subject) => (
                <p key={subject._id}>
                  {selectedLanguage === 'Fr'
                    ? subject.titleFr
                    : subject.titleEn}{' '}
                  |&nbsp;
                </p>
              ))}
            </div>
            <DateFormat date={item.publishedAt} />
          </div>
        </div>
      </HoverFadeEffect>

      <TextUppercase
        className="mt-3"
        contentEn={item.titleEn}
        contentFr={item.title}
      />
      <div className="w-8/12 h-[1px] bg-primary my-2" />
      <TextSmall
        className="line-clamp-2 opacity-70"
        contentEn={item.descriptionEN}
        contentFr={item.descriptionFR}
      />
      <LinkButton
        link={`/articles/${item.slug.current}`}
        className="w-[130px] mt-3 text-sm"
        textEn="Read article"
        textFr={`Lire l'article`}
      />
    </div>
  );
}

export default ArticleCard;
