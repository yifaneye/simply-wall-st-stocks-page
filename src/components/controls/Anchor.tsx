import React, { FC, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.a`
  background: transparent;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: ${(theme) => theme.primary};
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;

  :hover,
  :focus {
    background: rgba(255, 255, 255, 0.1);
  }

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.3;
      cursor: unset;

      :hover,
      :focus {
        background: unset;
      }
    `};
`;

interface Props extends PropsWithChildren<any> {
  href?: string;
  disabled: boolean;
}

// this component is for button liked anchors
const Anchor: FC<Props> = ({ href, disabled, children }): JSX.Element => {
  return (
    <Container
      href={href || null}
      disabled={disabled}
      data-test-id={'pagination'}>
      {children}
    </Container>
  );
};

export default Anchor;
