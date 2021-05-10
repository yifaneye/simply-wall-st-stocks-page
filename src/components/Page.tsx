import React, { FC } from 'react';
import styled from 'styled-components';

import Stocks from './Stocks';
import useStocks from '../services/useStocks';

const Container = styled.div`
  margin: 0 auto;
  padding: 16px;
  color: white;
  max-width: ${({ theme }) => theme.breakpoints.maxWidth};
`;

const Page: FC = (): JSX.Element => {
  const [stocks, isLoading, hasError] = useStocks();
  return (
    <Container>
      {isLoading ? 'Loading ...' : <Stocks stocks={stocks} />}
      {hasError && 'Please try again'}
    </Container>
  );
};

export default Page;
