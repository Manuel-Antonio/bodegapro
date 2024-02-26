import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/data/product.model';
import { TableColumn } from 'src/app/models/features/table/table-column';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ELEMENT_DATA: TableColumn[] = [
    { field: 'id', header: '#' },
    { field: 'name', header: 'Nombre' },
    { field: 'description', header: 'Descripcion' },
    { field: 'price', header: 'Precio' },
    { field: 'stock', header: 'Cantidad' },
    { field: 'date', header: 'Ultima modificacion' },
  ];
  displayedColumns: TableColumn[] = this.ELEMENT_DATA;

  dataSource: Product[] = [
    {
      id: '1',
      name: 'Camisa',
      description: 'Camisa de algodón para hombre',
      price: '25.99',
      stock: '100',
      date: new Date('2024-02-22')
    },
    {
      id: '2',
      name: 'Pantalón',
      description: 'Pantalón de mezclilla para mujer',
      price: '39.99',
      stock: '75',
      date: new Date('2024-02-21')
    },
    {
      id: '3',
      name: 'Zapatos',
      description: 'Zapatos deportivos para correr',
      price: '49.99',
      stock: '50',
      date: new Date('2024-02-20')
    },
    {
      id: '4',
      name: 'Teléfono',
      description: 'Teléfono inteligente con pantalla táctil',
      price: '299.99',
      stock: '30',
      date: new Date('2024-02-19')
    },
    {
      id: '5',
      name: 'Portátil',
      description: 'Computadora portátil con procesador rápido',
      price: '699.99',
      stock: '20',
      date: new Date('2024-02-18')
    },
    {
      id: '6',
      name: 'Teclado',
      description: 'Teclado inalámbrico ergonómico',
      price: '49.99',
      stock: '40',
      date: new Date('2024-02-17')
    },
    {
      id: '7',
      name: 'Mouse',
      description: 'Mouse óptico con sensor de alta precisión',
      price: '19.99',
      stock: '60',
      date: new Date('2024-02-16')
    },
    {
      id: '8',
      name: 'Auriculares',
      description: 'Auriculares Bluetooth con cancelación de ruido',
      price: '79.99',
      stock: '25',
      date: new Date('2024-02-15')
    },
    {
      id: '9',
      name: 'Cámara',
      description: 'Cámara digital con lente intercambiable',
      price: '199.99',
      stock: '15',
      date: new Date('2024-02-14')
    },
    {
      id: '10',
      name: 'Impresora',
      description: 'Impresora multifuncional de inyección de tinta',
      price: '129.99',
      stock: '35',
      date: new Date('2024-02-13')
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
