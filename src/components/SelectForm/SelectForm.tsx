import { useEffect } from 'react';

import { useRecoilState } from 'recoil';

import { RandomSelect, ResultReader } from '~/assets';
import { TypeInfomation } from '~/components';
import { ComputerTypeState, PlayerTypeState, ScoreState } from '~/stores/SelectTypeState';
import { ThreeTypes } from '~/types';

import * as S from './SelectForm.styled';

const SelectForm = () => {
  const [playerType, setPlayerType] = useRecoilState(PlayerTypeState);
  const [computerType, setComputerType] = useRecoilState(ComputerTypeState);
  const [score, setScore] = useRecoilState(ScoreState);

  const handleSelect = async (type: ThreeTypes) => {
    setPlayerType(type);
    setComputerType(RandomSelect());
  };

  useEffect(() => {
    const updateScore = async () => {
      if (playerType && computerType) {
        const result = await ResultReader(playerType, computerType);

        result === 'win' && setScore(score + 1);
        result === 'lose' && setScore(0);
      }
    };

    updateScore();
  }, [playerType, computerType]);

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
