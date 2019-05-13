import * as fromAmount from './amount';
import * as fromCurrency from './currency';
import * as fromSelectors from '../selectors/selectors';
import { Currency } from '../models/currency';

export const reducers = {
  amount: fromAmount.reducer,
  currencies: fromCurrency.reducer
};

export interface State {
  amount: number;
  currencies: Currency[];
}

export const selectors = {
  getAmountState: fromSelectors.getAmountState,
  getCurrnecyRates: fromSelectors.getCurrnecyRates
};
