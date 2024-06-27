import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-importpurchase',
  templateUrl: './importpurchase.component.html',
  styleUrls: ['./importpurchase.component.scss']
})
export class ImportpurchaseComponent {
  public selectedValue1 = ''
  public selectedValue2 = '' ;

  selectedList1: data[] = [
    {value: 'Select'},
    {value: 'Supplier'}
  ];
  selectedList2: data[] = [
    {value: 'Select'},
    {value: 'Status'}
  ];
   

 

}
