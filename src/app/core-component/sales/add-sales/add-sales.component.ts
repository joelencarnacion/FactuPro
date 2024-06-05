import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-add-sales',
  templateUrl: './add-sales.component.html',
  styleUrls: ['./add-sales.component.scss']
})
export class AddSalesComponent {
  public selectedValue1 = ''
  public selectedValue2 = '' ;
  public selectedValue3 = '' ;

  selectedList2: data[] = [
    {value: 'Choose Status'},
    {value: 'Complete'},
    {value: 'Inprogress'},
  ];
  selectedList1: data[] = [
    {value: 'Choose'},
    {value: 'Customer Name'},
  ];
  selectedList3: data[] = [
    {value: 'Choose'},
    {value: 'Supplier Name'},
  ];
  public tableData = [
    {
      Sno:'1',
      ProductName: 'Apple Earpods',
      QTY: '1.00',
      Price: '15000.00',
      Discount: '0.00',
      Tax	: '0.00',
      Subtotal: '1500.00',
      img: 'assets/img/product/product7.jpg',
      },
    {
      Sno:'2',
      ProductName: 'iPhone 11',
      QTY: '1.00',
      Price: '1500.00',
      Discount: '0.00',
      Tax	: '0.00',
      Subtotal: '1500.00',
      img: 'assets/img/product/product8.jpg',
    },
    {
      Sno:'3',
      ProductName: 'Macbook pro',
      QTY: '1.00',
      Price: '1500.00',
      Discount: '0.00',
      Tax	: '0.00',
      Subtotal: '1500.00',
      img: 'assets/img/product/product1.jpg',
    },
  ]
   
  date = new Date();
 
  delete(index: number)
  {
    this.tableData.splice(index, 1);
  }
}
