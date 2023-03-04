export type ThreeTypes = 'rock' | 'paper' | 'scissors';

export type ResultType = 'win' | 'lose' | 'draw';

export interface Props {
  type?: ThreeTypes;
  smallSize?: boolean;
}
