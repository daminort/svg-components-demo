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
    radius = 2,
    boxClassName = '',
  } = props;

  return (
    <g id={id}>
      <rect
        id={id}
        x={x}
        y={y}
        width={width}
        height={height}
        fill={backgroundColor}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        rx={radius}
        ry={radius}
        className={boxClassName}
        pointerEvents="all"
      />
    </g>
  );
};

export {
  Box,
};
