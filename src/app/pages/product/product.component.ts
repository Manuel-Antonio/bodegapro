import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/data/product.model';
import { TableColumn } from 'src/app/models/features/table/table-column';
import {dateFormat} from 'src/app/utils/dateUtils'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ELEMENT_COLUMNS: TableColumn[] = [
    { field: 'id', header: '#' },
    { field: 'name', header: 'Nombre' },
    { field: 'description', header: 'Descripcion' },
    { field: 'price', header: 'Precio' },
    { field: 'stock', header: 'Cantidad' },
    { field: 'date', header: 'Ultima modificacion' },
  ];
  ELEMENT_DATA: Product[] = [
    {
      id: '1',
      name: 'Camisa',
      description: 'Camisa de algodón para hombre',
      price: '25.99',
      stock: '100',
      date: dateFormat(new Date('2024-02-22'), "DD-MM-YYYY HH:mm:ss")
    },
    {
      id: '2',
      name: 'Pantalón',
      description: 'Pantalón de mezclilla para mujer',
      price: '39.99',
      stock: '75',
      date: dateFormat(new Date('2024-02-21'), "DD-MM-YYYY HH:mm:ss")
    },
    {
      id: '3',
      name: 'Zapatos',
      description: 'Zapatos deportivos para correr',
      price: '49.99',
      stock: '50',
      date: dateFormat(new Date('2024-02-20'), "DD-MM-YYYY HH:mm:ss")
    },
    {
      id: '4',
      name: 'Teléfono',
      description: 'Teléfono inteligente con pantalla táctil',
      price: '299.99',
      stock: '30',
      date: dateFormat(new Date('2024-02-19'), "DD-MM-YYYY HH:mm:ss")
    },
    {
      id: '5',
      name: 'Portátil',
      description: 'Computadora portátil con procesador rápido',
      price: '699.99',
      stock: '20',
      date: dateFormat(new Date('2024-02-18'), "DD-MM-YYYY HH:mm:ss")
    },
    {
      id: '6',
      name: 'Teclado',
      description: 'Teclado inalámbrico ergonómico',
      price: '49.99',
      stock: '40',
      date: dateFormat(new Date('2024-02-17'), "DD-MM-YYYY HH:mm:ss")
    },
    {
      id: '7',
      name: 'Mouse',
      description: 'Mouse óptico con sensor de alta precisión',
      price: '19.99',
      stock: '60',
      date: dateFormat(new Date('2024-02-16'), "DD-MM-YYYY HH:mm:ss")
    },
    {
      id: '8',
      name: 'Auriculares',
      description: 'Auriculares Bluetooth con cancelación de ruido',
      price: '79.99',
      stock: '25',
      date: dateFormat(new Date('2024-02-15'), "DD-MM-YYYY HH:mm:ss")
    },
    {
      id: '9',
      name: 'Cámara',
      description: 'Cámara digital con lente intercambiable',
      price: '199.99',
      stock: '15',
      date: dateFormat(new Date('2024-02-14'), "DD-MM-YYYY HH:mm:ss")
    },
    {
      id: '10',
      name: 'Impresora',
      description: 'Impresora multifuncional de inyección de tinta',
      price: '129.99',
      stock: '35',
      date: dateFormat(new Date('2024-02-13'), "DD-MM-YYYY HH:mm:ss")
    }
  ];

  displayedColumns: TableColumn[] = this.ELEMENT_COLUMNS;
  dataSource = new MatTableDataSource<Product>(this.ELEMENT_DATA);
  dataFilter = new MatTableDataSource<Product>();

  dataFields = this.ELEMENT_COLUMNS.map(x => x.field);

  @ViewChild(MatPaginator) paginator ?: MatPaginator;
  constructor() { }


  ngOnInit() {
    this.dataFilter =  this.dataSource;
  }

  receiveDataFilter(dataReceive : MatTableDataSource<Product>) {
    this.dataFilter = dataReceive;
  }
}
