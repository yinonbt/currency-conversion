import * as amount from './../actions/amount-change';
import { AmountChangeAction } from './../actions/amount-change';

export function reducer(state: number = 1, action: AmountChangeAction) {
  switch (action.type) {
    case amount.AMOUNTCHANGE:
      return action.payload;
    default:
      return state;
  }
}
