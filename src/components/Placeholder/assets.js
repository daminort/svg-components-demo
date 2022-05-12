import { CARD } from '../../constants/cards';
import { THEME } from '../../constants/theme';

export function defineBoxProps(row = 0, col = 0) {

  const x = col * (CARD.width + CARD.gap) + CARD.width + 3;
  const y = row * (CARD.height + CARD.gap) + 2;

  const res = {
    x,
    y,
    width: CARD.gap - 6,
    height: CARD.height - 4,
    radius: 2,
    strokeWidth: 2,
    strokeColor: THEME.colors.darkGreen,
    strokeDasharray: 4,
  };

  return res;
}
