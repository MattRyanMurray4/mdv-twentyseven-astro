import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as CosmonautsActions from './cosmonauts.actions';
import { CosmonautsEffects } from './cosmonauts.effects';
import { CosmonautsFacade } from './cosmonauts.facade';
import { CosmonautsEntity } from './cosmonauts.models';
import {
  COSMONAUTS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './cosmonauts.reducer';
import * as CosmonautsSelectors from './cosmonauts.selectors';

interface TestSchema {
  cosmonauts: State;
}

describe('CosmonautsFacade', () => {
  let facade: CosmonautsFacade;
  let store: Store<TestSchema>;
  const createCosmonautsEntity = (id: string, name = ''): CosmonautsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(COSMONAUTS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([CosmonautsEffects]),
        ],
        providers: [CosmonautsFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(CosmonautsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allCosmonauts$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allCosmonauts$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadCosmonautsSuccess` to manually update list
     */
    it('allCosmonauts$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allCosmonauts$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        CosmonautsActions.loadCosmonautsSuccess({
          cosmonauts: [
            createCosmonautsEntity('AAA'),
            createCosmonautsEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allCosmonauts$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
