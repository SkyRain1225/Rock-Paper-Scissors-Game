import { atom } from 'recoil';

import { ThreeTypes } from '../types';

export const SelectTypeState = atom<ThreeTypes | undefined>({
  key: 'SelectTypeState',
  default: undefined,
});
