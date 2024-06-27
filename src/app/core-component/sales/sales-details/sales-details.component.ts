import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-sales-details',
  templateUrl: './sales-details.component.html',
  styleUrls: ['./sales-details.component.scss']
})
export class SalesDetailsComponent {
  public selectedValue2 = '' ;
  selectedList2: data[] = [
    {value: 'Choose Status'},
    {value: 'Complete'},
    {value: 'Inprogress'},
  ];
   

 

}
