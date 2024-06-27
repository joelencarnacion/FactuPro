import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-editcustomer',
  templateUrl: './editcustomer.component.html',
  styleUrls: ['./editcustomer.component.scss']
})
export class EditcustomerComponent {
  public selectedValue1 = ''
  public selectedValue2 = '' ;

  selectedList1: data[] = [
    {value: 'United States'},
    {value: 'India'},
  ];
  selectedList2: data[] = [
    {value: 'Newyork'},
    {value: 'City'},
  ];
   

 

}
