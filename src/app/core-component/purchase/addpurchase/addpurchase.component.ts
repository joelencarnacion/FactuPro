import { Component } from '@angular/core';
import { routes } from 'src/app/core/core.index';
interface data {
  value: string;
}
@Component({
  selector: 'app-addpurchase',
  templateUrl: './addpurchase.component.html',
  styleUrls: ['./addpurchase.component.scss']
})
export class AddpurchaseComponent {
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
    {value: 'Select'},
    {value: 'Supplier'},
  ];
  selectedList3: data[] = [
    {value: 'Choose'},
    {value: 'Supplier Name'},
  ];
  public tableData = [
    {
      ProductName: 'Apple Earpods',
      QTY: '10.00	',
      PurchasePrice: '2000.00',
      Discount: '500.00',
      Tax : '0.00',
      TaxAmount: '0.00',
      UnitCost: '2000.00	',
      TotalCost: '2000.00	',
      img: 'assets/img/product/product7.jpg',
    },
    {
      ProductName: 'Macbook Pro',
      QTY: '15.00	',
      PurchasePrice: '6000.00',
      Discount: '100.00',
      Tax : '0.00',
      TaxAmount: '0.00',
      UnitCost: '1000.00	',
      TotalCost: '1000.00	',
      img: 'assets/img/product/product6.jpg',
    }]
  
     
    date = new Date();
 
  delete(index: number)
  {
    this.tableData.splice(index, 1);
  }
}
