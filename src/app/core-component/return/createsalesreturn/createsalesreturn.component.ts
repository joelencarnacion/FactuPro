import { Component } from '@angular/core';
import { routes } from 'src/app/core/core.index';
interface data {
  value: string;
}
@Component({
  selector: 'app-createsalesreturn',
  templateUrl: './createsalesreturn.component.html',
  styleUrls: ['./createsalesreturn.component.scss']
})
export class CreatesalesreturnComponent {
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
    {value: 'Customer'}
  ];
  public tableData = [
    {
      ProductName: 'Apple Earpods',
      NetUnitPrice: '150',
      Stock: '500',
      Qty: '500',
      Discount : '100',
      Tax:'50',
      Subtotal:'250',
      img:'assets/img/product/product7.jpg'
    },
    {
      ProductName: 'Macbook Pro',
      NetUnitPrice: '150',
      Stock: '500',
      Qty: '500',
      Discount : '100',
      Tax:'50',
      Subtotal:'250',
      img:'assets/img/product/product6.jpg'
    }]

   
  date = new Date();
 
  delete(index: number)
  {
    this.tableData.splice(index, 1);
  }
}
