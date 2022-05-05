import React from 'react';

import { THEME } from '../../constants/theme';

const Circle = (props) => {
  const {
    id,
    x = 0,
    y = 0,
    backgroundColor = THEME.colors.transparent,
    strokeColor = THEME.colors.darkGray,
    strokeWidth = 1,
    radius = 10,
    className = '',
  } = props;

  return (
    <circle
      id={id}
      cx={x}
      cy={y}
      r={radius}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      fill={backgroundColor}
      className={className}
    />
  );
};

export {
  Circle,
};
