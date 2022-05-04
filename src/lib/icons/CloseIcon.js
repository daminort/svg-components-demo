import React from 'react';

const CloseIcon = (props) => {

  const stroke = props.fill || 'currentColor';

  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} pointerEvents="all">
      <line x1="4.5962" y1="4.59621" x2="13.7886" y2="13.7886" stroke={stroke} />
      <line x1="13.7886" y1="4.59617" x2="4.59619" y2="13.7886" stroke={stroke} />
    </svg>
  );
}

export {
  CloseIcon,
}
