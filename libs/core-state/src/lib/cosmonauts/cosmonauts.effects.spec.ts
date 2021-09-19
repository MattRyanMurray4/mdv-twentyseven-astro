import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as CosmonautsActions from './cosmonauts.actions';
import { CosmonautsEffects } from './cosmonauts.effects';

describe('CosmonautsEffects', () => {
  let actions: Observable<Action>;
  let effects: CosmonautsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        CosmonautsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(CosmonautsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: CosmonautsActions.init() });

      const expected = hot('-a-|', {
        a: CosmonautsActions.loadCosmonautsSuccess({ cosmonauts: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
