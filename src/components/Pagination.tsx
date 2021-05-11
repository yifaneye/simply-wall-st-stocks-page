import React, { FC } from 'react';
import styled from 'styled-components';

import IconAnchor from './IconAnchor';

const Container = styled.div`
  margin: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface Props {
  prevPageLink?: string;
  nextPageLink?: string;
}

const Pagination: FC<Props> = ({ prevPageLink, nextPageLink }): JSX.Element => {
  return (
    <Container>
      <IconAnchor icon="left" href={prevPageLink} disabled={!prevPageLink} />
      <IconAnchor icon="right" href={nextPageLink} disabled={!nextPageLink} />
    </Container>
  );
};

export default Pagination;
