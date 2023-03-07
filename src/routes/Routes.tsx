import { useRoutes } from 'react-router-dom';

import { useRecoilValue } from 'recoil';

import { Main, Winner } from '~/pages';
import { ScoreState } from '~/stores/SelectTypeState';

export const Router = () => {
  const score = useRecoilValue(ScoreState);

  const routes = useRoutes([
    {
      path: '/',
      element: score === 3 ? <Winner /> : <Main />,
    },
  ]);

  return routes;
};
