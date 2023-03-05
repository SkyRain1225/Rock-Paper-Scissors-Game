import { useRecoilValue } from 'recoil';

import { ScoreState } from '~/stores/SelectTypeState';

import * as S from './ScoreBoard.styled';

const ScoreBoard = () => {
  const score = useRecoilValue(ScoreState);

  return <S.Container>{score} 연승</S.Container>;
};

export default ScoreBoard;
