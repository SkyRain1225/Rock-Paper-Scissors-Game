import { SelectForm, TypeInfomation } from '~/components';

import * as S from './Main.styled';

const Main = () => {
  return (
    <S.Container>
      <S.Form>
        <p>Player</p>
        <TypeInfomation />
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
