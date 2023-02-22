import { useEffect, useState } from 'react';

import { Paper, Rock, Scissors } from '~/assets';
import { ThreeTypes } from '~/types/types';

import * as S from './TypeInformation.styled';

const TYPE = ['rock', 'paper', 'scissors'] as const;

const TypeInformation = ({ type, size }: { type?: ThreeTypes; size?: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (type) return;

    setTimeout(() => {
      count === 2 ? setCount(0) : setCount(count + 1);
    }, 300);
  }, [count, type]);

  // const [isAnimate, setIsAnimate] = useState<ThreeTypes>(TYPE[0]);

  // const changeType = (type: ThreeTypes) => {
  //   const index = TYPE.indexOf(type);
  //   timeoutHandler = setTimeout(() => {
  //     const changeValue = index === 2 ? TYPE[0] : TYPE[index + 1];
  //     setIsAnimate(changeValue);
  //     changeType(changeValue);
  //   }, 300);
  // };

  return (
    <S.Container size={size} className={type || TYPE[count]}>
      <img src={Paper} alt="paper-image" className="Paper" />
      <img src={Rock} alt="rock-image" className="Rock" />
      <img src={Scissors} alt="scissors-image" className="Scissors" />
    </S.Container>
  );
};

export default TypeInformation;
