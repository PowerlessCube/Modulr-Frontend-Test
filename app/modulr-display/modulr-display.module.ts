import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FilterPipe } from './pipe/search-filter.pipe';
import { SortCodePipe } from './pipe/sort-code.pipe';

import { ModulrSearchComponent } from './components/modulr-search/modulr-search.component';
import { ModulrTableComponent } from './components/modulr-table/modulr-table.component';

import { ModulrDisplayContainer } from '../modulr-display/containers/modulr-display.component';

import { AccountService } from './services/account.service';

@NgModule({
  declarations: [
    ModulrDisplayContainer,
    ModulrSearchComponent,
    ModulrTableComponent,
    FilterPipe,
    SortCodePipe,
  ],
  providers: [
    AccountService
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
