import { useEffect, useState } from 'react';

import { Paper, Rock, Scissors } from '~/assets';
import { Props } from '~/types';

import * as S from './TypeInformation.styled';

const TYPE = ['rock', 'paper', 'scissors'] as const;

const TypeInformation = ({ type, smallSize }: Props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (type) return;

    setTimeout(() => {
      count === 2 ? setCount(0) : setCount(count + 1);
    }, 300);
  }, [count, type]);

  return (
    <S.Container smallSize={smallSize} className={type || TYPE[count]}>
      <img src={Paper} alt="paper-image" className="Paper" />
      <img src={Rock} alt="rock-image" className="Rock" />
      <img src={Scissors} alt="scissors-image" className="Scissors" />
    </S.Container>
  );
};

export default TypeInformation;
