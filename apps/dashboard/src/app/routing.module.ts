import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent, WildComponent } from '@astro/ui-library';
import { CosmonautsComponent } from './cosmonauts/cosmonauts.component';

const routes: Route[] = [
  { path: '', component: LoginComponent },
  { path: 'wild', component: WildComponent },
  { path: 'cosmonauts', component: CosmonautsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
