/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent } from 'react';

interface IProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name: string;
  required: boolean;
}

function DateInput({ onChange, name, required }: IProps) {
  return (
    <label className="flex flex-col font-josefin" htmlFor="start">
      {name}

      <input
        className="w-full border border-primary bg-transparent focus:outline-none px-3 py-2 mt-1"
        required={required}
        onChange={onChange}
        type="date"
        id="start"
        name={name}
      />
    </label>
  );
}

export default DateInput;
