import { useRecoilValue } from 'recoil';

import { SelectForm, TypeInfomation } from '~/components';
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

      <S.Form>
        <p>Computer</p>
        {computerType ? <TypeInfomation type={computerType} /> : <TypeInfomation />}
      </S.Form>
    </S.Container>
  );
};

export default Main;
