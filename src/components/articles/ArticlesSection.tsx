'use client';

import React, { useEffect, useState } from 'react';
import handleAnimate from '@/utils/handleAnimate';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import { Article, ISubject } from '../../../types';
import SideBar from './SideBar';
import H1 from '../global/text/H1';
import ArticleCard from './ArticleCard';
import SectionContainer from '../global/SectionContainer';

interface IProps {
  subjects: ISubject[];
  articles: Article[];
}

function ArticlesSection({ subjects, articles }: IProps) {
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [articlesList, setArticlesList] = useState<Article[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAnimate, setIsAnimate] = useState(false);
  const { selectedLanguage } = useSelectedLanguagesFromStore();

  useEffect(() => {
    if (selectedSubject === 'All' || selectedSubject === 'Tous') {
      setArticlesList(articles);
    } else {
      const newArticleList = [];
      for (let i = 0; i < articles.length; i += 1) {
        const postCategory = articles[i].subjects.filter(
          (c) => c.titleEn === selectedSubject || c.titleFr === selectedSubject
        );

        if (postCategory.length > 0) {
          newArticleList.push(articles[i]);
        }
      }

      setArticlesList(newArticleList);
    }
    handleAnimate(setIsAnimate);
  }, [selectedSubject, articles]);

  const filteredData = articlesList.filter((item) => {
    if (selectedLanguage === 'Fr') {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return item.titleEn.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <SectionContainer className=" w-full pt-20 font-josefin">
      <H1 contentEn="Our Articles" contentFr="Nos Articles" />
      <div className="flex flex-col lg:flex-row lg:mt-5">
        <SideBar
          setIsAnimate={setIsAnimate}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedSubject={selectedSubject}
          setSelectedSubject={setSelectedSubject}
          subjects={subjects}
        />

        {isAnimate && (
          <div className="animate-fadeIn lg:w-10/12">
            {filteredData.length === 0 ? (
              <p className="mt-5 text-xl">Sorry, no articles found...</p>
            ) : (
              <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-start gap-10 mt-5 mb-10">
                {filteredData.map((item) => (
                  <li key={item._id}>
                    <ArticleCard item={item} />
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

export default ArticlesSection;
