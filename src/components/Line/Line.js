import React from 'react';

import { THEME } from '../../constants/theme';

const Line = (props) => {
  const {
    id,
    x1 = 0,
    y1 = 0,
    x2 = 0,
    y2 = 0,
    strokeColor = THEME.colors.darkGray,
    strokeWidth = 1,
    className = '',
  } = props;

  return (
    <line
      id={id}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      className={className}
    />
  );
};

export {
  Line,
};
