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

    const result = ResultReader(type, computerType!);
    if (result === 'win') {
      setScore(score + 1);
    } else if (result === 'lose') {
      setScore(0);
    } else {
      setScore(score);
    }
  };

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
