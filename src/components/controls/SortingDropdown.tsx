import React, { FC } from 'react';
import styled from 'styled-components';
import Select, { components } from 'react-select';

import {
  SORTING_STRATEGIES,
  SortingStrategy,
} from '../../models/SortingStrategies';

const Container = styled.div`
  color: ${({ theme }) => theme.secondary};
  width: 200px;
  max-width: 100%;
  margin-bottom: 16px;
`;

const Option: FC = (props: any): JSX.Element => {
  return (
    <div data-test-id={`sorting-option-${props.value}`}>
      <components.Option {...props} children={props.children} />
    </div>
  );
};

interface Props {
  selectedValue: SortingStrategy;
  onChange: (value: SortingStrategy) => void;
}

const MarketDropdown: FC<Props> = ({
  selectedValue,
  onChange,
}): JSX.Element => {
  return (
    <Container data-test-id={'sorting-select'}>
      <Select
        options={SORTING_STRATEGIES}
        value={selectedValue}
        placeholder="Sorting"
        components={{ Option }}
        onChange={(value) => onChange(value)}
      />
    </Container>
  );
};

export default MarketDropdown;
