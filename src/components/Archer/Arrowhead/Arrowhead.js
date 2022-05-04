import React from 'react';
import { THEME } from '../../../constants/theme';

const Arrowhead = (props) => {
  const {
    x = 0,
    y = 0,
    strokeColor = THEME.colors.darkGray,
    strokeWidth = 1,
  } = props;

  return (
    <path
      d={`M ${x-2} ${y} l -8 -2 l 0 4 Z`}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    />
  );
};
export {
  Arrowhead
};
