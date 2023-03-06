import { ResultType, ThreeTypes } from '~/types';

const resultsTable: { [key in ThreeTypes]: { [key in ThreeTypes]: ResultType } } = {
  rock: {
    rock: 'draw',
    paper: 'lose',
    scissors: 'win',
  },
  paper: {
    rock: 'win',
    paper: 'draw',
    scissors: 'lose',
  },
  scissors: {
    rock: 'lose',
    paper: 'win',
    scissors: 'draw',
  },
};

export const ResultReader = (player: ThreeTypes, computer: ThreeTypes) => {
  if (!resultsTable[player] || !resultsTable[player][computer]) {
    throw new Error('Invalid input');
  }
  return resultsTable[player][computer];
};
