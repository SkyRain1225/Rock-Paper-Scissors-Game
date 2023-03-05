import { useEffect } from 'react';

import { useRecoilState } from 'recoil';

import { RandomSelect, ResultReader } from '~/assets';
import { TypeInfomation } from '~/components';
import {
  BeforeResultState,
  ComputerTypeState,
  PlayerTypeState,
  ScoreState,
} from '~/stores/SelectTypeState';
import { ThreeTypes } from '~/types';

import * as S from './SelectForm.styled';

const SelectForm = () => {
  const [playerType, setPlayerType] = useRecoilState(PlayerTypeState);
  const [computerType, setComputerType] = useRecoilState(ComputerTypeState);
  const [beforeResult, setBeforeResult] = useRecoilState(BeforeResultState);
  const [score, setScore] = useRecoilState(ScoreState);

  const handleSelect = async (type: ThreeTypes) => {
    setPlayerType(type);
    setComputerType(RandomSelect());
  };

  useEffect(() => {
    if (playerType && computerType) {
      const getResult = async () => {
        const result = await ResultReader(playerType, computerType);
        setBeforeResult(result);

        if (beforeResult === 'win' && result === 'win') {
          setBeforeResult('win');
          setScore(prev => prev + 1);
        } else if (beforeResult === 'win' && result === 'lose') {
          setBeforeResult('lose');
          setScore(0);
        } else if (beforeResult === 'lose' && result === 'win') {
          setBeforeResult('win');
          setScore(1);
        }
      };
      getResult();
    }
  }, [computerType]);

  return (
    <S.Container>
      <div onClick={() => handleSelect('rock')}>
        <TypeInfomation type="rock" smallSize />
      </div>
      <div onClick={() => handleSelect('paper')}>
        <TypeInfomation type="paper" smallSize />
      </div>
      <div onClick={() => handleSelect('scissors')}>
        <TypeInfomation type="scissors" smallSize />
      </div>
    </S.Container>
  );
};

export default SelectForm;
