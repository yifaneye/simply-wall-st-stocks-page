import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Stocks from '../stocks/Stocks';
import useStocks from '../../utils/useStocks';
import useQuery from '../../utils/useQuery';
import Pagination from '../controls/Pagination';
import MarketDropdown from '../controls/MarketDropdown';
import SortingSelect from '../controls/SortingDropdown';
import {
  DEFAULT_SORTING_STRATEGY,
  SortingStrategy,
} from '../../models/SortingStrategies';

const Container = styled.div`
  margin: 0 auto;
  padding: 16px;
  color: white;
  max-width: ${({ theme }) => theme.breakpoints.maxWidth};
`;

const StocksPage: FC = (): JSX.Element => {
  const { market: marketValue } = useParams<{}>();
  const query = useQuery();
  const [sorting, setSorting] = useState<SortingStrategy>(
    DEFAULT_SORTING_STRATEGY
  );
  const [stocks, isLoading, hasError, prevPageLink, nextPageLink] = useStocks(
    marketValue,
    sorting.value,
    query
  );

  const handleChangeSorting = (value: SortingStrategy): void => {
    setSorting(value);
  };

  // need to use shim(s) or set a suitable height to minimize layout shift, in the future
  return (
    <Container>
      <MarketDropdown selectedValue={marketValue} />
      <SortingSelect selectedValue={sorting} onChange={handleChangeSorting} />
      {isLoading ? 'Loading ...' : <Stocks stocks={stocks} />}
      {hasError && 'Please try again'}
      <Pagination prevPageLink={prevPageLink} nextPageLink={nextPageLink} />
    </Container>
  );
};

export default StocksPage;
