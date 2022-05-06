import React, { useCallback } from 'react';
import { DndContext } from '@dnd-kit/core';

import { Card } from '../../../components/Card';
import { mockCards } from '../../../mocks/cards';

const Cards = () => {

  const onClose = useCallback((id) => {
    console.log(`Closed block: ${id}`);
  }, []);

  return (
    <DndContext>
      {mockCards.map(card => {
        return (
          <Card key={card.id} {...card} onClose={onClose} />
        )
      })}
    </DndContext>
  );
};

export {
  Cards,
};
