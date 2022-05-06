import React, { useMemo } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

import { DND_TYPES } from '../../../constants/dnd';

const basicStyle = {
  userSelect: 'none',
};

const Draggable = (props) => {
  const {
    id,
    tag = 'div',
    className = '',
    type = DND_TYPES.block,
  } = props;

  const { listeners, setNodeRef, transform } = useDraggable({
    id,
    data: {
      type,
    },
  });

  const Wrapper = `${tag}`;

  const style = useMemo(() => ({
    ...basicStyle,
    transform: transform ? CSS.Translate.toString(transform) : 'none',
    cursor: transform ? 'move' : 'auto',
  }), [transform]);

  return (
    <Wrapper ref={setNodeRef} className={className} style={style} {...listeners}>
      {props.children}
    </Wrapper>
  );
}

export {
  Draggable,
}
