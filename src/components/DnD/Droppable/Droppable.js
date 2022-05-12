import React from 'react';
import { useDroppable } from '@dnd-kit/core';

import { DND_TYPES } from '../../../constants/dnd';

const Droppable = (props) => {
  const {
    id,
    tag = 'div',
    className = '',
    style = undefined,
    styleOver = undefined,
    children = null,
    accept = [DND_TYPES.block],
    data = {},
  } = props;

  const { isOver, setNodeRef } = useDroppable({
    id,
    data: {
      ...data,
      accept,
    },
  });

  const Wrapper = `${tag}`;
  let resStyle = undefined;
  if (!isOver && style) {
    resStyle = style;
  }
  if (isOver && styleOver) {
    resStyle = styleOver;
  }

  return (
    <Wrapper ref={setNodeRef} className={className} style={resStyle}>
      {children}
    </Wrapper>
  );
}

export {
  Droppable,
}
