import { CARD } from '../../constants/cards';
import { THEME } from '../../constants/theme';

export function defineCardShape(row = 0, col = 0) {

  const x = col * (CARD.width + CARD.gap);
  const y = row * (CARD.height + CARD.gap);

  const res = {
    x,
    y,
    width: CARD.width,
    height: CARD.height,
    radius: CARD.radius,
    strokeWidth: CARD.strokeWidth,
  };

  return res;
}

export function defineInnerCardShape(shape) {

  const x = shape.x + CARD.padding;
  const y = shape.y + CARD.header;
  const width = shape.width - (2 * CARD.padding);
  const height = shape.height - CARD.padding - CARD.header;

  return {
    x,
    y,
    width,
    height,
    radius: CARD.radius,
    strokeWidth: CARD.strokeWidth,
  }
}

export function defineNameProps(shape) {

  return {
    x: shape.x + CARD.padding,
    y: shape.y + (2 * CARD.padding),
    fill: THEME.colors.white,
    alignmentBaseline: 'middle',
    textAnchor: 'start',
    fontSize: '0.9rem',
  };
}

export function defineTitleProps(shape) {

  return {
    x: shape.x + CARD.padding,
    y: shape.y + CARD.padding,
    width: shape.width - (2 * CARD.padding),
    height: shape.height - (2 * CARD.padding),
    fontSize: '0.9rem',
  };
}

export function defineIDProps(shape) {

  return {
    x: shape.x + shape.width - (CARD.padding / 2),
    y: shape.y + shape.height - CARD.padding,
    fill: THEME.colors.gray,
    alignmentBaseline: 'middle',
    textAnchor: 'end',
    fontSize: '0.8rem',
  };
}

export function defineIconCloseProps(shape) {

  return {
    x: shape.x + shape.width - (3 * CARD.padding),
    y: shape.y + CARD.padding - 2,
    width: 19,
    height: 19,
    color: THEME.colors.white,
    cursor: 'pointer',
  };
}

export function defineButtonPlusProps(shape) {

  return {
    x: shape.x + shape.width + 2,
    y: shape.y + (shape.width / 2) - 27,
    width: 24,
    height: 24,
    color: THEME.colors.gray,
    cursor: 'pointer',
  };
}
