import { Action } from '@ngrx/store';

export const CURRENCIESUPDATE = '[Currency] UpdateAll';

export class CurrenciesUpdateAction implements Action {
    type = CURRENCIESUPDATE;
}
