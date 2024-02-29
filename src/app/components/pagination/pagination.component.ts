import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @ViewChild(MatPaginator) paginator ?: MatPaginator;
  
  @Input() dataSource : any;
  
  constructor() { }

  ngOnInit() {
  }



}
