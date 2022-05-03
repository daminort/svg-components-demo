import React from 'react';

import { THEME } from '../../constants/theme';
import { svgUtils } from '../../utils/svgUtils';

const Box = (props) => {
  const {
    id,
    x = 0,
    y = 0,
    width = 100,
    height = 10,
    backgroundColor = THEME.colors.transparent,
    strokeColor = THEME.colors.darkGray,
    strokeWidth = 2,
    radius = 2,
    title = '',
    boxClassName = '',
    textClassName = '',
    children = null,
  } = props;

  const textProps = title && svgUtils.defineTextProps({ x, y, width, height });

  return (
    <g transform="translate(0.5, 0.5)" id={id}>
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
      {title && (
        <text
          id={id}
          className={textClassName}
          {...textProps}
        >
          {title}
        </text>
      )}
      {children}
    </g>
  );
};

export {
  Box,
};
