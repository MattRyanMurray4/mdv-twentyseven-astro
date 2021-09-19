import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { RootStoreConfig, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from '.';
import { CosmonautsEffects } from './cosmonauts/cosmonauts.effects';
import { CosmonautsFacade } from './cosmonauts/cosmonauts.facade';

const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true,
  },
};

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([CosmonautsEffects]),
    StoreDevtoolsModule.instrument({ name: 'astro-app' }),
  ],
  providers: [CosmonautsFacade],
})
export class CoreStateModule {}
