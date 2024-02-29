import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router'; 
import {MatTableModule} from '@angular/material/table';
import { ReusableTableComponent } from './reusable-table/reusable-table.component';
import { FilterComponent } from './filter/filter.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    ReusableTableComponent,
    FilterComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule
  ],
  exports: [
    HeaderComponent,
    NavigationComponent,
    ReusableTableComponent,
    FilterComponent,
    PaginationComponent
  ]
})
export class ComponentsModule { }
