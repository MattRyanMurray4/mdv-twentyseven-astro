import { Person } from '@astro/api-interfaces';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as CosmonautsActions from './cosmonauts.actions';

export interface CosmonautAction extends Action {
  error: string;
}

export const COSMONAUTS_FEATURE_KEY = 'cosmonauts';

export interface CosmonautsState extends EntityState<Person> {
  selectedId?: string | number; // which Cosmonauts record has been selected
  loaded: boolean; // has the Cosmonauts list been loaded
  error?: string | null; // last known error (if any)
}

export interface CosmonautsPartialState {
  readonly [COSMONAUTS_FEATURE_KEY]: CosmonautsState;
}

export const cosmonautsAdapter: EntityAdapter<Person> =
  createEntityAdapter<Person>();

export const initialState: CosmonautsState = cosmonautsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const setLoading = (state: CosmonautsState) => ({
  ...state,
  loaded: false,
  error: null,
});

const setFailure = (state: CosmonautsState, { error }: CosmonautAction) => ({
  ...state,
  error,
});

const _personReducer = createReducer(
  initialState,
  on(
    CosmonautsActions.loadCosmonaut,
    CosmonautsActions.loadCosmonauts,
    setLoading
  ),
  on(
    CosmonautsActions.loadCosmonautFailure,
    CosmonautsActions.loadCosmonautsFailure,
    setFailure
  ),
  on(CosmonautsActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(CosmonautsActions.loadCosmonautsSuccess, (state, { persons }) =>
    cosmonautsAdapter.setAll(persons, { ...state, loaded: true })
  ),
  on(CosmonautsActions.loadCosmonautsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(CosmonautsActions.loadCosmonautSuccess, (state, { person }) =>
    cosmonautsAdapter.upsertOne(person, { ...state, loaded: true })
  ),
  on(CosmonautsActions.selectCosmonaut, (state, { cosmonautId }) => ({
    ...state,
    selectedId: cosmonautId,
  }))
);
export function personReducer(
  state: CosmonautsState | undefined,
  action: Action
) {
  return _personReducer(state, action);
}
