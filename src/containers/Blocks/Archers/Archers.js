import React, { memo } from 'react';

import { Archer } from '../../../components/Archer';

const Archers = memo((props) => {
  const {
    relations = [],
  } = props;

  return (
    <g>
      {relations.map(item => {
        return (
          <Archer key={item.id} {...item} />
        );
      })}
    </g>
  );
});

export { Archers };
