import { Component } from '@angular/core';
import { routes } from 'src/app/core/core.index';
interface data {
  value: string;
}
@Component({
  selector: 'app-addquotation',
  templateUrl: './addquotation.component.html',
  styleUrls: ['./addquotation.component.scss'],
})
export class AddquotationComponent {
  public selectedValue2 = '' ;
  public selectedValue1 = ''

  public routes = routes;
  selectedList2: data[] = [
    {value: 'Choose Status'},
    {value: 'Complete'},
    {value: 'Inprogress'},
  ];
  selectedList1: data[] = [
    {value: 'Select Customer'},
    {value: 'Customer'},
  ];
  public tableData = [
    {
      Product: 'Apple Earpods',
      NetUnitPrice: '150',
      Stock: '500',
      Qty: '500',
      Discount: '100',
      Tax: '250',
      Subtotal: '500',
      img: 'assets/img/product/product7.jpg',
    },
    {
      Product: 'Macbook Pro',
      NetUnitPrice: '15.00',
      Stock: '6000.00',
      Qty: '100.00',
      Discount: '0.00',
      Tax: '0.00',
      Subtotal: '1000.00',
      img: 'assets/img/product/product6.jpg',
    },
  ];

   
  date = new Date();
   
  delete(index: number) {
    this.tableData.splice(index, 1);
  }
}
