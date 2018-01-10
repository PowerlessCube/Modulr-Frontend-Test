import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modulr-search',
  styleUrls: ['modulr-search.component.scss'],
  template: `
    <h4>Search for an account by account name or ID</h4>
    <div class="modulr-search_container">
      <input
        class="modulr-search_input"
        type="text"
        placeholder="Enter an account name or ID"
        #searchQuery
        (keyup.enter)="handleSearch(searchQuery.value)"
        >
      <button
        class="modulr-search_button"
        type="button"
        (click)="handleSearch(searchQuery.value)">
        Go
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
