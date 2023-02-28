import { useRecoilValue } from 'recoil';

import { SelectForm, TypeInfomation } from '~/components';
import { SelectTypeState } from '~/stores/SelectTypeState';

import * as S from './Main.styled';

const Main = () => {
  const type = useRecoilValue(SelectTypeState);

  return (
    <S.Container>
      <S.Form>
        <p>Player</p>
        {type ? <TypeInfomation type={type} /> : <TypeInfomation />}
        <SelectForm />
      </S.Form>

      <S.Form>
        <p>Computer</p>
        <TypeInfomation />
      </S.Form>
    </S.Container>
  );
};

export default Main;
