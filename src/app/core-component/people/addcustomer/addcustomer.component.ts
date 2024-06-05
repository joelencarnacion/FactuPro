import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.scss']
})
export class AddcustomerComponent {
  public selectedValue1 = ''
  public selectedValue2 = '' ;

  selectedList1: data[] = [
    {value: 'Choose Country'},
    {value: 'India'},
    {value: 'USA'},
  ];
  selectedList2: data[] = [
    {value: 'Choose City'},
    {value: 'City 1'},
    {value: 'City 2'},
  ];
   

 

}
