import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-addsupplier',
  templateUrl: './addsupplier.component.html',
  styleUrls: ['./addsupplier.component.scss']
})
export class AddsupplierComponent {
  public selectedValue1 = ''
  public selectedValue2 = '' ;

  selectedList1: data[] = [
    {value: 'Choose City'},
    {value: 'City 1'},
    {value: 'City 2'},
  ];
  selectedList2: data[] = [
    {value: 'Choose Country'},
    {value: 'India'},
    {value: 'USA'},
  ];
   

 

}
