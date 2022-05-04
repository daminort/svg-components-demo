import React from 'react';

import { THEME } from '../../constants/theme';
import { Arc } from '../Arc';
import { Arrowhead } from './Arrowhead';
import {
  defineRight,
  defineLeft,
  defineBottom,
  defineMiddle,
} from './assets';

const Archer = (props) => {
  const {
    startRow = 0,
    startCol = 0,
    endRow = 0,
    endCol = 0,
    strokeColor = THEME.colors.darkGray,
    strokeWidth = 1,
    className = '',
  } = props;

  const sameRow = (startRow === endRow);
  const start = sameRow ? defineRight(startRow, startCol) : defineBottom(startRow, startCol);
  const end = defineLeft(endRow, endCol);
  const middle = defineMiddle(start, end);

  if (sameRow) {
    return (
      <g className={className}>
        <path
          d={`M ${start.x} ${start.y} H ${end.x}`}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />
        <Arrowhead {...end} />
      </g>
    );
  }

  return (
    <g>
      <path
        d={`M ${start.x} ${start.y} V ${middle.y - 8} M ${middle.x + 8} ${middle.y} H ${end.x}`}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
      <Arc
        x={middle.x + 8}
        y={middle.y - 8}
        radius={8}
        startAngle={180}
        endAngle={270}
      />
      <Arrowhead {...end} />
    </g>
  );
};

export {
  Archer,
};
