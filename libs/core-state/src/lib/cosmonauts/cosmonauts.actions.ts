import { Person } from '@astro/api-interfaces';
import { createAction, props } from '@ngrx/store';
export const init = createAction('[Cosmonauts Page] Init');

// ALL

export const loadCosmonauts = createAction('[Cosmonauts] Load All Cosmonauts');

export const loadCosmonautsSuccess = createAction(
  '[Cosmonauts] Load Cosmonauts Success',
  props<{ persons: Person[] }>()
);

export const loadCosmonautsFailure = createAction(
  '[Cosmonauts] Load Cosmonauts Failure',
  props<{ error: any }>()
);

// singular

export const loadCosmonaut = createAction(
  '[Cosmonaut] Load A Cosmonaut',
  props<{ id: string }>()
);
export const loadCosmonautSuccess = createAction(
  '[Cosmonaut] Load A Cosmonaut Success',
  props<{ person: Person }>()
);
export const loadCosmonautFailure = createAction(
  '[Cosmonaut] Load A Cosmonaut Failure',
  props<{ error: any }>()
);

// select

export const selectCosmonaut = createAction(
  '[Cosmonaut] Selected Cosmonaut',
  props<{ cosmonautId: string }>()
);
