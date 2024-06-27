import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-edittransfer',
  templateUrl: './edittransfer.component.html',
  styleUrls: ['./edittransfer.component.scss']
})
export class EdittransferComponent {
  public selectedValue1 = ''
  public selectedValue2 = '' ;
  public selectedValue3 = '' ;


  public routes = routes;
  selectedList1: data[] = [
    {value: 'Store 1'},
    {value: 'Store 2'},
  ];
  selectedList2: data[] = [
    {value: 'Store 2'},
    {value: 'Store 1'},
  ];
  selectedList3: data[] = [
    {value: 'Sent'},
    {value: 'Completed'},
    {value: 'Inprogress'},
  ];
  public tableData = [
    {
      img:'assets/img/product/product7.jpg',
      ProductName:'Apple Earpods',
      QTY:'1',
      Price: '1500.00	',
      Stock: '50.00	',
      Discount: '0.00',
      Tax:'0.00',
      TotalCost:'1500.00',
    }]

   
  date = new Date();
 
  delete(index:number)
  {
    this.tableData.splice(index, 1);
  }
}
