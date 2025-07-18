import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBar } from './menu-bar/menu-bar';
import { DataTable } from './data-table/data-table';
import { PanelModule } from 'primeng/panel';
import { Search } from './search/search';

@Component({
  selector: 'app-root',
  imports: [MenuBar, DataTable, RouterOutlet, PanelModule, Search],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('primeng-app');
}
