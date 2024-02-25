import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-layout',
  templateUrl: './system-layout.component.html',
  styleUrls: ['./system-layout.component.css']
})
export class SystemLayoutComponent implements OnInit {

  drawerOpened : boolean = false;
  drawerWidth : number = 250;
  constructor() { }

  ngOnInit() {
  }
  receiveResultDrawerOpened (result: boolean) {
    this.drawerOpened = result; 
  }
  receiveResultDrawerWidth (result: number) {
    this.drawerWidth = result; 
  }

}
