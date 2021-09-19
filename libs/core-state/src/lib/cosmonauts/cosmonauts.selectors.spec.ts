import { CosmonautsEntity } from './cosmonauts.models';
import {
  cosmonautsAdapter,
  CosmonautsPartialState,
  initialState,
} from './cosmonauts.reducer';
import * as CosmonautsSelectors from './cosmonauts.selectors';

describe('Cosmonauts Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCosmonautsId = (it: CosmonautsEntity) => it.id;
  const createCosmonautsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CosmonautsEntity);

  let state: CosmonautsPartialState;

  beforeEach(() => {
    state = {
      cosmonauts: cosmonautsAdapter.setAll(
        [
          createCosmonautsEntity('PRODUCT-AAA'),
          createCosmonautsEntity('PRODUCT-BBB'),
          createCosmonautsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Cosmonauts Selectors', () => {
    it('getAllCosmonauts() should return the list of Cosmonauts', () => {
      const results = CosmonautsSelectors.getAllCosmonauts(state);
      const selId = getCosmonautsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = CosmonautsSelectors.getSelected(state) as CosmonautsEntity;
      const selId = getCosmonautsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getCosmonautsLoaded() should return the current "loaded" status', () => {
      const result = CosmonautsSelectors.getCosmonautsLoaded(state);

      expect(result).toBe(true);
    });

    it('getCosmonautsError() should return the current "error" state', () => {
      const result = CosmonautsSelectors.getCosmonautsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
