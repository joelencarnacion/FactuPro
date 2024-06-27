import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-editpurchasereturn',
  templateUrl: './editpurchasereturn.component.html',
  styleUrls: ['./editpurchasereturn.component.scss']
})
export class EditpurchasereturnComponent {
  public routes = routes;
  public selectedValue1 = ''
  public selectedValue2 = '' ;

  selectedList1: data[] = [
    {value: 'Apex Computers'},
    {value: 'Supplier'},
  ];
  selectedList2: data[] = [
    {value: 'Sent'},
  ];
  public tableData = [
    {
      img:'assets/img/product/product7.jpg',
      ProductName:'Apple Earpods',
      NetUnitPrice:'10.00',
      Stock: '2000.00	',
      QTY: '500.00	',
      Discount: '0.00',
      Tax:'50',
      Subtotal:'20000.00',
    },
    {
      img:'assets/img/product/product6.jpg',
      ProductName:'Macbook Pro',
      NetUnitPrice:'10.00',
      Stock: '2000.00	',
      QTY: '1500.00	',
      Discount: '0.00',
      Tax:'150',
      Subtotal:'20000.00',
    }
  ]

   
  date = new Date();
 
  delete(index: number)
  {
    this.tableData.splice(index, 1);
  }
}
