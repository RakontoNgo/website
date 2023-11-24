/* eslint-disable no-unused-vars */
import { ChangeEvent } from 'react';

interface IProps {
  value: string | number | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required: boolean;
  name: string;
}

function TextAreaInput({ value, onChange, name, required }: IProps) {
  return (
    <label className="flex flex-col font-josefin" htmlFor="textArea">
      {name}
      <textarea
        className='"w-full border border-primary bg-transparent focus:outline-none px-3 py-2 mt-1'
        name={name}
        value={value}
        rows={5}
        onChange={onChange}
        required={required}
      />
    </label>
  );
}

export default TextAreaInput;
