import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.span`
  ${({ theme }) => theme.font('1rem', '400', '1')}
  ${({ theme }) => theme.singleLine()}
  display: block;
  margin-bottom: 2px;
`;

interface Props {
  score: number;
  area: string;
}

const Score: FC<Props> = ({ score, area }): JSX.Element => {
  // use <code> to have each score displayed in equal width, for readability
  return (
    <Container>
      <code>{score}</code> {area}
    </Container>
  );
};

export default Score;
