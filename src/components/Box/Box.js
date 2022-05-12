import React from 'react';

import { THEME } from '../../constants/theme';

const Box = (props) => {
  const {
    id,
    x = 0,
    y = 0,
    width = 100,
    height = 10,
    backgroundColor = THEME.colors.transparent,
    strokeColor = THEME.colors.darkGray,
    strokeWidth = 1,
    strokeDasharray = 0,
    radius = 2,
    className = '',
  } = props;

  return (
    <rect
      id={id}
      x={x}
      y={y}
      width={width}
      height={height}
      fill={backgroundColor}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeDasharray={strokeDasharray}
      rx={radius}
      ry={radius}
      className={className}
      pointerEvents="all"
    />
  );
};

export {
  Box,
};
