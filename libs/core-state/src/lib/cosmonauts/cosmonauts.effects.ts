import { CosmonautsService } from '@astro/core-data';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import {
  loadCosmonaut,
  loadCosmonautFailure,
  loadCosmonautSuccess,
  loadCosmonauts,
  loadCosmonautsFailure,
  loadCosmonautsSuccess,
} from './cosmonauts.actions';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as CosmonautsActions from './cosmonauts.actions';

@Injectable()
export class CosmonautsEffects {
  loadCosmonauts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCosmonauts),
      switchMap(() =>
        this.cosmonautsService.all().pipe(
          map((persons) => loadCosmonautsSuccess({ persons })),
          catchError((error) => of(loadCosmonautsFailure({ error })))
        )
      )
    )
  );

  loadCosmonaut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCosmonaut),
      switchMap(({ id }) =>
        this.cosmonautsService.find(id).pipe(
          map((person) => loadCosmonautSuccess({ person })),
          catchError((error) => of(loadCosmonautFailure({ error })))
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private cosmonautsService: CosmonautsService
  ) {}
}
