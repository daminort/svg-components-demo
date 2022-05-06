import React from 'react';
import { useDroppable } from '@dnd-kit/core';

import { DND_TYPES } from '../../../constants/dnd';

const Droppable = (props) => {
  const {
    id,
    tag = 'div',
    className = '',
    styleOver = undefined,
    children = null,
    accept = [DND_TYPES.block],
  } = props;

  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const Wrapper = `${tag}`;
  const style = isOver && styleOver ? styleOver : undefined;

  return (
    <Wrapper ref={setNodeRef} className={className} style={style}>
      {children}
    </Wrapper>
  );
}

export {
  Droppable,
}
