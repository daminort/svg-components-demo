
function defineTextProps(shape) {
  const { x, y, width, height } = shape;

  const centerY = y + height / 2;
  const centerX = x + width / 2;

  return {
    x: centerX,
    y: centerY,
    alignmentBaseline: 'middle',
    textAnchor: 'middle',
  };
}

function detectRelativeCoordinates(containerID, absoluteX, absoluteY) {
  const block = document.getElementById(containerID);
  if (!block) {
    return {
      x: absoluteX,
      y: absoluteY,
    }
  }

  const rect = block.getBoundingClientRect();

  return {
    x: absoluteX - rect.x,
    y: absoluteY - rect.y,
  }
}

function createBox(start, end, title = '') {
  const width = end.x - start.x;
  const height = end.y - start.y;
  if (width <= 0 || height <= 0) {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      title: '',
    };
  }

  return {
    x: start.x,
    y: start.y,
    width,
    height,
    title,
  };
}

const svgUtils = {
  defineTextProps,
  detectRelativeCoordinates,
  createBox,
};

export {
  svgUtils,
}
