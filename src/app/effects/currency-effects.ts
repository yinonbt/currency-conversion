import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as currency from '../actions/currencies-update';
import { Action } from '@ngrx/store';
import { switchMap, map } from 'rxjs/operators';
import { CurrenciesUpdatedAction } from '../actions/currencies-updated';
import { CurrencyService } from '../services/currency.service';

@Injectable()
export class CurrencyEffects {
  @Effect()
  update$: Observable<Action> = this.actions$.pipe(
    ofType(currency.CURRENCIESUPDATE),
    switchMap(() =>
      this.currencyService
        .getRates()
        .pipe(map(data => new CurrenciesUpdatedAction(data)))
    )
  );

  constructor(
    private currencyService: CurrencyService,
    private actions$: Actions
  ) {}
}
