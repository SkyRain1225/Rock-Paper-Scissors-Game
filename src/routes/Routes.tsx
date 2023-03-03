import { useRoutes } from 'react-router-dom';

import { Main } from '~/pages';

export const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Main />,
    },
  ]);

  return routes;
};
