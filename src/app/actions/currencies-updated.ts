import { Action } from '@ngrx/store';
import { Currency } from '../models/currency';

export const CURRENCIESUPDATED = '[Currency] UpdatedAll';

export class CurrenciesUpdatedAction implements Action {
  type = CURRENCIESUPDATED;

  constructor(public payload: Currency[]) {}
}
