import React, { useCallback } from 'react';
import clsx from 'clsx';

import { ROUTES } from '../../constants/routes';
import { Wrapper } from './Header.style';

const Header = (props) => {
  const {
    route = ROUTES.doc,
    onChange = null,
  } = props;

  const onClick = useCallback((newRoute) => () => {
    if (onChange) {
      onChange(newRoute);
    }
  }, [onChange]);

  const docCls = clsx('link', { active: route === ROUTES.doc });
  const blocksCls = clsx('link', { active: route === ROUTES.blocks });

  return (
    <Wrapper>
      <span className={docCls} onClick={onClick(ROUTES.doc)}>PDF Document</span>
      <span className={blocksCls} onClick={onClick(ROUTES.blocks)}>Blocks</span>
    </Wrapper>
  );
};

export {
  Header,
};

