import { TypeInfomation } from '~/components';

import * as S from './SelectForm.styled';

const SelectForm = () => {
  return (
    <S.Container>
      <TypeInfomation type="rock" size />
      <TypeInfomation type="paper" size />
      <TypeInfomation type="scissors" size />
    </S.Container>
  );
};

export default SelectForm;
