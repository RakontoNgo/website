'use client';

import React from 'react';
import BasicText from '../text/BasicText';
import LinkButton from '../buttons/LinkButton';

function ErrorMessage() {
  return (
    <div className=" w-full  pt-16 px-5">
      <BasicText
        className="text-quaternary"
        contentFr="Oupss.. une erreur est survenu. Veuillez ressayer plus tard ou contacter notre équipe pour faire un rapport de l'incident."
        contentEn="Oops... an error has occurred. Please try again later or contact our team to report the incident."
      />
      <LinkButton
        className=" w-full lg:w-4/12 mt-5"
        link="/contact"
        textEn="Contact us"
        textFr="Contactez nous"
      />
    </div>
  );
}

export default ErrorMessage;
