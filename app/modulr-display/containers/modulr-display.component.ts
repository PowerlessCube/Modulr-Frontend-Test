import { Component } from '@angular/core';

@Component({
  selector: 'modulr-display',
  styleUrls: ['modulr-display.component.scss'],
  template: `
    <div>
        <header>Modulr Header section</header>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Dashboard</li>
            <li>Admin</li>
            <li>Jack Reacher</li>
          </ul>
        </nav>
        <footer>
          <p>Footer stuff here</p>
        </footer>
    </div>
  `
})

export class ModulrDisplayContainer {}