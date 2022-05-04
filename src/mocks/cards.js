import { CARD_TYPES } from '../constants/cards';

const mockCards = [
  { id: 'timer01', type: CARD_TYPES.advanced, name: 'Timer', title: 'Every 10 min', row: 1, col: 1, parent: null },
  { id: 'req02', type: CARD_TYPES.basic, name: 'Request', title: 'Get currencies', row: 1, col: 2, parent: 'timer01' },
  { id: 'calc03', type: CARD_TYPES.basic, name: 'Calculation', title: 'Find minimal value', row: 1, col: 3, parent: 'req02' },
  { id: 'req04', type: CARD_TYPES.basic, name: 'Request', title: 'Save results into database', row: 2, col: 2, parent: 'timer01' },
  { id: 'email05', type: CARD_TYPES.additional, name: 'Email', title: 'Notify managers', row: 1, col: 4, parent: 'calc03' },
  { id: 'email06', type: CARD_TYPES.additional, name: 'Email', title: 'Notify admins', row: 2, col: 4, parent: 'req04' },
  { id: 'req07', type: CARD_TYPES.basic, name: 'Request', title: 'Get metrics', row: 3, col: 2, parent: 'timer01' },
];

export {
  mockCards,
}
