import { MaterialModule } from '@astro/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { WildComponent } from './wild/wild.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [ToolbarComponent, LoginComponent, WildComponent],
  exports: [LoginComponent, WildComponent, ToolbarComponent],
})
export class UiLibraryModule {}
