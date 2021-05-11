import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Stocks from './Stocks';
import useStocks from '../services/useStocks';
import MarketDropdown from './MarketDropdown';
import SortingSelect from './SortingDropdown';
import {
  DEFAULT_SORTING_STRATEGY,
  SortingStrategy,
} from '../models/SortingStrategies';

const Container = styled.div`
  margin: 0 auto;
  padding: 16px;
  color: white;
  max-width: ${({ theme }) => theme.breakpoints.maxWidth};
`;

const Page: FC = (): JSX.Element => {
  const { market: marketValue } = useParams();
  const [sorting, setSorting] = useState(DEFAULT_SORTING_STRATEGY);
  const [stocks, isLoading, hasError] = useStocks(marketValue, sorting.value);

  const handleChangeSorting = (value: SortingStrategy): void => {
    setSorting(value);
  };

  return (
    <Container>
      <MarketDropdown selectedValue={marketValue} />
      <SortingSelect selectedValue={sorting} onChange={handleChangeSorting} />
      {isLoading ? 'Loading ...' : <Stocks stocks={stocks} />}
      {hasError && 'Please try again'}
    </Container>
  );
};

export default Page;
