import React, { useCallback, useMemo } from 'react';

import { Card } from '../../components/Card';
import { commonUtils } from '../../utils/common';
import { mockCards } from '../../mocks/cards';

import { Archers } from './Archers';
import { Wrapper } from './Blocks.style';

const containerID = 'playground';

const Blocks = () => {

  const onClose = useCallback((id) => {
    console.log('Blocks.js,  [13]: ', { id });
  }, []);

  const relations = useMemo(() => {
    return commonUtils.createRelations(mockCards);
  }, [mockCards]);

  return (
    <Wrapper>
      <svg
        id={containerID}
      >
        {mockCards.map(card => {
          return (
            <Card key={card.id} {...card} onClose={onClose} />
          )
        })}
        <Archers relations={relations} />
      </svg>
    </Wrapper>
  );
};

export {
  Blocks,
};
