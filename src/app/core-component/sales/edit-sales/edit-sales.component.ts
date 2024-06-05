import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-edit-sales',
  templateUrl: './edit-sales.component.html',
  styleUrls: ['./edit-sales.component.scss']
})
export class EditSalesComponent {
  public selectedValue1 = ''
  public selectedValue2 = '' ;
  public selectedValue3 = '' ;


  selectedList1: data[] = [
    {value: 'walk-in-customer'},
    {value: 'Customer Name'},
  ];
  selectedList2: data[] = [
    {value: 'Store 1'},
    {value: 'Store 2'},
  ];
  selectedList3: data[] = [
    {value: 'Choose Status'},
    {value: 'Completed'},
    {value: 'Inprogress'},
  ];
  public tableData = [
    {
      Sno:'1',
      img:'assets/img/product/product7.jpg',
      ProductName: 'Apple Earpods',
      QTY: '1.00',
      Price: '15000.00',
      Discount:'0.00',
      Tax:'0.00',
      Subtotal:'1500.00',
    },
    {
      Sno:'2',
      img:'assets/img/product/product8.jpg',
      ProductName: 'iPhone 11',
      QTY: '1.00',
      Price: '1500.00',
      Discount:'0.00',
      Tax:'0.00',
      Subtotal:'1500.00',
    },
    {
      Sno:'3',
      img:'assets/img/product/product1.jpg',
      ProductName: 'Macbook pro',
      QTY: '1.00',
      Price: '1500.00',
      Discount:'0.00',
      Tax:'0.00',
      Subtotal:'1500.00',
    }
  
  ]

   
  date = new Date();
 

}
