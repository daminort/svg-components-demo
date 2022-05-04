import React from 'react';

import { THEME } from '../../constants/theme';
import { svgUtils } from '../../utils/svgUtils';

const Arc = (props) => {
  const {
    x = 0,
    y = 0,
    radius = 0,
    startAngle = 0,
    endAngle = 0,
    strokeColor = THEME.colors.darkGray,
    strokeWidth = 1,
  } = props;

  const d = svgUtils.defineArc(x, y, radius, startAngle, endAngle);

  return (
    <path
      d={d}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      fill="none"
    />
  );
};

export {
  Arc,
};
