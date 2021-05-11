import React, { FC } from 'react';
import styled from 'styled-components';

import Scores from './Scores';
import { Stock } from '../../models/Stock';

const UniqueSymbol = styled.span`
  ${({ theme }) => theme.font('1.2rem', '500', '1.5')}
  ${({ theme }) => theme.singleLine()}
  color: ${({ theme }) => theme.secondary};
  display: block;
  margin-bottom: 2px;
`;

const Name = styled.div`
  ${({ theme }) => theme.font('1.6rem', '500', 'normal')}
  ${({ theme }) => theme.singleLine()}
  color: ${({ theme }) => theme.primary};
  display: block;
`;

const Container = styled.div`
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.background};
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    border-radius: 8px;
  }
`;

interface Props {
  stock: Stock;
}

const StockContainer: FC<Props> = ({ stock }): JSX.Element => {
  return (
    <Container>
      <Scores scores={stock.score.data} />
      <UniqueSymbol>{stock.unique_symbol}</UniqueSymbol>
      <Name>{stock.name}</Name>
    </Container>
  );
};

export default StockContainer;
