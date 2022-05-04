
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

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function defineArc(x, y, radius, startAngle, endAngle){

  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  const d = [
    'M', start.x, start.y,
    'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(' ');

  return d;
}

const svgUtils = {
  detectRelativeCoordinates,
  createBox,
  polarToCartesian,
  defineArc,
};

export {
  svgUtils,
}
