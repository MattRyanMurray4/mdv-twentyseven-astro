import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as CosmonautsActions from './cosmonauts.actions';

import * as CosmonautsSelectors from './cosmonauts.selectors';

@Injectable()
export class CosmonautsFacade {
  loaded$ = this.store.pipe(select(CosmonautsSelectors.getCosmonautsLoaded));
  allCosmonauts$ = this.store.pipe(
    select(CosmonautsSelectors.getAllCosmonauts)
  );
  selectedCosmonauts$ = this.store.pipe(
    select(CosmonautsSelectors.getSelected)
  );

  constructor(private readonly store: Store) {}
  init() {
    this.store.dispatch(CosmonautsActions.init());
  }

  loadCosmonauts() {
    return this.store.dispatch(CosmonautsActions.loadCosmonauts());
  }

  loadCosmonaut(id: string) {
    return this.store.dispatch(CosmonautsActions.loadCosmonaut({ id }));
  }

  selectCosmonaut(cosmonautId: string) {
    return this.store.dispatch(
      CosmonautsActions.selectCosmonaut({ cosmonautId })
    );
  }

  private dispatch(action: Action) {
    return this.store.dispatch(action);
  }
}
