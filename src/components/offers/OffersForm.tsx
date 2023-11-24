/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { useSelectedLanguagesFromStore } from '@/store/selectedLanguages.slice';
import { PhoneInput } from 'react-international-phone';
import { IMondayClmnArray } from '../../../types';
import TextInput from '../inputs/TextInput';
import TextAreaInput from '../inputs/TextAreaInput';
import EmailInput from '../inputs/EmailInput';
import SelectInput from '../inputs/SelectInput';
import NumberInput from '../inputs/NumberInput';

import DateInput from '../inputs/DateInput';
import BasicText from '../global/text/BasicText';
import LinkButton from '../global/buttons/LinkButton';
import 'react-international-phone/style.css';
import SubmitButton from '../global/buttons/SubmitButton';

function OffersForm({ mondayBoard }: { mondayBoard: any }) {
  const { selectedLanguage } = useSelectedLanguagesFromStore();
  const apiKey = process.env.NEXT_PUBLIC_MONDAY_API_KEY as string;
  const apiUrl = process.env.NEXT_PUBLIC_MONDAY_API_URL as string;
  const [userName, setUserName] = useState('');
  const [userFirstName, setUserFirstName] = useState('');
  const [formStatus, setFormStatus] = useState('inProgress');

  const [formInputs, setFormInputs] = useState<IMondayClmnArray[]>([]);

  useEffect(() => {
    // Créez une copie des colonnes de mondayBoard avec la propriété "value"
    const filterFormInput = mondayBoard.columns.filter(
      (el: IMondayClmnArray) => el.title.toLowerCase() !== 'name'
    );

    const updatedFormInputs = filterFormInput.map(
      (element: IMondayClmnArray) => ({ ...element, value: '' })
    );

    setFormInputs(updatedFormInputs);

    if (formInputs.length < 0) {
      setFormStatus('error');
    }
  }, []);

  // console.log(mondayBoard.id);

  const handleInputChange = (e: string | number, id: string) => {
    const updatedFormInputs = formInputs.map((colmn) => {
      if (colmn.id === id) {
        return { ...colmn, value: e };
      }
      return colmn;
    });

    setFormInputs(updatedFormInputs);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Supprimez l'élément avec l'id "name" du tableau
    const filteredFormInputs = formInputs.filter(
      (colmn) => colmn.id !== 'name'
    );

    // Utilisez reduce pour créer l'objet souhaité
    const resultObject: Record<string, string> = filteredFormInputs.reduce(
      (acc: any, colmn) => {
        acc[colmn.id] = colmn.value || '';
        return acc;
      },
      {}
    );

    const body = {
      query: `
      mutation ($boardId: Int!, $itemName: String!, $columnValues: JSON!) {
        create_item (
          board_id: $boardId,
          item_name: $itemName,
          column_values: $columnValues
        ) {
          id
        }
      }
      `,
      variables: {
        boardId: parseInt(mondayBoard.id, 10),
        itemName: `${userFirstName} ${userName}`,
        columnValues: JSON.stringify(resultObject),
      },
    };

    try {
      axios
        .post(apiUrl, body, {
          headers: {
            Authorization: apiKey,
          },
        })
        .catch(() => {
          setFormStatus('error');
        })
        .then(() => {
          setFormStatus('validate');
        });
    } catch (error) {
      console.error(
        "Erreur lors de la création de l'élément dans Monday.com",
        error
      );
      setFormStatus('error');
    }
  };

  return (
    <div className="w-full">
      {formStatus === 'validate' && (
        <div className=" w-full  pt-16">
          <BasicText
            contentFr="Merci pour votre demande, notre équipe vous recontactera bientôt pour les étapes suivantes."
            contentEn="Thanks for your apply, our team will back to you soon for the following steps. "
          />
          <LinkButton
            className=" w-full lg:w-4/12 mt-5"
            link="/offers"
            textEn="Back to the offers"
            textFr="Retour vers les offres"
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
            link="/contact"
            textEn="Contact us"
            textFr="Contactez nous"
          />
        </div>
      )}
      {formStatus === 'inProgress' && formInputs.length > 0 && (
        <form
          className="w-full  py-10 lg:pr-10 flex flex-col space-y-5"
          onSubmit={handleSubmit}
        >
          <TextInput
            value={userFirstName}
            name={selectedLanguage === 'Fr' ? 'Prénoms' : 'Firstname'}
            onChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => setUserFirstName(e.target.value)}
            required
          />
          <TextInput
            value={userName}
            name={selectedLanguage === 'Fr' ? 'Noms' : 'LastName'}
            onChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => setUserName(e.target.value)}
            required
          />

          {formInputs.map((colmn) => (
            <div key={colmn.id}>
              {(colmn.type === 'text' &&
                colmn.title.toLowerCase() === 'email') ||
                (colmn.title.toLowerCase() === '*email' && (
                  <EmailInput
                    value={colmn.value}
                    name={colmn.title}
                    onChange={(
                      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                    ) => handleInputChange(e.target.value, colmn.id)}
                    required={colmn.title.split('')[0] === '*'}
                  />
                ))}
              {colmn.type === 'text' &&
                colmn.title.toLowerCase() !== 'email' &&
                colmn.title.toLowerCase() !== '*email' &&
                colmn.title.toLowerCase() !== 'phone number' &&
                colmn.title.toLowerCase() !== '*phone number' && (
                  <TextAreaInput
                    value={colmn.value}
                    name={colmn.title}
                    onChange={(
                      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                    ) => handleInputChange(e.target.value, colmn.id)}
                    required={colmn.title.split('')[0] === '*'}
                  />
                )}
              {colmn.type === 'color' && (
                <SelectInput
                  name={colmn.title}
                  options={Object.values(JSON.parse(colmn.settings_str).labels)}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    handleInputChange(e.target.value, colmn.id)
                  }
                  required={colmn.title.split('')[0] === '*'}
                />
              )}
              {(colmn.type === 'numeric' &&
                colmn.title.toLowerCase() !== 'phone number') ||
                (colmn.type === 'numeric' &&
                  colmn.title.toLowerCase() !== '*phone number' && (
                    <NumberInput
                      name={colmn.title}
                      value={colmn.value}
                      onChange={(
                        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                      ) => handleInputChange(e.target.value, colmn.id)}
                      required={colmn.title.split('')[0] === '*'}
                    />
                  ))}
              {(colmn.type === 'text' &&
                colmn.title.toLowerCase() === 'phone number') ||
                (colmn.type === 'text' &&
                  colmn.title.toLowerCase() === '*phone number' && (
                    <div>
                      <label className="flex flex-col font-josefin">
                        {colmn.title}
                      </label>
                      <PhoneInput
                        defaultCountry="fr"
                        value={colmn.value as string}
                        onChange={(phone) => {
                          handleInputChange(phone, colmn.id);
                        }}
                        inputStyle={{
                          border: '1px solid #13795F',
                          borderRadius: '1px',
                          background: 'transparent',
                          color: '#13795F',
                        }}
                        countrySelectorStyleProps={{
                          buttonStyle: {
                            border: '1px solid #13795F',
                            borderRadius: '1px',
                            background: 'transparent',
                            color: '#13795F',
                          },
                        }}
                      />
                    </div>
                  ))}
              {colmn.type === 'date' && (
                <DateInput
                  name={colmn.title}
                  onChange={(e) => handleInputChange(e.target.value, colmn.id)}
                  required={colmn.title.split('')[0] === '*'}
                />
              )}
            </div>
          ))}

          <SubmitButton nameEn="Apply" nameFr="Postuler" />
        </form>
      )}
    </div>
  );
}

export default OffersForm;
