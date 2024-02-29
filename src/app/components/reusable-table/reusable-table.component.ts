import { Component, Input, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/models/features/table/table-column';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reusable-table',
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.css']
})
export class ReusableTableComponent implements OnInit {
  @Input() columns: TableColumn[] = [];
  @Input() data?: any;

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.dataSource.data = this.data.filteredData;
    this.displayedColumns = this.columns.map(column => column.field);
  }
}
