import { Component, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { AmountChangeAction } from './actions/amount-change';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import * as fromRoot from './reducers'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'currency-conversion';
  placeHolderAmount = 'Enter Amount';

  currencyFormGroup = this.formBuilder.group({
    formControlAmount: [null]
  });

  // currencyForm = new FormGroup({
  //   formControlAmount: new FormControl(null)
  // });

  constructor(private store: Store<fromRoot.State>, private formBuilder: FormBuilder) {
  }

  dispatchAmount() {
    const amount = parseFloat(this.currencyFormGroup.get('formControlAmount').value);
    console.log('sdfsdf', amount);
    if (!isNaN(amount)) {
      console.log('dispatching amount of: ', amount);
      this.store.dispatch(new AmountChangeAction(amount));
    }
  }
}
