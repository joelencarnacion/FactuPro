import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-editsalesreturn',
  templateUrl: './editsalesreturn.component.html',
  styleUrls: ['./editsalesreturn.component.scss']
})
export class EditsalesreturnComponent {
  public selectedValue2 = '' ;
  public selectedValue1 = ''

  selectedList2: data[] = [
    {value: 'Choose Status'},
    {value: 'Complete'},
    {value: 'Inprogress'},
  ];
  selectedList1: data[] = [
    {value: 'Thomas'},
    {value: 'Customer'},
  ];
  public tableData = [
    {
      img:'assets/img/product/product7.jpg',
      ProductName:'Apple Earpods',
      NetUnitPrice:'150',
      Stock: '500	',
      QTY: '500	',
      Discount: '100',
      Tax:'50',
      Subtotal:'250',
    },
    {
      img:'assets/img/product/product6.jpg',
      ProductName:'Macbook Pro',
      NetUnitPrice:'150',
      Stock: '500	',
      QTY: '500	',
      Discount: '100',
      Tax:'50',
      Subtotal:'250',
    }
  ]

   

  date = new Date();
 
  delete(index: number)
  {
    this.tableData.splice(index, 1);
  }
}
