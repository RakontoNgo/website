'use client';

import React, { useState, useEffect } from 'react';
import H1 from '../global/text/H1';

interface IProps {
  targetValue: number;
  animationDuration: number;
}

function NumberAnimation({ targetValue, animationDuration }: IProps) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let interval: any;

    if (currentValue < targetValue) {
      interval = setInterval(() => {
        setCurrentValue((prevValue) => prevValue + 1);
      }, animationDuration);
    }

    return () => {
      clearInterval(interval);
    };
  }, [animationDuration, currentValue, targetValue]);

  return (
    <H1
      textColor="text-white mt-10 font-bold text-center"
      contentEn={`${currentValue}`}
      contentFr={`${currentValue}`}
    />
  );
}

export default NumberAnimation;
