import { useRecoilValue } from 'recoil';

import { BeforeResultState } from '~/stores/SelectTypeState';

import * as S from './ScoreBoard.styled';

const ScoreBoard = () => {
  const beforeResult = useRecoilValue(BeforeResultState);

  return <S.Container>0 연승</S.Container>;
};

export default ScoreBoard;
