import { Scores } from './Scores';

export interface Stock {
  id: number;
  name: string;
  unique_symbol: string;
  score: {
    data: Scores;
  };
}
