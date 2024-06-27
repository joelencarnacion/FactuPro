import { Component } from '@angular/core';
interface data {
  value: string;
}
@Component({
  selector: 'app-editsupplier',
  templateUrl: './editsupplier.component.html',
  styleUrls: ['./editsupplier.component.scss']
})
export class EditsupplierComponent {
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
