import { ActionReducerMap } from '@ngrx/store';
import {
  CosmonautsState,
  COSMONAUTS_FEATURE_KEY,
  personReducer,
} from './cosmonauts/cosmonauts.reducer';

export interface AppState {
  [COSMONAUTS_FEATURE_KEY]: CosmonautsState;
}

export const reducers: ActionReducerMap<AppState> = {
  [COSMONAUTS_FEATURE_KEY]: personReducer,
};
