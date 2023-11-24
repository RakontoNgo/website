/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent } from 'react';

interface IProps {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  options: string[];
  required: boolean;
}

function SelectInput({ onChange, options, name, required }: IProps) {
  return (
    <div className="flex flex-col font-josefin">
      <label htmlFor="pet-select">{name}</label>

      <select
        className="w-full border border-primary bg-transparent focus:outline-none px-3 py-2 mt-1"
        required={required}
        onChange={onChange}
        name="pets"
        id="pet-select"
      >
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
