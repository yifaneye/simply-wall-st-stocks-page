import React, { FC } from 'react';
import styled from 'styled-components';

import StockCard from './Stock';
import { Stock } from '../../models/Stock';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${({ theme }) => theme.gutter};
`;

const Tile = styled.div`
  ${({ theme }) => theme.nColumns(1)}
  padding: 0 ${({ theme }) => theme.gutter};
  margin-bottom: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    ${({ theme }) => theme.nColumns(2)}
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    ${({ theme }) => theme.nColumns(3)}
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    ${({ theme }) => theme.nColumns(4)}
  }
`;

interface Props {
  stocks?: Stock[];
}

const Stocks: FC<Props> = ({ stocks }): JSX.Element => {
  return (
    <Grid>
      {stocks.map((stock: Stock) => (
        <Tile key={stock.id}>
          <StockCard stock={stock} />
        </Tile>
      ))}
    </Grid>
  );
};

export default Stocks;
