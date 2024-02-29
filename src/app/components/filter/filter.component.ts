import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/data/product.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() data ?: MatTableDataSource<any>;
  @Input() fields ?: string[];
  @Output() dataFilter = new EventEmitter<MatTableDataSource<any>>();

  constructor() { 
    
  }

  ngOnInit() {
  
  }

  applyFilter(event: Event, fields : string[]) {
    const filterValue = (event.target as HTMLInputElement).value;
    const newDataFilter = this.data?.data.filter( item => {
      return fields.some(field => {
        return item[field].toString().toLowerCase().includes(filterValue);
      })
    });

    this.filterDataSource(newDataFilter);
    
  }

  filterDataSource(newDataFilter : any) {
    this.dataFilter.emit(new MatTableDataSource<any>(newDataFilter))
  }

}
