import React from 'react';

import { Archer } from '../../../components/Archer';

const Archers = (props) => {
  const {
    relations = [],
  } = props;

  return (
    <g transform="translate(0.5, 0.5)">
      {relations.map(item => {
        return (
          <Archer key={item.id} {...item} />
        );
      })}
    </g>
  );
};

export { Archers };
