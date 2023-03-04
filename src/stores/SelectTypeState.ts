import { atom } from 'recoil';

import { ResultType, ThreeTypes } from '../types';

export const PlayerTypeState = atom<ThreeTypes | undefined>({
  key: 'PlayerTypeState',
  default: undefined,
});

export const ComputerTypeState = atom<ThreeTypes | undefined>({
  key: 'ComputerTypeState',
  default: undefined,
});

export const BeforeResultState = atom<ResultType | undefined>({
  key: 'BeforeResultState',
  default: undefined,
});
