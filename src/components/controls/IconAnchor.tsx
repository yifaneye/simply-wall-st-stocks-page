import React, { FC, PropsWithChildren } from 'react';

import Anchor from './Anchor';
import LeftIcon from '../icons/LeftIcon';
import RightIcon from '../icons/RightIcon';

type AvailableIcons = 'left' | 'right';

const iconNameToComponent: Record<AvailableIcons, any> = {
  left: LeftIcon(null),
  right: RightIcon(null),
};

interface Props extends PropsWithChildren<any> {
  href?: string;
  icon: AvailableIcons;
  disabled: boolean;
}

// this component is for placing icon in an Anchor component
const IconAnchor: FC<Props> = (props): JSX.Element => {
  // extract icons from props
  const { icon, ...otherProps } = props;

  return <Anchor {...otherProps}>{iconNameToComponent[icon]}</Anchor>;
};

export default IconAnchor;
