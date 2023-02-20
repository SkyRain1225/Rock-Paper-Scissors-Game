import { Paper, Rock, Scissors } from '~/assets';

import * as S from './HelloWorld.styled';

const HelloWorld = () => {
  return (
    <S.Container>
      가위 바위 보
      <img src={Rock} alt="rock-image" />
      <img src={Paper} alt="paper-image" />
      <img src={Scissors} alt="scissors-image" />
    </S.Container>
  );
};

export default HelloWorld;
