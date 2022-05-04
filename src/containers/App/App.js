import React, { useState } from 'react';

import { ROUTES } from '../../constants/routes';
import { Header } from '../Header';
import { Doc } from '../Doc';
import { Blocks } from '../Blocks';
import { Wrapper } from './App.style';

const App = () => {

  const [route, setRoute] = useState(ROUTES.blocks);

  return (
    <>
      <Header route={route} onChange={setRoute} />
      <Wrapper>
        {route === ROUTES.doc && (<Doc />)}
        {route === ROUTES.blocks && (<Blocks />)}
      </Wrapper>
    </>
  );
}

export {
  App,
}
