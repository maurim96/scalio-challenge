import { Subscription } from 'rxjs';
import {Component, OnDestroy} from '@angular/core';

import { TranslationKey } from 'src/assets/i18n/en-US.mapping';

@Component({
  template: ''
})
export class BaseComponent implements OnDestroy {
  TKey = TranslationKey;

  protected subscriptions: Subscription[] = [];

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
