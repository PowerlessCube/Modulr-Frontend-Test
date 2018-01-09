import { Component, Input } from '@angular/core';

@Component({
  selector: 'modulr-table',
  styleUrls: ['modulr-table.component.scss'],
  template: `
    <table>
      <tr>
        <th>Account ID</th>
        <th>Account Name</th>
        <th>Account Number</th>
        <th>Sort code</th>
        <th>Balance</th>
      </tr>
      <tr *ngFor="let account of accounts">
        <td>{{ account.id }}</td>
        <td>{{ account.name }}</td>
        <td>{{ account.balance | currency: account.currency:true }}</td>
      </tr>
    </table>
  `
})

export class ModulrTableComponent {
  @Input()
  accounts: Account[];
}
