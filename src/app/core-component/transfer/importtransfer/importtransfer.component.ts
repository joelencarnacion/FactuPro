import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-importtransfer',
  templateUrl: './importtransfer.component.html',
  styleUrls: ['./importtransfer.component.scss']
})
export class ImporttransferComponent {
  public selectedValue1 = ''
  public selectedValue2 = '' ;
  public selectedValue3 = '' ;


  selectedList1: data[] = [
    {value: 'Choose'},
    {value: 'Store 1'},
    {value: 'Store 2'},
  ];
  selectedList2: data[] = [
    {value: 'Store 1'},
    {value: 'Store 2'},
  ];
  selectedList3: data[] = [
    {value: 'Choose Status'},
    {value: 'Inprogress'},
    {value: 'Complete'},
  ];
   

 

}
