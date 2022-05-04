import { CARD } from '../../constants/cards';

export function defineRight(row = 0, col = 0) {

  const x = col * (CARD.width + CARD.gap) + CARD.width;
  const y = row * (CARD.height + CARD.gap) + CARD.height / 2;

  const res = {
    x,
    y,
  };

  return res;
}

export function defineLeft(row = 0, col = 0) {

  const x = col * (CARD.width + CARD.gap);
  const y = row * (CARD.height + CARD.gap) + (CARD.height / 2);

  const res = {
    x,
    y,
  };

  return res;
}

export function defineBottom(row = 0, col = 0) {

  const x = col * (CARD.width + CARD.gap) + (CARD.width / 2);
  const y = row * (CARD.height + CARD.gap) + CARD.height;

  const res = {
    x,
    y,
  };

  return res;
}

export function defineMiddle(start, end) {

  return {
    x: start.x,
    y: end.y,
  };
}
