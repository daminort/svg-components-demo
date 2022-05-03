import React from 'react';

import { THEME } from '../../constants/theme';

const Circle = (props) => {
  const {
    id,
    x = 0,
    y = 0,
    backgroundColor = THEME.colors.transparent,
    strokeColor = THEME.colors.darkGray,
    strokeWidth = 2,
    radius = 10,
    className = '',
    children = null,
  } = props;

  return (
    <g transform="translate(0.5, 0.5)" id={id}>
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
      {children}
    </g>
  );
};

export {
  Circle,
};
