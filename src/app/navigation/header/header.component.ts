import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() SideNavigationOpenToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onToggleOpenSidenav() {
    this.SideNavigationOpenToggle.emit(analyzeAndValidateNgModules);

  }

}
