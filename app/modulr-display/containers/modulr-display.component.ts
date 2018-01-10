import { Component, OnInit } from '@angular/core';

import { AccountService } from '../services/account.service';

import { FilterPipe } from '../pipe/search-filter.pipe';

import  { Account, Identifier } from '../models/account.interface';

@Component({
  selector: 'modulr-display',
  styleUrls: ['modulr-display.component.scss'],
  template: `
    <div class="modulr-display_container">
      <modulr-search
        class="modulr-display_searchbar"
        (search)="handleSearch($event)">
      </modulr-search>
      <button class="modulr-display_button">Create new customer</button>
    </div>
    <modulr-table
      [accounts]="accounts | FilterPipe: searchQuery : searchCriteria">
    </modulr-table>
  `
})

export class ModulrDisplayContainer implements OnInit {

  accounts: Account[]

  searchQuery: string;

  searchCriteria: string[];

  constructor(
    private accountService: AccountService,
  ) {}

  ngOnInit() {
    this.accountService
      .getAccounts()
      .subscribe((data: Account[]) => this.accounts = data);
  }

  handleSearch(event: string) {
    this.searchQuery = event;
    this.searchCriteria = ['name', 'id'];
  }

}
