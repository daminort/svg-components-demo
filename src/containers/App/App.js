import React, { useState, useCallback } from 'react';

import { Box } from '../../components/Box';
import { Layout } from '../../components/Layout';
import { Footer } from '../../containers/Footer';
import { mockBoxes } from '../../mocks/boxes';
import { Wrapper } from './App.style';
import page from '../../mocks/page.png';

const App = () => {

  const [boxes, setBoxes] = useState(mockBoxes);

  const onBoxCreate = useCallback((box) => {
    const resBoxes = boxes.concat(box);
    setBoxes(resBoxes);
  }, [boxes]);

  return (
    <>
      <Wrapper>
        <Layout onBoxCreate={onBoxCreate} background={page}>
          {boxes.map((box, index) => {
            return (
              <Box key={index} {...box} />
            );
          })}
        </Layout>
      </Wrapper>
      <Footer boxes={boxes} />
    </>
  );
}

export {
  App,
}
