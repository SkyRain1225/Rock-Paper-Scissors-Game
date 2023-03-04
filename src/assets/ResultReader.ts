import { ThreeTypes } from '~/types';

export const ResultReader = (player: ThreeTypes, computer: ThreeTypes) => {
  switch (player) {
    case computer:
      return 'draw';
    case 'rock':
      return computer === 'paper' ? 'lose' : 'win';
    case 'paper':
      return computer === 'scissors' ? 'lose' : 'win';
    case 'scissors':
      return computer === 'rock' ? 'lose' : 'win';
    default:
      throw new Error('Invalid type');
  }
};
