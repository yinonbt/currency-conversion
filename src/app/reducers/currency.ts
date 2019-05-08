import * as currency from './../actions/currencies-updated';
import { CurrenciesUpdatedAction } from '../actions/currencies-updated';

function reducer(state = [], action: CurrenciesUpdatedAction) {
  switch (action.type) {
    case currency.CURRENCIESUPDATED:
      return action.payload;
    default:
      return state;
  }
}
