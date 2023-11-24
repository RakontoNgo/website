import React from 'react';
import { IFile } from '../../../types';
import TextSmall from '../global/text/TextSmall';

interface IProps {
  files: IFile[];
}

function Files({ files }: IProps) {
  return (
    <ul className="flex flex-col space-y-1">
      {files.map((item) => (
        <li key={item.title}>
          <a href={`${item.manuscriptURL}?dl=${item.titleEn}.pdf`}>
            <TextSmall
              className="underline"
              contentEn={item.titleEn}
              contentFr={item.title}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Files;
