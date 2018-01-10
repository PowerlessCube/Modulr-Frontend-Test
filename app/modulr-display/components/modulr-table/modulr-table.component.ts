import { Component, Input } from '@angular/core';

@Component({
  selector: 'modulr-table',
  styleUrls: ['modulr-table.component.scss'],
  template: `
    <div class="Table">
      <div class="Table-row Table-header">
        <div class="Table-row-item" data-header="AccountId">Account ID</div>
        <div class="Table-row-item u-Flex-grow3" data-header="AccountName">Account Name</div>
        <div class="Table-row-item" data-header="AccountNumber">Account Number</div>
        <div class="Table-row-item" data-header="SortCode">Sort code</div>
        <div class="Table-row-item" data-header="Balance">Balance</div>
      </div>
      <div class="Table-row" *ngFor="let account of accounts">
        <div class="Table-row-item" data-header="AccountId">{{ account.id }}</div>
        <div class="Table-row-item u-Flex-grow3" data-header="AccountName">{{ account.name }}</div>
        <div class="Table-row-item" data-header="AccountNumber">{{account.identifiers[0]['accountNumber']}}</div>
        <div class="Table-row-item" data-header="SortCode">{{ account.identifiers[0]['sortCode'] | SortCodePipe }}</div>
        <div class="Table-row-item" data-header="Balance">{{ account.balance | currency: account.currency : true }}</div>
      </div>
    </div>
  `
})

export class ModulrTableComponent {
  @Input()
  accounts: Account[];
}
