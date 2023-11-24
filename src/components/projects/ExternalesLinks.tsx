import React from 'react';
import { IExternalsLinks } from '../../../types';
import TextSmall from '../global/text/TextSmall';

interface IProps {
  links: IExternalsLinks[];
}

function ExternalesLinks({ links }: IProps) {
  return (
    <ul className="flex flex-col space-y-1">
      {links.map((link: IExternalsLinks) => (
        <li className="underline" key={link._id}>
          <a href={link.link} target="_blank">
            <TextSmall contentEn={link.titleEn} contentFr={link.titleFr} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ExternalesLinks;
