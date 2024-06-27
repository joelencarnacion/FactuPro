import { Component } from '@angular/core';
import { routes } from 'src/app/core/core.index';
interface data {
  value: string;
}
@Component({
  selector: 'app-addtransfer',
  templateUrl: './addtransfer.component.html',
  styleUrls: ['./addtransfer.component.scss'],
})
export class AddtransferComponent {
  public selectedValue2 = '' ;
  public selectedValue1 = '' ;
  public selectedValue3 = '' ;


  public routes = routes;
  selectedList2: data[] = [
    {value: 'Choose Status'},
    {value: 'Complete'},
    {value: 'Inprogress'},
  ];
  selectedList1: data[] = [
    {value: 'Choose'},
    {value: 'Store 1'},
    {value: 'Store 2'},
  ];
  selectedList3: data[] = [
    {value: 'Choose'},
    {value: 'Store 1'},
    {value: 'Store 2'},
  ];
  public tableData = [
    {
      ProductName: 'Apple Earpods',
      QTY: '1',
      Price: '1500.00',
      Stock: '50.00',
      Discount: '0.00',
      Tax: '0.00',
      TotalCost: '1500.00',
    },
  ];

   
  date = new Date();
   
  delete(index: number) {
    this.tableData.splice(index, 1);
  }
}
