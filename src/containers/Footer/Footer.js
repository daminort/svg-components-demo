import React from 'react';
import { Wrapper } from './Footer.style';

const Footer = (props) => {
  const { boxes = [] } = props;

  const predefinedBoxes = boxes.filter(box => Boolean(box.predefined));
  const userBoxes = boxes.filter(box => !Boolean(box.predefined));

  const renderBox = (box) => `x: ${box.x}, y: ${box.y}, w: ${box.width}, h: ${box.height}`;

  return (
    <Wrapper>
      <div className="left">
        <h3>Predefined Boxes (black)</h3>
        {predefinedBoxes.map((box, index) => {
          return (
            <div key={index} className="item">{renderBox(box)}</div>
          )
        })}
      </div>
      <div className="right">
        <h3>User defined Boxes (red)</h3>
        {userBoxes.map((box, index) => {
          return (
            <div key={index} className="item">{renderBox(box)}</div>
          )
        })}
      </div>
    </Wrapper>
  );
};

export {
  Footer
};
