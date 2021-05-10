import React, { FC } from 'react';
import styled from 'styled-components';

import Score from './Score';
import { SCORE_AREAS, ScoreArea } from '../models/ScoreAreas';
import { Scores } from '../services/useStocks';

// colors grabbed using Digital Color Meter
// they are to be revised
const COLORS: object = {
  4: 'rgb(250, 250, 11)',
  3: 'rgb(255, 214, 15)',
  2: 'rgb(255, 141, 27)',
  1: 'rgb(255, 106, 32)',
  0: 'rgb(251, 58, 39)',
};

const getColor = (score: number): number => {
  // max score is 5 area * maximum 6 points for each
  // there are 5 colors, so divide total score by 6
  if (score === 30) return COLORS[4]; // edge case
  return COLORS[Math.floor(score / 6)];
};

const Container = styled.div<{ total: number }>`
  color: ${(props) => getColor(props.total)};
  margin-bottom: 1rem;
`;

interface Props {
  scores: Scores;
}

const Scores: FC<Props> = ({ scores }): JSX.Element => {
  // use div instead of fragment here to show the grouping and assign color
  return (
    <Container total={scores.total}>
      {SCORE_AREAS.map((scoreArea: ScoreArea, index: number) => (
        <Score
          key={index}
          score={scores[scoreArea.key]}
          area={scoreArea.name}
        />
      ))}
    </Container>
  );
};

export default Scores;
