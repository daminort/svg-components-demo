import React, { useState, useMemo, useCallback, useRef } from 'react';

import { svgUtils } from '../../utils/svgUtils';
import { PAGE } from '../../constants/page';
import { THEME } from '../../constants/theme';
import { Box } from '../../components/Box';
import { Wrapper } from './Layout.style';

const containerID = 'svg-page';

const Layout = (props) => {
  const {
    children,
    width = PAGE.width,
    height = PAGE.height,
    scale = PAGE.scale,
    background = null,
    onBoxCreate = null,
  } = props;

  const [drawing, setDrawing] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });
  const [end, setEnd] = useState({ x: 0, y: 0 });

  const style = useMemo(() => {
    return {
      width,
      height,
    }
  }, [width, height]);

  const onMouseDown = useCallback((e) => {
    setDrawing(true);
    const coords = svgUtils.detectRelativeCoordinates(containerID, e.clientX, e.clientY);
    setStart({
      x: coords.x,
      y: coords.y,
    });
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!drawing) {
      return;
    }
    const coords = svgUtils.detectRelativeCoordinates(containerID, e.clientX, e.clientY);
    setEnd({
      x: coords.x,
      y: coords.y,
    });
  }, [drawing]);

  const onMouseUp = useCallback((e) => {
    if (!drawing) {
      return;
    }

    if (onBoxCreate) {
      const coords = svgUtils.detectRelativeCoordinates(containerID, e.clientX, e.clientY);
      const end = {
        x: coords.x,
        y: coords.y,
      };

      const box = svgUtils.createBox(start, end);
      onBoxCreate({
        ...box,
        strokeColor: THEME.colors.red,
      });
    }

    setDrawing(false);
    setStart({ x: 0, y: 0 });
    setEnd({ x: 0, y: 0 });

  }, [drawing, start, onBoxCreate]);

  const renderBox = () => {
    if (!drawing) {
      return null;
    }

    const box = svgUtils.createBox(start, end);

    return (
      <Box {...box} strokeColor={THEME.colors.red} />
    )
  };

  return (
    <Wrapper id="page-holder" style={style} background={background}>
      <svg
        id={containerID}
        style={style}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >
        {children}
        {renderBox()}
      </svg>
    </Wrapper>
  );
};

export {
  Layout,
};
