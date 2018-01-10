import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterPipe',
})

export class FilterPipe implements PipeTransform {
  transform(accounts: Account[], searchQuery: string, searchCriteria: string[]) {
    if (searchQuery) {
      searchQuery = searchQuery.toLowerCase();
      return accounts.filter((account: Account) => {
        let isTrue = false;
        for (const k in searchCriteria) {
          if (account[searchCriteria[k]].toLowerCase().indexOf(searchQuery) > -1) {
            isTrue = true;
          }
          if (isTrue) {
            return account
          }
        }
      })
    }
  }
}
