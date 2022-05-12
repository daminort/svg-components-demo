import React, { useCallback, useState, useMemo, memo, Fragment } from 'react';
import { DndContext, DragOverlay, MouseSensor, useSensor, useSensors } from '@dnd-kit/core';

import { Draggable, Droppable } from '../../../components/DnD';
import { Card } from '../../../components/Card';
import { Placeholder } from '../../../components/Placeholder';
import { mockCards } from '../../../mocks/cards';
import { Wrapper } from './Cards.style';

const activationConstraint = {
  delay: 250,
  tolerance: 5,
};

const Cards = memo(() => {

  const [activeCardID, setActiveCardID] = useState(null);

  const sensors = useSensors(useSensor(MouseSensor, {
    activationConstraint,
  }));

  const onClose = useCallback((id) => {
    console.log(`Closed block: ${id}`);
  }, []);

  const onAdd = useCallback((id) => {
    console.log(`Added for block: ${id}`);
  }, []);

  const onDragStart = useCallback((event) => {
    setActiveCardID(event.active.id);
  }, []);

  const onDragEnd = useCallback((event) => {
    console.log('Cards.js,  [34]: ', { event });
    setActiveCardID(null);
  }, []);

  const activeCard = useMemo(() => {
    const card = mockCards.find(item => item.id === activeCardID);
    if (!card) {
      return null;
    }

    return (
      <Card dragging {...card} />
    );
  }, [activeCardID]);

  return (
    <DndContext
      sensors={sensors}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <Wrapper>
        {mockCards.map(card => {
          const droppableData = {
            row: card.row,
            col: card.col,
          };

          return (
            <Fragment key={card.id}>
              <Draggable
                tag="g"
                id={card.id}
              >
                <Card {...card} onClose={onClose} onAdd={onAdd} />
              </Draggable>
              <Droppable
                tag="g"
                id={card.id}
                data={droppableData}
                style={{ display: 'none' }}
                styleOver={{ display: 'initial' }}
              >
                <Placeholder
                  id={`placeholder-${card.id}`}
                  row={card.row}
                  col={card.col}
                  className="placeholder"
                />
              </Droppable>
            </Fragment>
          )
        })}
        <DragOverlay zIndex={100} wrapperElement="g">
          {activeCard}
        </DragOverlay>
      </Wrapper>
    </DndContext>
  );
});

export {
  Cards,
};
