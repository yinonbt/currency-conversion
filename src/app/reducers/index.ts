import * as fromAmount from './amount';
import * as fromCurrency from './currency';
import { Currency } from '../models/currency';

const reducers = {
  amount: fromAmount.reducer,
  currencies: fromCurrency.reducer
};

interface State {
  amount: number;
  currencies: Currency[];
}
