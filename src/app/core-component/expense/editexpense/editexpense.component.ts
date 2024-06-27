import { Component } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-editexpense',
  templateUrl: './editexpense.component.html',
  styleUrls: ['./editexpense.component.scss']
})
export class EditexpenseComponent {
  public routes = routes;
  public selectedValue1 = ''

  selectedList1: data[] = [
    {value: 'Petrol'},
    {value: 'Diesel'},
  ];
   
  date = new Date();
 

}
