import { Dispatch, SetStateAction } from 'react';

const handleAnimate = (setIsAnimate: Dispatch<SetStateAction<boolean>>) => {
  setIsAnimate(false);
  setTimeout(() => {
    setIsAnimate(true);
  }, 10);
};

export default handleAnimate;
