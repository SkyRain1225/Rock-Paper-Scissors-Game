import { ThreeTypes } from '~/types';

export const RandomSelect = (): ThreeTypes => {
  const types: ThreeTypes[] = ['rock', 'paper', 'scissors'];

  const randomIndex = Math.floor(Math.random() * types.length);
  return types[randomIndex];
};
