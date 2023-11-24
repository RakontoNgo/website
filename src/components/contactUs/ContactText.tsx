import React from 'react';
import { IContactInfos } from '../../../types';
import H1 from '../global/text/H1';
import BasicText from '../global/text/BasicText';

interface IProps {
  contactInfos: IContactInfos;
}

function ContactText({ contactInfos }: IProps) {
  return (
    <div>
      <H1
        contentEn={contactInfos.contactPageTitleEn}
        contentFr={contactInfos.contactPageTitleFr}
      />
      <BasicText
        className="mt-5"
        contentEn={contactInfos.contactPageTextEn}
        contentFr={contactInfos.contactPageTextFr}
      />
    </div>
  );
}

export default ContactText;
