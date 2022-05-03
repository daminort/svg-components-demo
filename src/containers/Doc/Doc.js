import React, { useState, useCallback } from 'react';

import { Box } from '../../components/Box';
import { Layout } from '../../components/Layout';
import { mockBoxes } from '../../mocks/boxes';

import { Wrapper } from './Doc.style';
import page from '../../mocks/page.png';

const Doc = () => {

  const [boxes, setBoxes] = useState(mockBoxes);

  const predefinedBoxes = boxes.filter(box => Boolean(box.predefined));
  const userBoxes = boxes.filter(box => !Boolean(box.predefined));

  const onBoxCreate = useCallback((box) => {
    const resBoxes = boxes.concat(box);
    setBoxes(resBoxes);
  }, [boxes]);

  const renderBox = (box) => `x: ${box.x}, y: ${box.y}, w: ${box.width}, h: ${box.height}`;

  return (
    <Wrapper>
      <div className="preview">
        <Layout onBoxCreate={onBoxCreate} background={page}>
          {boxes.map((box, index) => {
            return (
              <Box key={index} {...box} />
            );
          })}
        </Layout>
      </div>
      <div className="info">
        <div className="block">
          <h3>Predefined Boxes (black)</h3>
          {predefinedBoxes.map((box, index) => {
            return (
              <div key={index} className="item">{renderBox(box)}</div>
            )
          })}
        </div>
        <div className="block">
          <h3>User defined Boxes (red)</h3>
          {userBoxes.map((box, index) => {
            return (
              <div key={index} className="item">{renderBox(box)}</div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export {
  Doc,
};
