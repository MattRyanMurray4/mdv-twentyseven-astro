import { CoreDataModule } from '@astro/core-data';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@astro/material';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreStateModule } from '@astro/core-state';
import { CosmonautsComponent } from './cosmonauts/cosmonauts.component';
import { CosmonautsListComponent } from './cosmonauts/cosmonauts-list/cosmonauts-list.component';
import { CosmonautDetailsComponent } from './cosmonauts/cosmonaut-details/cosmonaut-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing.module';
import { UiLibraryModule } from '@astro/ui-library';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CosmonautsComponent,
    CosmonautsListComponent,
    CosmonautDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    CoreDataModule,
    CoreStateModule,
    UiLibraryModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
