import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modulr-search',
  styleUrls: ['modulr-search.component.scss'],
  template: `
    <div>
      <input
        type="text"
        #searchQuery
        (keyup.enter)="handleSearch(searchQuery.value)"
        >
      <button
        type="button"
        (click)="handleSearch(searchQuery.value)">
        Submit
      </button>
    </div>
  `
})

export class ModulrSearchComponent {

  @Output()
  search: EventEmitter<any> = new EventEmitter();

  handleSearch(value: string) {
    this.search.emit(value);
  }
}
