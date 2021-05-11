import React, { FC } from 'react';
import styled from 'styled-components';
import Select from 'react-select';

import {
  SORTING_STRATEGIES,
  SortingStrategy,
} from '../models/SortingStrategies';

const Container = styled.div`
  color: ${({ theme }) => theme.secondary};
  width: 200px;
  max-width: 100%;
  margin-bottom: 16px;
`;

interface Props {
  selectedValue: SortingStrategy;
  onChange: (value: SortingStrategy) => void;
}

const MarketDropdown: FC<Props> = ({
  selectedValue,
  onChange,
}): JSX.Element => {
  return (
    <Container>
      <Select
        options={SORTING_STRATEGIES}
        value={selectedValue}
        onChange={(value) => onChange(value)}
      />
    </Container>
  );
};

export default MarketDropdown;
