import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SortCodePipe',
})

export class SortCodePipe implements PipeTransform {
  transform(sortCode: number): string {
    if (sortCode) {
      const regex = /^(\d{2})(\d{2})(\d{2})$/g;
      const replacer = (match, p1, p2, p3, offset, string) => [p1, p2, p3].join('-')
      return sortCode.toString().replace(regex, replacer);
    }
  }
}
