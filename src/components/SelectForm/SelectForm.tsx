import { useRecoilState } from 'recoil';

import { RandomSelect } from '~/assets';
import { TypeInfomation } from '~/components';
import { ComputerTypeState, PlayerTypeState } from '~/stores/SelectTypeState';
import { ThreeTypes } from '~/types';

import * as S from './SelectForm.styled';

const SelectForm = () => {
  const [playerType, setPlayerType] = useRecoilState(PlayerTypeState);
  const [computerType, setComputerType] = useRecoilState(ComputerTypeState);

  const handleSelect = (type: ThreeTypes) => {
    setPlayerType(type);
    setComputerType(RandomSelect());
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
