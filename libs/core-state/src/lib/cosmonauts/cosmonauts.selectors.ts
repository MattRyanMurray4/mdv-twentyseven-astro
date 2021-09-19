import { emptyPerson, Person } from '@astro/api-interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  COSMONAUTS_FEATURE_KEY,
  CosmonautsState,
  cosmonautsAdapter,
} from './cosmonauts.reducer';

// Lookup the 'Cosmonauts' feature state managed by NgRx
export const getCosmonautsState = createFeatureSelector<CosmonautsState>(
  COSMONAUTS_FEATURE_KEY
);

const { selectAll, selectEntities } = cosmonautsAdapter.getSelectors();

export const getCosmonautsLoaded = createSelector(
  getCosmonautsState,
  (state: CosmonautsState) => state.loaded
);

export const getCosmonautsError = createSelector(
  getCosmonautsState,
  (state: CosmonautsState) => state.error
);

export const getAllCosmonauts = createSelector(
  getCosmonautsState,
  (state: CosmonautsState) => selectAll(state)
);

export const getCosmonautsEntities = createSelector(
  getCosmonautsState,
  (state: CosmonautsState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getCosmonautsState,
  (state: CosmonautsState) => state.selectedId
);

export const getSelected = createSelector(
  getCosmonautsEntities,
  getSelectedId,
  (entities, selectedId) =>
    (selectedId ? entities[selectedId] : emptyPerson) as Person
);
