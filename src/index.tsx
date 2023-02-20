import { Suspense } from 'react';
import ReactDOM from 'react-dom';

import { RecoilRoot } from 'recoil';

import App from './App';

ReactDOM.render(
  <RecoilRoot>
    <Suspense>
      <App />
    </Suspense>
  </RecoilRoot>,
  document.getElementById('root'),
);
