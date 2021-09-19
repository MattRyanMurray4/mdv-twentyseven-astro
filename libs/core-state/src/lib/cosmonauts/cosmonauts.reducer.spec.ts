import { Action } from '@ngrx/store';

import * as CosmonautsActions from './cosmonauts.actions';
import { CosmonautsEntity } from './cosmonauts.models';
import { State, initialState, reducer } from './cosmonauts.reducer';

describe('Cosmonauts Reducer', () => {
  const createCosmonautsEntity = (id: string, name = ''): CosmonautsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Cosmonauts actions', () => {
    it('loadCosmonautsSuccess should return the list of known Cosmonauts', () => {
      const cosmonauts = [
        createCosmonautsEntity('PRODUCT-AAA'),
        createCosmonautsEntity('PRODUCT-zzz'),
      ];
      const action = CosmonautsActions.loadCosmonautsSuccess({ cosmonauts });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
