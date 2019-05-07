import { Action } from '@ngrx/store';

const CURRENCIESUPDATE = '[Currency] UpdateAll';

export class CurrenciesUpdateAction implements Action {
    type = CURRENCIESUPDATE;
}
