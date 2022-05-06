import React, { useCallback, useMemo, useState } from 'react';

import { commonUtils } from '../../utils/commonUtils';
import { mockCards } from '../../mocks/cards';

import { Cards } from './Cards';
import { Archers } from './Archers';
import { Wrapper } from './Blocks.style';

const containerID = 'playground';

const Blocks = () => {

  const [dragging, setDragging] = useState(false);
  const [shift, setShift] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

  const relations = useMemo(() => {
    return commonUtils.createRelations(mockCards);
  }, []);

  const onMouseDown = useCallback(() => {
    setDragging(true);
  }, []);

  const onMouseMove = useCallback((event) => {
    if (!dragging) {
      return;
    }

    const { movementX, movementY } = event;
    const resShift = {
      x: shift.x + movementX,
      y: shift.y + movementY,
    }

    setShift(resShift);
  }, [dragging, shift]);

  const onMouseUp = useCallback(() => {
    setDragging(false);
  }, []);

  const onWheel = useCallback((event) => {
    const { deltaY } = event;
    if (deltaY === 0) {
      return;
    }

    const deviation = (deltaY > 0) ? -0.1 : 0.1;
    let resScale = scale + deviation;

    if (resScale < 0.2) { resScale = 0.2 }
    if (resScale > 2) { resScale = 2 }

    setScale(resScale);
  }, [scale]);

  const svgStyle = {
    cursor: dragging ? 'move' : 'auto',
  };
  const groupStyle = {
    transform: `translate3d(${shift.x}px, ${shift.y}px, 0) scale(${scale})`,
    cursor: dragging ? 'move' : 'auto',
  };

  return (
    <Wrapper>
      <svg
        id={containerID}
        style={svgStyle}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onWheel={onWheel}
      >
        <g style={groupStyle}>
          <Cards />
          <Archers relations={relations} />
        </g>
      </svg>
    </Wrapper>
  );
};

export {
  Blocks,
};
