import React, { FC } from 'react';
import styled from 'styled-components';
import Select, { components } from 'react-select';

import { MARKETS } from '../../models/Markets';

const Anchor = styled.a`
  color: ${({ theme }) => theme.secondary};
  text-decoration: none;
`;

const Container = styled.div`
  color: ${({ theme }) => theme.secondary};
  width: 200px;
  max-width: 100%;
  margin-bottom: 16px;
`;

const Option: FC = (props: any): JSX.Element => {
  return (
    <Anchor
      href={`/${props.value}`}
      data-test-id={`market-option-${props.value}`}>
      <components.Option {...props} children={props.children} />
    </Anchor>
  );
};

interface Props {
  selectedValue: string;
}

const MarketDropdown: FC<Props> = ({ selectedValue }): JSX.Element => {
  return (
    <Container data-test-id={'market-select'}>
      <Select
        value={MARKETS.filter((market) => market.value === selectedValue)}
        options={MARKETS}
        placeholder="Market"
        components={{ Option }}
      />
    </Container>
  );
};

export default MarketDropdown;
