import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ModulrDisplayContainer } from '../modulr-display/containers/modulr-display.component';

@NgModule({
  declarations: [
    ModulrDisplayContainer
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule
  ],
  exports: [
    ModulrDisplayContainer
  ]
})
export class ModulrDisplayModule {}