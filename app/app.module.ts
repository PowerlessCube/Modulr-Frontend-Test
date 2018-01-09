import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ModulrDisplayModule } from './modulr-display/modulr-display.module'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModulrDisplayModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
