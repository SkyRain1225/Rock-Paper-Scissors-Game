import { useRecoilValue } from 'recoil';

import { ScoreBoard, SelectForm, TypeInfomation } from '~/components';
import { ComputerTypeState, PlayerTypeState } from '~/stores/SelectTypeState';

import * as S from './Main.styled';

const Main = () => {
  const playerType = useRecoilValue(PlayerTypeState);
  const computerType = useRecoilValue(ComputerTypeState);

  return (
    <S.Container>
      <S.Form>
        <p>Player</p>
        {playerType ? <TypeInfomation type={playerType} /> : <TypeInfomation />}
        <SelectForm />
      </S.Form>
      <ScoreBoard />
      <S.Form>
        <p>Computer</p>
        {computerType ? <TypeInfomation type={computerType} /> : <TypeInfomation />}
      </S.Form>
    </S.Container>
  );
};

export default Main;
