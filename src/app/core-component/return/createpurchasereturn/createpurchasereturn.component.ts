import { Component } from '@angular/core';
import { routes } from 'src/app/core/core.index';
interface data {
  value: string;
}
@Component({
  selector: 'app-createpurchasereturn',
  templateUrl: './createpurchasereturn.component.html',
  styleUrls: ['./createpurchasereturn.component.scss'],
})
export class CreatepurchasereturnComponent {
  public selectedValue2 = '' ;
  public selectedValue1 = ''
  public selectedValue3 = '' ;

  public routes = routes;
  selectedList2: data[] = [
    {value: 'Choose Status'},
    {value: 'Complete'},
    {value: 'Inprogress'},
  ];
  selectedList1: data[] = [
    {value: 'Choose Supplier'},
    {value: 'Supplier'},
  ];
  selectedList3: data[] = [
    {value: 'Select Customer'},
    {value: 'Customer'},
  ];
  public tableData = [
    {
      ProductName: 'Apple Earpods',
      NetUnitPrice: '10.00',
      Stock: '2000.00	',
      Qty: '500.00',
      Discount: '0.00',
      Tax: '50',
      Subtotal: '20000.00',
      img: 'assets/img/product/product7.jpg',
    },
    {
      ProductName: 'Macbook Pro',
      NetUnitPrice: '10.00',
      Stock: '2000.00	',
      Qty: '1500.00',
      Discount: '0.00',
      Tax: '150',
      Subtotal: '20000.00',
      img: 'assets/img/product/product6.jpg',
    },
  ];

   
  date = new Date();
   
  delete(index: number) {
    this.tableData.splice(index, 1);
  }
}
