import React, { useCallback, useState, useMemo, memo } from 'react';
import { DndContext, DragOverlay, MouseSensor, useSensor, useSensors } from '@dnd-kit/core';

import { Draggable } from '../../../components/DnD/Draggable';
import { Card } from '../../../components/Card';
import { mockCards } from '../../../mocks/cards';

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
      {mockCards.map(card => {
        return (
          <Draggable
            tag="g"
            key={card.id}
            id={card.id}
          >
            <Card {...card} onClose={onClose} onAdd={onAdd} />
          </Draggable>
        )
      })}
      <DragOverlay zIndex={100} wrapperElement="g">
        {activeCard}
      </DragOverlay>
    </DndContext>
  );
});

export {
  Cards,
};
