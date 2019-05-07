import { Action } from '@ngrx/store';
import { Currency } from '../models/currency';

const CURRENCIESUPDATED = '[Currency] UpdatedAll';

export class CurrenciesUpdatedAction implements Action {
  type = CURRENCIESUPDATED;

  constructor(public payload: Currency[]) {}
}
