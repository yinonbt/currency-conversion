import { Action } from '@ngrx/store';

const AMOUNTCHANGE = '[Amount] Change';

export class AmountChangeAction implements Action {
  type = AMOUNTCHANGE;

  constructor(public paylod: number) {}
}
