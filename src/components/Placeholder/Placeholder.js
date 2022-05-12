import React from 'react';

import { Box } from '../Box';
import { defineBoxProps } from './assets';

const Placeholder = (props) => {
  const {
    id,
    row = 0,
    col = 0,
    className = '',
  } = props;

  const boxProps = defineBoxProps(row, col);

  return (
    <Box
      id={id}
      className={className}
      {...boxProps}
    />
  );
};

export {
  Placeholder,
};
