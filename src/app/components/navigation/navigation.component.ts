import { Component, OnInit } from '@angular/core';
import { MenuOption } from 'src/app/models/features/menu-option.interface';
import { MENU_OPTIONS } from 'src/app/models/features/menu-options';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  menuOptions: MenuOption[] = MENU_OPTIONS;
  constructor() { }

  ngOnInit() {
  }

}
