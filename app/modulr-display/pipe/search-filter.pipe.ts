import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterPipe',
})

export class FilterPipe implements PipeTransform {
  transform(account: any, searchQuery: string, searchCriteria: any) {
    if (searchQuery) {
      console.log(searchQuery);
      searchQuery = searchQuery.toLowerCase();
      return account.filter((el: any) => {
        let isTrue = false;
        for (const k in searchCriteria) {
          if (el[searchCriteria[k]].toLowerCase().indexOf(searchQuery) > -1) {
            isTrue = true;
          }
          if (isTrue) {
            return el
          }
        }
      })
    }
    return account;
  }
}
