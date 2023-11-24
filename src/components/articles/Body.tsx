'use client';

import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import { PortableText } from '@portabletext/react';
import React from 'react';
import RichTextComponents from '../global/text/RichTextComponent';
import { Block } from '../../../types';

function Body({ blockEn, blockFr }: { blockEn: Block[]; blockFr: Block[] }) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();

  return (
    <div className="mt-5 font-josefin">
      <PortableText
        value={selectedLanguage === 'Fr' ? blockFr : blockEn}
        components={RichTextComponents}
      />
    </div>
  );
}

export default Body;
