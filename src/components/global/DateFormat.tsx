import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import React from 'react';

function DateFormat({ date }: { date: string }) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  return (
    <div>
      {selectedLanguage === 'Fr' ? (
        <p>
          {new Date(date).toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>
      ) : (
        <p>
          {new Date(date).toLocaleDateString('en-En', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>
      )}
    </div>
  );
}

export default DateFormat;
