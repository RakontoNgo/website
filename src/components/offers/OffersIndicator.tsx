'use client';

import scrollToSection from '@/utils/scrollToSection';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import { IOffer } from '../../../types';

interface IProps {
  offersArray: IOffer[];
  currentVisibleOfferId: string | null;
}

function OffersIndicator({ offersArray, currentVisibleOfferId }: IProps) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();

  const ItemArrayPosition = (index: number) => {
    if (index + 1 >= 10 && index + 1 <= 99) {
      return `${index + 1} - `;
    }
    return `0${index + 1} - `;
  };

  return (
    <div className=" hidden fixed bottom-20 right-10 lg:flex flex-col space-y-1 font-josefin">
      {offersArray.map((item, index) => (
        <button
          onClick={() => scrollToSection(item._id, 50)}
          type="button"
          key={item._id}
          className="text-primary font-bold"
          style={{
            opacity: currentVisibleOfferId === item._id ? '1' : '0.8',
          }}
        >
          <div className="flex items-center">
            <p>{ItemArrayPosition(index)}</p>
            <p>{selectedLanguage === 'Fr' ? item.title : item.titleEn}</p>
          </div>
        </button>
      ))}
    </div>
  );
}

export default OffersIndicator;
