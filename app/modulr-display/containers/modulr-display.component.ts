import { Component, OnInit } from '@angular/core';

import { AccountService } from '../services/account.service';

import  { Account, Identifier } from '../models/account.interface';

@Component({
  selector: 'modulr-display',
  styleUrls: ['modulr-display.component.scss'],
  template: `
    <div>
      <modulr-search></modulr-search>
      <modulr-table
        [accounts]="accounts">
      </modulr-table>
    </div>
  `
})

export class ModulrDisplayContainer implements OnInit {

  accounts: Account[]

  constructor(
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.accountService
      .getAccounts()
      .subscribe((data: Account[]) => this.accounts = data);
  }


}
