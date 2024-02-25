import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() drawerOpened ?: boolean;
  @Input() drawerWidth ?: number;

  @Output() messageDrawerOpened = new EventEmitter<boolean>();
  @Output() messageDrawerWidth = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  toggleDrawer() {
    this.drawerOpened = !this.drawerOpened;
    this.drawerWidth = this.drawerOpened ? 250 : 56;

    this.messageDrawerOpened.emit(this.drawerOpened);
    this.messageDrawerWidth.emit(this.drawerWidth);
  }
}
