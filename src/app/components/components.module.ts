import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router'; 
import {MatTableModule} from '@angular/material/table';
import { ReusableTableComponent } from './reusable-table/reusable-table.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    ReusableTableComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule,
    MatTableModule
  ],
  exports: [
    HeaderComponent,
    NavigationComponent,
    ReusableTableComponent
  ]
})
export class ComponentsModule { }
