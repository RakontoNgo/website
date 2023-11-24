/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React, { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SubmitButton from '../global/buttons/SubmitButton';
import BasicText from '../global/text/BasicText';
import LinkButton from '../global/buttons/LinkButton';

function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);
  const [formStatus, setFormStatus] = useState('inProgress');

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('Loading');

    if (form.current)
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE as string,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
        )
        .then(
          () => {
            setFormStatus('validate');
          },
          () => {
            setFormStatus('error');
          }
        );
  };
  return (
    <div className="w-11/12 lg:w-full">
      {formStatus === 'Loading' && (
        <BasicText
          contentEn="Sending..."
          contentFr="Envoi en cours..."
          className="animate-pulse mt-20"
        />
      )}
      {formStatus === 'validate' && (
        <div className=" w-full  pt-16">
          <BasicText
            contentFr="Merci pour votre message, notre équipe vous recontactera bientôt."
            contentEn="Thanks for your message, our team will back to you soon. "
          />
          <LinkButton
            className=" w-full lg:w-4/12 mt-5"
            link="/"
            textEn="Back home"
            textFr="Revenir à l'acceuil"
          />
        </div>
      )}
      {formStatus === 'error' && (
        <div className=" w-full  pt-16">
          <BasicText
            className="text-quaternary"
            contentFr="Oupss.. une erreur est survenu. Veuillez ressayer plus tard ou contacter notre équipe pour faire un rapport de l'incident."
            contentEn="Oops... an error has occurred. Please try again later or contact our team to report the incident."
          />
          <LinkButton
            className=" w-full lg:w-4/12 mt-5"
            link="/"
            textEn="Back home"
            textFr="Revenir à l'acceuil"
          />
        </div>
      )}
      {formStatus === 'inProgress' && (
        <form className="flex mt-10 flex-col" ref={form} onSubmit={sendEmail}>
          <div>
            <label className="flex flex-col font-josefin">
              Name
              <input
                className='"w-full border border-primary bg-transparent focus:outline-none px-3 py-2 mt-1 '
                type="text"
                name="user_name"
                required
              />
            </label>
          </div>
          <label className="flex mt-5 flex-col font-josefin">Email</label>
          <input
            required
            className='"w-full border border-primary bg-transparent focus:outline-none px-3 py-2 mt-1 '
            type="email"
            name="user_email"
          />
          <label className="flex mt-5 flex-col font-josefin">Message</label>
          <textarea
            rows={5}
            required
            className='"w-full border border-primary bg-transparent focus:outline-none px-3 py-2 mt-1 '
            name="message"
          />

          <SubmitButton
            nameEn="Send"
            nameFr="Envoyer"
            className="mt-5 w-full"
          />
        </form>
      )}
    </div>
  );
}

export default ContactForm;
