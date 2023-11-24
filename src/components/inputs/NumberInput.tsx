/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent } from 'react';

interface IProps {
  value: string | number | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name: string;
  required: boolean;
}

function NumberInput({ value, onChange, name, required }: IProps) {
  return (
    <label htmlFor={name}>
      {name}

      <input
        type="number"
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        min="1"
        max="2000"
        required={required}
      />
    </label>
  );
}

export default NumberInput;
