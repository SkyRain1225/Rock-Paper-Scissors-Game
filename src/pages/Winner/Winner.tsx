import { useNavigate } from 'react-router-dom';

import win from '~/assets/images/win.png';

import * as S from './Winner.styled';

const Winner = () => {
  return (
    <S.Container>
      <S.Image src={win} />
      <div>
        <p className="header_text">축하합니다!</p>
        <p className="sub_text">가위 바위 보 게임에서 승리하셨습니다.</p>
        <button onClick={() => window.location.reload()}>다시하기</button>
      </div>
    </S.Container>
  );
};

export default Winner;
