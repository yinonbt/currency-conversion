import { Component, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AmountChangeAction } from './actions/amount-change';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import * as fromRoot from './reducers';
import { Observable } from 'rxjs';
import { Currency } from './models/currency';
import { CurrenciesUpdateAction } from './actions/currencies-update';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public amount$: Observable<number>;
  public currencyRates$: Observable<Currency[]>;

  title = 'currency-conversion';
  placeHolderAmount = 'Enter Amount';

  currencyFormGroup = this.formBuilder.group({
    formControlAmount: [null]
  });

  // currencyForm = new FormGroup({
  //   formControlAmount: new FormControl(null)
  // });

  constructor(
    private store: Store<fromRoot.State>,
    private formBuilder: FormBuilder
  ) {
    this.amount$ = store.select(fromRoot.selectors.getAmountState);
    this.currencyRates$ = store.select(fromRoot.selectors.getCurrnecyRates);
  }

  ngOnInit() {
    this.store.dispatch(new CurrenciesUpdateAction());
  }

  dispatchAmount() {
    const amount = parseFloat(
      this.currencyFormGroup.get('formControlAmount').value
    );
    console.log('sdfsdf', amount);
    if (!isNaN(amount)) {
      console.log('dispatching amount of: ', amount);
      this.store.dispatch(new AmountChangeAction(amount));
    }
  }
}
