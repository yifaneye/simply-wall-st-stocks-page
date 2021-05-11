import React, { FC } from 'react';
import ArrowIcon from './ArrowIcon';

const RightIcon: FC = (): JSX.Element => (
  <ArrowIcon style={{ transform: 'rotate(180deg)' }} />
);

export default RightIcon;
